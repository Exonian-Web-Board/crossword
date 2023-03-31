import CongratsModal from '@/components/CongratsModal';
import CrosswordComponent from '@/components/Crossword';
import GameNav from '@/components/GameNav';
import NavBar from '@/components/NavBar';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import dbConnect from '@/lib/mongoose';
import { Crossword } from '@/models/Crossword';
import { User } from '@/models/User';
import { CrosswordProviderImperative } from '@jaredreisinger/react-crossword';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import Footer from '@/components/Footer';
import 'animate.css';

export default function CrosswordPage({
	crossword,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data: session } = useSession();
	const [correct, setCorrect] = useState(false);
	const [modalShow, setModalShow] = useState(false);
	const crosswordRef = useRef<CrosswordProviderImperative>(null);

	return (
		<div className="animate__animated animate__fadeIn">
			<NavBar user={session ? session.user : null} />
			<div className="border-b border-neutral-200 dark:border-neutral-700 transition-colors py-4 px-5">
				<span className="text-5xl pl-5 font-black items-center border-l-8 border-black dark:border-neutral-500">
					{JSON.parse(crossword).title}
				</span>
				<span className="px-3 text-lg font-light">
					C. Wu '24 and D. Zhang '25
				</span>
			</div>
			<GameNav correct={correct} crosswordRef={crosswordRef} />
			{correct && (
				<>
					<CongratsModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</>
			)}
			<CrosswordComponent
				data={crossword}
				correct={correct}
				setCorrect={setCorrect}
				setModalShow={setModalShow}
				cRef={crosswordRef}
			/>
			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
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
