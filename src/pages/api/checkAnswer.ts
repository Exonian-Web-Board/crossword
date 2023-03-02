import dbConnect from '@/lib/mongoose';
import { Crossword } from '@/models/Crossword';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import { User } from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const session = await getServerSession(req, res, authOptions);

	const { guesses } = req.body;

	const crossword = await Crossword.findOne({}, {}, { sort: { date: -1 } });

	const correct = JSON.stringify(crossword.solution) === JSON.stringify(guesses);

	if (correct) {
		if (!session) {
			return res.status(200).json({ isLoggedIn: false, correct: true });
		} else {
			await dbConnect();

			if (!session.user.today) {
				if (!session.user.completed) {
					session.user.completed = 1;
				} else {
					session.user.completed++;
				}
				session.user.today = true;
				session.user.timeToday = req.body.time;

				await User.findOneAndUpdate(
					{ _id: session.user.id },
					{
						completed: session.user.completed,
						today: session.user.today,
						timeToday: req.body.time,
					}
				);
			} else {
				return res.status(200).json({ alreadyComplete: true });
			}

			return res
				.status(200)
				.json({ isLoggedIn: true, correct: true, completed: session.user.completed });
		}
	} else {
		return res.status(200).json({ correct: false });
	}
}
