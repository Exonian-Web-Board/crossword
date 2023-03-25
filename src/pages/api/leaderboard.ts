import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/models/User';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
	const users = await User.find(
		{ completed: { $gt: 0 } },
		{ sort: { completed: -1 } }
	).select('name completed today');

	console.log(users);

	return res.status(200).json(users);
}
