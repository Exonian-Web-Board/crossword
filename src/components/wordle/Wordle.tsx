import TextRow from './TextRow';

export default function Wordle({
	guesses,
	attempts,
	answer,
}: {
	guesses: string[];
	attempts: number;
	answer: string;
}) {
	if (guesses[attempts - 1] === answer) {
		console.log('YOU WON');

		return <h1>YOU WON</h1>;
	}

	return (
		<div className="flex flex-col justify-center items-center ">
			<TextRow
				word={guesses[0].toUpperCase()}
				answer={attempts > 0 ? answer : '     '}
			/>
			<TextRow
				word={guesses[1].toUpperCase()}
				answer={attempts > 1 ? answer : '     '}
			/>
			<TextRow
				word={guesses[2].toUpperCase()}
				answer={attempts > 2 ? answer : '     '}
			/>
			<TextRow
				word={guesses[3].toUpperCase()}
				answer={attempts > 3 ? answer : '     '}
			/>
			<TextRow
				word={guesses[4].toUpperCase()}
				answer={attempts > 4 ? answer : '     '}
			/>
		</div>
	);
}
