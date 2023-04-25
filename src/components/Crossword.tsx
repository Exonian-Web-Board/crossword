import {
	CrosswordGrid,
	CrosswordProvider,
	CrosswordProviderImperative,
	DirectionClues,
	useIpuz,
} from '@jaredreisinger/react-crossword';
import { useTheme } from 'next-themes';
import { Ref, useCallback, useState } from 'react';

export default function CrosswordComponent({
	data,
	setCorrect,
	setModalShow,
	cRef,
	useStorage,
}: {
	data: string;
	setCorrect: (isCorrect: boolean) => void;
	setModalShow: (isCorrect: boolean) => void;
	cRef: Ref<CrosswordProviderImperative>;
	useStorage: boolean;
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

	const { theme, systemTheme, setTheme } = useTheme();
	var crosswordTheme = {};

	if (theme === 'light') {
		crosswordTheme = {};
	} else {
		crosswordTheme = {
			cellBackground: 'rgb(31, 33, 38)',

			textColor: '#e5e8ec',
			numberColor: '#e5e8ec',

			focusBackground: '#F52614',
			highlightBackground: '#A81B0D',

			cellBorder: 'rgb(17, 19, 24)',
			gridBackground: 'rgb(17, 19, 24)',
		};
	}

	return (
		<div className="flex flex-row justify-center md:py-12 py-5 flex-wrap transition-colors">
			<CrosswordProvider
				useStorage={useStorage}
				data={ipuz}
				theme={crosswordTheme}
				onCrosswordCorrect={(isCorrect) => {
					if (isCorrect) {
						setCorrect(isCorrect);

						if (localStorage.getItem('completed') === 'true') {
							setModalShow(true);
							return;
						}

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
					className="md:w-2/5 w-11/12 md:py-0 py-3 px-5 animate__animated animate__fadeIn"
					style={{ animationDuration: '1500ms' }}
				>
					<CrosswordGrid />
				</div>
				<div className="md:w-1/5 md:py-0 py-3 w-11/12 px-2 text-sm">
					<DirectionClues direction="across" />
				</div>
				<div className="md:w-1/5 md:py-0 py-3 w-11/12 px-2 text-sm">
					<DirectionClues direction="down" />
				</div>
			</CrosswordProvider>
		</div>
	);
}
