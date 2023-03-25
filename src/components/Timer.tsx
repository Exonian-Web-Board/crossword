import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useEffect } from 'react';

function Timer({ start }: { start: boolean }) {
	const [time, setTime] = useLocalStorage('time', 0);
	const [completed] = useLocalStorage('completed', false);

	useEffect(() => {
		if (start && !localStorage.getItem('timerStop')) {
			setTimeout(() => setTime(time + 1), 1000);
		} else {
			localStorage.setItem('time', JSON.stringify(time));
		}
	}, [time]);

	return (
		<>
			{new Date(time * 1000).toISOString().substring(14, 19)}{' '}
			<p>{completed && "*you've completed today's puzzle"}</p>
		</>
	);
}

export default Timer;
