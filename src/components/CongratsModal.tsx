import { useLocalStorage } from '@/hooks/useLocalStorage';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CongratsModal(props: { onHide: () => void; show: boolean }) {
	const [time] = useLocalStorage('time', 0);

	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Congratulations!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>
					You've finished today's crossword in:{' '}
					{new Date(time * 1000).toISOString().substring(14, 19)}
				</h4>
				<p>Wonderful job! You can check out the leaderboard to see how you stack up!</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
				<Button onClick={props.onHide} href="/leaderboard">Check Leaderboard</Button>
			</Modal.Footer>
		</Modal>
	);
}

function App() {}
