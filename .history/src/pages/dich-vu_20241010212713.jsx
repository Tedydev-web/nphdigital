import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceHero from '@/components/hero/ServiceHero';
import Service1 from '@/components/service/Service1';
import ServiceElementV5 from '@/components/service/ServiceElementV5';
import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceV5 = () => {
	return (
		<>
			<Head>
				<title>Dịch vụ | NPH Digital</title>
				<meta
					name="description"
					content="Khám phá dịch vụ của NPH Digital - Giải pháp kỹ thuật số toàn diện, bao gồm phát triển ứng dụng, thiết kế website, marketing số và nhiều hơn nữa."
				/>
				<meta
					name="keywords"
					content="Dịch vụ NPH Digital, Giải pháp kỹ thuật số, Phát triển ứng dụng, Thiết kế website, Marketing số"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="NPH Digital | Dịch vụ"
				/>
				<meta
					property="og:description"
					content="Khám phá dịch vụ của NPH Digital - Giải pháp kỹ thuật số toàn diện, bao gồm phát triển ứng dụng, thiết kế website, marketing số và nhiều hơn nữa."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/dich-vu"
				/>
				<meta
					property="og:image"
					content="/public/cover.png"
				/>
				<meta
					property="og:locale"
					content="vi_VN"
				/>

				{/* Twitter Card Meta Tags */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="NPH Digital | Dịch vụ"
				/>
				<meta
					name="twitter:description"
					content="Khám phá dịch vụ của NPH Digital - Giải pháp kỹ thuật số toàn diện, bao gồm phát triển ứng dụng, thiết kế website, marketing số và nhiều hơn nữa."
				/>
				<meta
					name="twitter:image"
					content="/public/cover.png"
				/>

				{/* Viewport and Mobile Optimization */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://www.nphdigital.com/dich-vu"
				/>

				{/* Favicon */}
				<link
					rel="icon"
					href="/public/favicon.ico"
				/>
				<link
					rel="apple-touch-icon"
					href="/public/apple-touch-icon.png"
					sizes="180x180"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/public/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/public/favicon-16x16.png"
					sizes="16x16"
				/>

				{/* Other Meta Tags */}
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=UTF-8"
				/>
			</Head>

			<main>
				<RootLayout
					header="header3"
					footer="footer3">
					<ServiceHero />
					{/* <Service1 /> */}
					<ServiceElementV5 />
					<DigitalAgencyBrand />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceV5;
