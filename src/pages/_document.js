import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"></link>
				<link
					rel="icon"
					type="image/x-icon"
					href="assets/imgs/logo/favicon.png"
				/>
				<link
					rel="preload"
					href="/assets/imgs/hero/1/1-bg.png"
					as="image"
					type="image/png"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
