import Timer from '@/components/Timer';
import { CrosswordProviderImperative } from '@jaredreisinger/react-crossword';
import { Ref } from 'react';

export default function GameNav({
	correct,
}: {
	correct: boolean;
	crosswordRef: Ref<CrosswordProviderImperative>;
}) {
	return (
		<div className="border-b border-neutral-200 dark:border-neutral-700 transition-colors flex flex-row items-center justify-between py-2 px-5">
			<div className="flex font-sans md:text-base text-sm">
				Time Elapsed: <Timer start={!correct} /> | Log in to compete with others!
			</div>
		</div>
	);
}
