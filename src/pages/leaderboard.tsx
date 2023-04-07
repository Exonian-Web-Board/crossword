import LeaderBoard from '@/components/Leaderboard';
import NavBar from '@/components/NavBar';
import dbConnect from '@/lib/mongoose';
import { User } from '@/models/User';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSession } from 'next-auth/react';
import { Container, Stack } from 'react-bootstrap';

export default function LeaderboardPage({
	leaderboard,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { data: session } = useSession();

	return (
		<Stack>
			<NavBar user={session ? session.user : null} />

			<Container>
				<LeaderBoard data={leaderboard} />
			</Container>
		</Stack>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	await dbConnect();

	const leaderboard = await User.find(
		{ completed: { $gt: 0 } },
		{ sort: { completed: -1 } }
	).select('name completed today timeToday');

	return {
		props: {
			leaderboard: JSON.stringify(leaderboard),
		},
	};
};
