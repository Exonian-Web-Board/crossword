import NavBar from '@/components/NavBar';
import { useSession } from 'next-auth/react';
import { Stack } from 'react-bootstrap';

export default function Profile() {
	const { data: session } = useSession();

	return (
		<Stack>
			<NavBar user={session ? session.user : null} />
		</Stack>
	);
}
