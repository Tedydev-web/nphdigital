import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsIT from '@/components/development/DetailsIT';
import ITWorkflow from '@/components/workflow/ITWorkflow';
import ITService from '@/components/service/ITService';
import ITFaq from '@/components/faq/ITFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Cho thuê phòng IT ngoài | NPH Digital</title>
				<meta
					name="description"
					content="Dịch vụ cho thuê phòng IT ngoài của NPH Digital, cung cấp phòng làm việc trang bị đầy đủ thiết bị, máy tính, mạng internet tốc độ cao, hỗ trợ tối đa cho các dự án công nghệ thông tin."
				/>
				<meta
					name="keywords"
					content="Cho thuê phòng IT, thuê phòng làm việc IT, thuê phòng trang bị IT, NPH Digital, dịch vụ IT, phòng IT ngoài, công nghệ thông tin, giải pháp IT"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Cho thuê phòng IT ngoài | NPH Digital"
				/>
				<meta
					property="og:description"
					content="Dịch vụ cho thuê phòng IT ngoài của NPH Digital, cung cấp không gian làm việc hiện đại, được trang bị đầy đủ thiết bị cần thiết để hỗ trợ các dự án công nghệ thông tin."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/thue-phong-it-ngoai"
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
					content="Cho thuê phòng IT ngoài | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Thuê phòng IT với trang thiết bị đầy đủ, không gian hiện đại, phù hợp cho các dự án IT tại NPH Digital."
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
					href="https://www.nphdigital.com/thue-phong-it-ngoai"
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
					<DetailsIT />
					<ITWorkflow />
					<ITService />
					<ITFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
