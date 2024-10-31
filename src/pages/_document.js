import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google Tag Manager */}
				<Script
					id="gtm-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6RDTFHR');
            `,
					}}
				/>
				{/* End Google Tag Manager */}

				{/* Google Analytics */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
					strategy="afterInteractive"
				/>
				<Script
					id="google-analytics"
					strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
				</Script>

				{/* Fonts and Icons */}
				<link
					href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
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
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-M6RDTFHR"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}></iframe>
				</noscript>
				{/* End Google Tag Manager (noscript) */}

				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
