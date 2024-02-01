import dotenv from 'dotenv';

dotenv.config();

import dbConnect from '../lib/mongoose';
import { Crossword } from '../models/Crossword';
import { User } from '../models/User';

(async () => {
	await dbConnect();

	const newCrossword = {
		date: new Date(),
		title: 'LION',
		solution: [
			['M', 'O', 'P', 'E', 'R'],
			['U', '#', 'J', 'L', 'O'],
			['S', 'I', 'M', 'B', 'A'],
			['I', 'L', '#', 'O', 'R'],
			['C', 'L', 'A', 'W', 'S'],
		],
		clues: {
			Across: [
				[1, "Simba after Mufasa's death"],
				[6, 'Protagonist of Lion King'],
				[5, 'Singer of On the Floor'],
				[8, 'Hakuna Matata it means no w__ries'],
				[9, "Lion's nails"],
			],
			Down: [
				[1, 'The Circle of Life & Hakuna Matata are examples of _____'],
				[2, 'Sleepwear without vowels (singular)'],
				[3, "Joint halfway down a lion's arm"],
				[4, 'A sound that a lion makes'],
				[7, "When a lion get's sick"],
			],
		},
		puzzle: [
			[1, '#', 2, 3, 4],
			['#', '#', 5, '#', '#'],
			[6, 7, '#', '#', '#'],
			['#', '#', '#', 8, '#'],
			[9, '#', '#', '#', '#'],
		],
		authors: ["Freddie Chang '25", "Emily Chai-Onn '25"],
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
