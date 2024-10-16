import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsFanpage from '@/components/development/DetailsFanpage';
import FanpageWorkflow from '@/components/workflow/FanpageWorkflow';
import FanpageService from '@/components/service/FanpageService';
import FanpageFaq from '@/components/faq/FanpageFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Chăm sóc fanpage | NPH Digital</title>
				<meta
					name="description"
					content="Dịch vụ chăm sóc fanpage của NPH Digital giúp doanh nghiệp quản lý, phát triển nội dung và tương tác với khách hàng trên mạng xã hội một cách hiệu quả."
				/>
				<meta
					name="keywords"
					content="Chăm sóc fanpage, quản lý fanpage, marketing trên mạng xã hội, nội dung số, NPH Digital, tăng cường tương tác"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Chăm sóc fanpage | NPH Digital"
				/>
				<meta
					property="og:description"
					content="NPH Digital cung cấp dịch vụ chăm sóc fanpage, giúp doanh nghiệp tối ưu hóa sự hiện diện trực tuyến và tăng cường tương tác với khách hàng."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/cham-soc-fanpage"
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
					content="Chăm sóc fanpage | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Dịch vụ chăm sóc fanpage từ NPH Digital giúp doanh nghiệp quản lý nội dung và tương tác hiệu quả với khách hàng trên mạng xã hội."
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
					href="https://www.nphdigital.com/cham-soc-fanpage"
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
					<DetailsFanpage />
					<FanpageWorkflow />
					<FanpageService />
					<FanpageFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
