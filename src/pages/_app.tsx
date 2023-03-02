import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<SessionProvider>
				<Component {...pageProps} />
			</SessionProvider>
		</SSRProvider>
	);
}
