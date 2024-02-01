import { Dispatch, SetStateAction, useState } from 'react';

export interface FormProps {
	setGuesses: Dispatch<SetStateAction<string[]>>;
	attempt: number;
	setAttempt: Dispatch<SetStateAction<number>>;
}

const Form: React.FC<FormProps> = ({
	setGuesses,
	attempt,
	setAttempt,
}: FormProps) => {
	const [guess, setGuess] = useState<string>('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (guess.length !== 5) {
			return;
		}

		setGuesses((guesses) => {
			const newGuesses = [...guesses];
			newGuesses[attempt] += guess;
			return newGuesses;
		});

		setAttempt(attempt + 1);
		setGuess('');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGuess(event.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase());
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="text-center border-2 border-gray-400 p-2 m-2 text-3xl"
				type="text"
				onChange={handleChange}
				maxLength={5}
				value={guess}
				placeholder="Enter your guess"
				required
			/>
		</form>
	);
};

export default Form;
