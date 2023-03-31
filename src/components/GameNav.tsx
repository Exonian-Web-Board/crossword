import Timer from '@/components/Timer';
import { CrosswordProviderImperative } from '@jaredreisinger/react-crossword';
import { Ref } from 'react';

export default function GameNav({
	correct,
	crosswordRef,
}: {
	correct: boolean;
	crosswordRef: Ref<CrosswordProviderImperative>;
}) {
	const clearAll = () => {
		localStorage.removeItem('completed');
		(crosswordRef! as any).current.reset();
	};

	return (
		<div className="border-b border-neutral-200 dark:border-neutral-700 transition-colors flex flex-row items-center justify-between py-2 px-5">
			<div className="flex font-sans">
				Time Elapsed: <Timer start={!correct} />
			</div>
		</div>
	);
}
