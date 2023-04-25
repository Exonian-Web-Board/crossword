import LeaderBoard from '@/components/Leaderboard';
import NavBar from '@/components/NavBar';
import dbConnect from '@/lib/mongoose';
import { User } from '@/models/User';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Container, Stack } from 'react-bootstrap';

export default function LeaderboardPage({
	todayLeaderboard,
	allTimeLeaderboard,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { data: session } = useSession();

	const [leaderboardType, setLeaderboardType] = useState('today');

	return (
		<Stack>
			<NavBar user={session ? session.user : null} />

			<Container>
				<div className="flex justify-center gap-2 p-2">
					<button
						type="button"
						className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						onClick={() => setLeaderboardType('today')}
					>
						By Today's Time
					</button>
					<button
						type="button"
						className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						onClick={() => setLeaderboardType('allTime')}
					>
						By Number Completed
					</button>
				</div>

				{leaderboardType === 'today' ? (
					<LeaderBoard data={todayLeaderboard} />
				) : (
					<LeaderBoard data={allTimeLeaderboard} />
				)}
			</Container>
		</Stack>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	await dbConnect();

	const todayLeaderboard = await User.find({ today: true })
		.select('name completed today timeToday')
		.sort({ timeToday: 1 });

	const allTimeLeaderboard = await User.find({ completed: { $gt: 0 } })
		.select('name completed today timeToday')
		.sort({ completed: -1 });

	return {
		props: {
			todayLeaderboard: JSON.stringify(todayLeaderboard),
			allTimeLeaderboard: JSON.stringify(allTimeLeaderboard),
		},
	};
};
