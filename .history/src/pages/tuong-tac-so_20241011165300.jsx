import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsTuongTacSo from '@/components/development/DetailsTuongTacSo';
import TuongTacSoWorkflow from '@/components/workflow/TuongTacSoWorkflow';
import TuongTacSoService from '@/components/service/TuongTacSoService';
import TuongTacSoFaq from '@/components/faq/TuongTacSoFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Tương tác số | NPH Digital</title>
				<meta
					name="description"
					content="Dịch vụ tương tác số của NPH Digital giúp các doanh nghiệp tương tác và kết nối với khách hàng một cách hiệu quả thông qua các giải pháp kỹ thuật số tiên tiến."
				/>
				<meta
					name="keywords"
					content="Tương tác số, giải pháp kỹ thuật số, tương tác khách hàng, kết nối khách hàng, marketing số, CRM, ERP, NPH Digital, chuyển đổi số, công nghệ số"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Tương tác số | NPH Digital"
				/>
				<meta
					property="og:description"
					content="Giải pháp tương tác số toàn diện của NPH Digital giúp doanh nghiệp tăng cường kết nối và tương tác khách hàng, tạo trải nghiệm cá nhân hóa hiệu quả."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/tuong-tac-so"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
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
					content="Tương tác số | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Dịch vụ tương tác số của NPH Digital cung cấp các công cụ kỹ thuật số hiện đại để doanh nghiệp tương tác và kết nối với khách hàng một cách tối ưu."
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>

				{/* Viewport and Mobile Optimization */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://www.nphdigital.com/tuong-tac-so"
				/>

				{/* Favicon */}
				<link
					rel="icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon.png"
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
					<DetailsTuongTacSo />
					<TuongTacSoWorkflow />
					<TuongTacSoService />
					<TuongTacSoFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
