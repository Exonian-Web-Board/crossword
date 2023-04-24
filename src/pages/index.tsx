import CongratsModal from '@/components/CongratsModal';
import CrosswordComponent from '@/components/Crossword';
import Footer from '@/components/Footer';
import GameNav from '@/components/GameNav';
import NavBar from '@/components/NavBar';
import dbConnect from '@/lib/mongoose';
import { Crossword } from '@/models/Crossword';
import { User } from '@/models/User';
import { CrosswordProviderImperative } from '@jaredreisinger/react-crossword';
import 'animate.css';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';

export default function CrosswordPage({
	crossword,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { data: session } = useSession();
	const [reset, setReset] = useState(false);
	const [correct, setCorrect] = useState(false);
	const [modalShow, setModalShow] = useState(false);
	const crosswordRef = useRef<CrosswordProviderImperative>(null);

	useEffect(() => {
		const guesses = localStorage.getItem('guesses');
		if (guesses) {
			const date = new Date(JSON.parse(guesses).date);

			if (date < new Date(JSON.parse(crossword).date)) {
				setReset(true);
			}
		}
	}, []);

	return (
		<div className="animate__animated animate__fadeIn">
			<NavBar user={session ? session.user : null} />
			<div className="border-b border-neutral-200 dark:border-neutral-700 transition-colors py-4 px-5">
				<span className="md:text-5xl text-4xl pl-5 font-black items-center border-l-8 border-black dark:border-neutral-500">
					{crossword !== 'null'
						? JSON.parse(crossword).title
						: 'No Crosswords Yet'}
				</span>
				<br className="md:hidden" />
				<span className="md:px-3 md:py-0 py-2 md:text-lg text-base font-light">
					{JSON.parse(crossword).authors}
				</span>
			</div>
			<GameNav
				correct={correct}
				crosswordRef={crosswordRef}
				reset={reset}
			/>
			{correct && (
				<>
					<CongratsModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</>
			)}
			{crossword !== 'null' ? (
				<CrosswordComponent
					data={crossword}
					setCorrect={setCorrect}
					setModalShow={setModalShow}
					cRef={crosswordRef}
				/>
			) : (
				<div className="text-center text-2xl font-bold py-10">
					No Crosswords Yet
				</div>
			)}

			<Footer />
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	await dbConnect();

	const crossword = await Crossword.findOne({}, {}, { sort: { date: -1 } });
	const leaderboard = await User.find(
		{ completed: { $gt: 0 } },
		{ sort: { completed: -1 } }
	).select('name completed today');

	return {
		props: {
			crossword: JSON.stringify(crossword),
			leaderboard: JSON.stringify(leaderboard),
		},
	};
};
