import 'animate.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>The Exonian Crossword</title>
				<meta
					name="description"
					content="The Exonian Crossword is a crossword puzzle created by the Exonian Web Board. It is published every week on the Exonian website. Play and compete with other Exonians to see who can solve it the fastest!"
				/>
			</Head>
			<SessionProvider>
				<ThemeProvider attribute="class">
					<Component {...pageProps} />
				</ThemeProvider>
			</SessionProvider>
		</>
	);
}
