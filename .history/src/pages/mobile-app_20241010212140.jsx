import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsMobileApp from '@/components/development/DetailsMobileApp';
import MobileAppWorkflow from '@/components/workflow/MobileAppWorkflow';
import MobileAppDetailsService from '@/components/service/MobileAppDetailsService';
import MobileAppFaq from '@/components/faq/MobileAppFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Phát triển ứng dụng di động | NPH Digital</title>
				<meta
					name="description"
					content="Dịch vụ phát triển ứng dụng di động của NPH Digital giúp doanh nghiệp tạo ra các ứng dụng chất lượng cao, thân thiện với người dùng trên các nền tảng iOS và Android."
				/>
				<meta
					name="keywords"
					content="Phát triển ứng dụng di động, Mobile App, ứng dụng iOS, ứng dụng Android, NPH Digital, phát triển phần mềm, thiết kế ứng dụng"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Phát triển ứng dụng di động | NPH Digital"
				/>
				<meta
					property="og:description"
					content="NPH Digital cung cấp dịch vụ phát triển ứng dụng di động chuyên nghiệp, tối ưu hóa trải nghiệm người dùng và đáp ứng nhu cầu doanh nghiệp."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/mobile-app"
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
					content="Phát triển ứng dụng di động | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Dịch vụ phát triển ứng dụng di động từ NPH Digital giúp doanh nghiệp tối ưu hóa và hiện đại hóa ứng dụng của mình trên nền tảng di động."
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
					href="https://www.nphdigital.com/mobile-app"
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
					{/* Folder Development */}
					<DetailsMobileApp />
					{/* Folder Workflow */}
					<MobileAppWorkflow />
					{/* Folder Service */}
					<MobileAppDetailsService />
					{/* Folder Faq */}
					<MobileAppFaq />
					{/* CTA */}
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
