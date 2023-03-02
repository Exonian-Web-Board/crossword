import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Timer from '@/components/Timer';
import { CrosswordProviderImperative } from '@jaredreisinger/react-crossword';
import { Ref, useRef } from 'react';

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
		<Navbar collapseOnSelect expand="lg">
			<Container>
				<Navbar.Brand>
					Time Elapsed: <Timer start={!correct} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="gamenav" />
				<Navbar.Collapse id="gamenav" className="justify-content-end">
					<Nav>
						<Nav.Link onClick={clearAll}>Clear</Nav.Link>
						<NavDropdown title={'Reveal'}>
							<NavDropdown.Item>Square</NavDropdown.Item>
							<NavDropdown.Item>Word</NavDropdown.Item>
							<NavDropdown.Item>Puzzle</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title={'Check'}>
							<NavDropdown.Item>Square</NavDropdown.Item>
							<NavDropdown.Item>Word</NavDropdown.Item>
							<NavDropdown.Item>Puzzle</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
