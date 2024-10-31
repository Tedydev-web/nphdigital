import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google tag (gtag.js) */}
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-4QW02Z13FF"></Script>
				<Script
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
