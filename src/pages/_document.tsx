import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<script
				src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
				crossOrigin="anonymous"
			></script>

			<script
				src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
				crossOrigin="anonymous"
			></script>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
