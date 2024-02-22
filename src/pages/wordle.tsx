import NavBar from '@/components/NavBar';
import CongratsModal from '@/components/wordle/CongratsModal';
import Footer from '@/components/crossword/Footer';
import Form from '@/components/wordle/Form';
import Guesses from '@/components/wordle/Guesses';
import Keyboard from '@/components/wordle/Keyboard';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Home() {
	const [guesses, setGuesses] = useLocalStorage<string[]>('wordleGuesses', [
		'',
		'',
		'',
		'',
		'',
		'',
	]);
	const [show, setShow] = useState(false);
	const { data: session } = useSession();
	const [attempt, setAttempt] = useLocalStorage('wordleAttempt', 0);
	const answer = 'SMURF';

	useEffect(() => {
		if (
			Date.now() - Number(localStorage.getItem('completeTime')) >
			60 * 60 * 1000
		) {
			setGuesses(['', '', '', '', '', '']);
			setAttempt(0);
			localStorage.removeItem('completeTime');
		}
	}, []);

	const isWinner = attempt > 0 && guesses[attempt - 1] === answer;

	if (isWinner && !localStorage.getItem('completeTime')) {
		localStorage.setItem('completeTime', Date.now().toString());
		setShow(true);
	}

	const isLoser = attempt >= 6 && guesses[attempt - 1] !== answer;
	if (isLoser) {
		alert('Oops! You lose! Teehee!');
	}

	return (
		<div className="animate__animated animate__fadeIn">
			<NavBar user={session ? session.user : null} />

			<CongratsModal
				show={show}
				onHide={() => {
					setShow(false);
				}}
				answer={answer}
				guesses={guesses}
			/>

			<div className="grid place-items-center">
				<Form
					setGuesses={setGuesses}
					attempt={attempt}
					setAttempt={setAttempt}
				/>
				<Guesses guesses={guesses} answer={answer} />
			</div>
			<Keyboard />

			<Footer />
		</div>
	);
}
