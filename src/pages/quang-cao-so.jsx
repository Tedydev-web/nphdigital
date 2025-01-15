import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsMarketing from '@/components/development/DetailsMarketing';
import MarketingWorkflow from '@/components/workflow/MarketingWorkflow';
import MarketingService from '@/components/service/MarketingService';
import MarketingFaq from '@/components/faq/MarketingFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Quảng cáo số | NPH Digital</title>
				{/* Thêm meta robots và sitemap */}
				<meta
					name="robots"
					content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
				/>
				<link
					rel="sitemap"
					type="application/xml"
					href="/sitemap.xml"
				/>

				<meta
					name="description"
					content="Dịch vụ quảng cáo số của NPH Digital giúp doanh nghiệp tiếp cận khách hàng tiềm năng thông qua các nền tảng chuyển đổi số hiệu quả như Google, Facebook, và nhiều kênh khác."
				/>
				<meta
					name="keywords"
					content="Quảng cáo số, quảng cáo trực tuyến, digital marketing, quảng cáo Google, quảng cáo Facebook, NPH Digital, tiếp thị chuyển đổi số"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Quảng cáo số | NPH Digital"
				/>
				<meta
					property="og:description"
					content="Dịch vụ quảng cáo số của NPH Digital tối ưu chiến dịch quảng cáo trực tuyến, giúp doanh nghiệp tiếp cận đúng đối tượng và nâng cao hiệu quả tiếp thị."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://nphdigital.vn/quang-cao-so"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>
				<meta
					property="og:locale"
					content="vi_VN"
				/>

				{/* Twitter Card Meta Tags */}
				<meta
					name="twitter:card"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>
				<meta
					name="twitter:title"
					content="Quảng cáo số | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="NPH Digital cung cấp dịch vụ quảng cáo số với các chiến dịch quảng cáo hiệu quả, tiếp cận khách hàng tiềm năng qua Google, Facebook và nhiều nền tảng khác."
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>

				{/* Viewport and Mobile Optimization */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://nphdigital.vn/quang-cao-so"
				/>

				{/* Favicon */}
				<link
					rel="icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon.png"
				/>
				<link
					rel="apple-touch-icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/apple-touch-icon.png"
					sizes="180x180"
				/>
				<link
					rel="icon"
					type="image/png"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-16x16.png"
					sizes="16x16"
				/>

				{/* Other Meta Tags */}
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=UTF-8"
				/>

				{/* Schema Markup */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'http://schema.org',
							'@type': 'Organization',
							name: 'NPH Digital',
							url: 'https://nphdigital.vn',
							logo: 'https://res.cloudinary.com/tedydev/image/upload/nphdigital/logo.png',
							sameAs: ['https://www.facebook.com/nphdigital838', 'https://twitter.com/NPHDigital'],
						}),
					}}
				/>
			</Head>

			<main>
				<RootLayout
					header="header3"
					footer="footer3"
					defaultMode="dark">
					<DetailsMarketing />
					<MarketingWorkflow />
					<MarketingService />
					<MarketingFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
