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
				{JSON.parse(leaderboard).length == 0 ? (
					<h1>Leaderboard is empty! Claim the throne!</h1>
				) : (
					<LeaderBoard data={leaderboard} />
				)}
			</Container>
		</Stack>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	await dbConnect();

	const leaderboard = await User.find({ today: true })
		.select('name completed today timeToday')
		.sort({ timeToday: 1 });

	return {
		props: {
			leaderboard: JSON.stringify(leaderboard),
		},
	};
};
