import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Keyboard from '@/components/wordle/Keyboard';
import Wordle from '@/components/wordle/Wordle';
import dbConnect from '@/lib/mongoose';
import 'animate.css';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function WordlePage({}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) {
	const { data: session } = useSession();
	const [reset, setReset] = useState(false);
	const answer = 'hello';
	const [attempts, setAttempts] = useState(0);
	const [guesses, setGuesses] = useState<string[]>(['', '', '', '', '']);

	function addLetterToGuess(key: string) {
		if (guesses[attempts].length == 5) return;

		setGuesses((prev) => {
			const newGuesses = [...prev];
			newGuesses[attempts] += key;
			return newGuesses;
		});
	}

	function submitGuess() {
		if (guesses[attempts].length == 5) {
			setAttempts((prev) => prev + 1);
		}
	}

	function backspace() {
		setGuesses((prev) => {
			const newGuesses = [...prev];
			newGuesses[attempts] = newGuesses[attempts].slice(
				0,
				newGuesses[attempts].length - 1
			);
			return newGuesses;
		});
	}

	function handler(e: KeyboardEvent) {
		const letters = 'abcdefghijklmnopqrstuvwxyz';

		if (letters.includes(e.key)) {
			addLetterToGuess(e.key);
		} else if (e.key === 'Enter') {
			submitGuess();
		} else if (e.key === 'Backspace') {
			backspace();
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handler, false);
		return () => window.removeEventListener('keydown', handler, false);
	}, [handler]);

	useEffect(() => {
		console.log(attempts, guesses);
	}, [guesses]);

	return (
		<div className="animate__animated animate__fadeIn">
			<NavBar user={session ? session.user : null} />
			<Wordle attempts={attempts} guesses={guesses} answer={answer} />

			<div className="flex flex-col justify-center items-center ">
				<Keyboard />
			</div>

			<Footer />
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	await dbConnect();

	return {
		props: {},
	};
};
