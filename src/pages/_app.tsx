import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../globals.css';
import 'animate.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
}
