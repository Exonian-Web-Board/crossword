import dotenv from 'dotenv';

dotenv.config();

import dbConnect from '../lib/mongoose';
import { Crossword } from '../models/Crossword';
import { User } from '../models/User';

(async () => {
	await dbConnect();

	const newCrossword = {
		date: new Date(),
		title: 'Third Exonian Crossword',
		solution: [
			['#', 'V', 'H', 'S', '#'],
			['T', 'E', 'E', 'T', 'H'],
			['A', 'N', 'N', 'I', 'E'],
			['B', 'U', 'N', 'N', 'Y'],
			['#', 'S', 'A', 'G', '#'],
		],
		clues: {
			Across: [
				[1, 'Old home movie format'],
				[4, 'A real mouthful'],
				[6, 'Little orphan __'],
				[7, 'Bugs, eg.'],
				[8, 'Bend under weight'],
			],
			Down: [
				[1, 'On this planet, a day lasts longer than a year'],
				[2, 'Temporary tattoo style'],
				[3, 'What hornets and hurtful words do'],
				[4, 'Key above caps lock'],
				[5, "What's going on"],
			],
		},
		puzzle: [
			['#', 1, 2, 3, '#'],
			[4, '#', '#', '#', 5],
			[6, '#', '#', '#', '#'],
			[7, '#', '#', '#', '#'],
			['#', 8, '#', '#', '#'],
		],
		authors: ['ERICLMTN'],
	};

	await Crossword.create(newCrossword);

	const users = await User.updateMany(
		{ today: true },
		{
			$set: { today: false },
			$unset: { timeToday: 1 },
		}
	);

	console.log(users);
})();
