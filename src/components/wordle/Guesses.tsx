export interface GuessesProps {
	guesses: string[];
	answer: string;
}

const getLetterBackgroundColor = (
	guess: string,
	index: number,
	answer: string
): string => {
	if (answer[index] === guess[index]) {
		return 'bg-green-500';
	}

	const countOfLetterOccurringInAnswer = answer
		.split('')
		.filter((letter: string) => letter === guess[index]).length;

	const countOfLetterOccurringInGuessBeforeCurrentIndex = guess
		.slice(0, index)
		.split('')
		.filter((letter: string) => letter === guess[index]).length;

	if (
		answer.includes(guess[index]) &&
		countOfLetterOccurringInAnswer >
			countOfLetterOccurringInGuessBeforeCurrentIndex
	) {
		return 'bg-yellow-500';
	}

	return 'bg-gray-500';
};

const Guesses: React.FC<GuessesProps> = ({ guesses, answer }) => {
	return (
		<ol className="m-4">
			{guesses.map((guess, guessIndex) => (
				<li key={guessIndex} className="grid grid-cols-5">
					{[...Array(5)].map((_, i) => {
						return (
							<span
								key={i}
								className={`${getLetterBackgroundColor(
									guess,
									i,
									answer
								)} h-12 w-12 text-2xl flex border-2 border-gray-300 p-1 m-1 box-border justify-center items-center`}
							>
								{guess[i]}
							</span>
						);
					})}
				</li>
			))}
		</ol>
	);
};

export default Guesses;
