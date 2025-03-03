import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsSystem from '@/components/development/DetailsSystem';
import SystemWorkflow from '@/components/workflow/SystemWorkflow';
import SystemService from '@/components/service/SystemService';
import SystemFaq from '@/components/faq/SystemFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>CRM, ERP, HRM | NPH Digital</title>
				<meta
					name="description"
					content="NPH Digital cung cấp các giải pháp CRM, ERP, và HRM giúp doanh nghiệp quản lý khách hàng, tối ưu hóa quy trình kinh doanh và quản lý nguồn nhân lực hiệu quả."
				/>
				<meta
					name="keywords"
					content="CRM, ERP, HRM, quản lý khách hàng, quản lý doanh nghiệp, quản lý nhân sự, NPH Digital, giải pháp phần mềm"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="CRM, ERP, HRM | NPH Digital"
				/>
				<meta
					property="og:description"
					content="Giải pháp CRM, ERP và HRM của NPH Digital giúp doanh nghiệp tối ưu hóa quản lý, nâng cao hiệu quả hoạt động và cải thiện trải nghiệm khách hàng."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/crm-erp-hrm"
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
					content="CRM, ERP, HRM | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="NPH Digital cung cấp giải pháp CRM, ERP và HRM, giúp doanh nghiệp quản lý khách hàng, quy trình và nguồn nhân lực một cách hiệu quả."
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
					href="https://www.nphdigital.com/crm-erp-hrm"
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
					http-equiv="Content-Type"
					content="text/html; charset=UTF-8"
				/>
			</Head>

			<main>
				<RootLayout
					header="header3"
					footer="footer3"
					defaultMode="dark">
					<DetailsSystem />
					<SystemWorkflow />
					<SystemService />
					<SystemFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
