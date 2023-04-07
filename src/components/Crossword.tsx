import {
	CrosswordGrid,
	CrosswordProvider,
	CrosswordProviderImperative,
	DirectionClues,
	useIpuz,
} from '@jaredreisinger/react-crossword';
import { Ref, useCallback, useState } from 'react';

export default function CrosswordComponent({
	data,
	correct,
	setCorrect,
	setModalShow,
	cRef,
}: {
	data: string;
	correct: boolean;
	setCorrect: (isCorrect: boolean) => void;
	setModalShow: (isCorrect: boolean) => void;
	cRef: Ref<CrosswordProviderImperative>;
}) {
	let [guesses] = useState<string[][]>([
		['#', '#', '#', '#', '#'],
		['#', '#', '#', '#', '#'],
		['#', '#', '#', '#', '#'],
		['#', '#', '#', '#', '#'],
		['#', '#', '#', '#', '#'],
	]);

	if (data === null) {
		return <div>Sorry, no crosswords have been released today</div>;
	}

	const ipuz = useIpuz({
		version: 'http://ipuz.org/v2',
		kind: ['http://ipuz.org/crossword#1'],
		dimensions: { width: 5, height: 5 },
		...JSON.parse(data),
	})!;

	const onCellChange = useCallback(
		async (row: number, col: number, char: string) => {
			let newState = guesses;
			newState[row][col] = char;

			guesses = newState;
		},
		[]
	);

	return (
		<div className="flex flex-row justify-center py-12">
			<CrosswordProvider
				data={ipuz}
				onCrosswordCorrect={(isCorrect) => {
					if (isCorrect) {
						setCorrect(isCorrect);

						if (localStorage.getItem('completed') === 'true')
							return;

						const requestOptions = {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({
								guesses,
								time: localStorage.getItem('time'),
							}),
						};

						fetch('/api/checkAnswer', requestOptions);

						localStorage.setItem('completed', 'true');
						localStorage.setItem('timerStop', 'true');

						setModalShow(true);
					}
				}}
				onCellChange={onCellChange}
				ref={cRef}
			>
				<div
					className="w-2/5 px-5 animate__animated animate__fadeIn"
					style={{ animationDuration: '1500ms' }}
				>
					<CrosswordGrid />
				</div>
				<div className="w-1/5 px-2 text-sm">
					<DirectionClues direction="across" />
				</div>
				<div className="w-1/5 px-2 text-sm">
					<DirectionClues direction="down" />
				</div>
			</CrosswordProvider>
		</div>
	);
}
