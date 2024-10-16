import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsWebsite from '@/components/development/DetailsWebsite';
import WebsiteWorkflow from '@/components/workflow/WebsiteWorkflow';
import WebsiteService from '@/components/service/WebsiteService';
import WebsiteFaq from '@/components/faq/WebsiteFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Thiết kế website | NPH Digital</title>
				<meta
					name="description"
					content="Dịch vụ thiết kế website của NPH Digital mang đến các giải pháp website hiện đại, thân thiện với người dùng, tối ưu cho SEO và thiết kế chuẩn UX/UI."
				/>
				<meta
					name="keywords"
					content="Thiết kế website, phát triển website, UX/UI, tối ưu SEO, website chuyên nghiệp, thiết kế web, NPH Digital"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Thiết kế website | NPH Digital"
				/>
				<meta
					property="og:description"
					content="Thiết kế website chuyên nghiệp với giao diện hiện đại, chuẩn UX/UI và tối ưu SEO cho doanh nghiệp của bạn, giúp tăng cường sự hiện diện trực tuyến."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/thiet-ke-website"
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
					content="Thiết kế website | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="NPH Digital cung cấp dịch vụ thiết kế website chuẩn UX/UI, tối ưu cho trải nghiệm người dùng và tăng cường sự hiện diện thương hiệu trực tuyến."
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
					href="https://www.nphdigital.com/thiet-ke-website"
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
					footer="footer3"
					defaultMode="dark">
					<DetailsWebsite />
					<WebsiteWorkflow />
					<WebsiteService />
					<WebsiteFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
