import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useEffect } from 'react';

function Timer({ start, reset }: { start: boolean; reset: boolean }) {
	const [time, setTime] = useLocalStorage('time', 0);
	const [completed, setCompleted] = useLocalStorage('completed', false);

	useEffect(() => {
		if (reset) {
			localStorage.clear();
			setTime(0);
			setCompleted(false);
		}
	}, [reset]);

	useEffect(() => {
		if (start && !localStorage.getItem('timerStop')) {
			setTimeout(() => setTime(time + 1), 1000);
		} else {
			localStorage.setItem('time', JSON.stringify(time));
		}
	}, [time]);

	return (
		<>
			{new Date(Number(time) * 1000).toISOString().substring(14, 19)}
			&nbsp;
			<p>{completed && "*You've completed today's puzzle"}&nbsp;</p>
		</>
	);
}

export default Timer;
