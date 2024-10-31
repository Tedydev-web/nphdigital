import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google tag (gtag.js) */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-4QW02Z13FF"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4QW02Z13FF');
            `,
					}}
				/>
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
