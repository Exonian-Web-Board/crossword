import { User } from 'next-auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { signIn, signOut } from 'next-auth/react';

export default function NavBar({ user }: { user: User | null }) {
	return (
		<Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
			<Container fluid>
				<Navbar.Brand href="/">
					<img
						alt=""
						src="/logo.jpg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					The Exonian Crossword
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar" className="justify-content-end">
					<Nav>
						<Nav.Link href="/">Crossword</Nav.Link>
						<Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
						{user ? (
							<NavDropdown title={user ? user.name : 'Login'} align="end">
								<NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
								<NavDropdown.Item
									onClick={() => {
										signOut();
									}}
								>
									Sign Out
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<Nav.Link
								onClick={() => {
									signIn();
								}}
							>
								Login
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
