import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsUIUX from '@/components/development/DetailsUIUX';
import UIUXWorkflow from '@/components/workflow/UIUXWorkflow';
import UIUXService from '@/components/service/UIUXService';
import UIUXFaq from '@/components/faq/UIUXFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Thiết kế UI/UX | NPH Digital</title>
				<meta
					name="description"
					content="Dịch vụ thiết kế UI/UX của NPH Digital tạo ra các giao diện người dùng đẹp mắt, trải nghiệm người dùng tối ưu, giúp gia tăng sự hài lòng và tương tác của khách hàng."
				/>
				<meta
					name="keywords"
					content="Thiết kế UI/UX, trải nghiệm người dùng, giao diện người dùng, UX, UI, thiết kế tương tác, NPH Digital, thiết kế giao diện"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Thiết kế UI/UX | NPH Digital"
				/>
				<meta
					property="og:description"
					content="Dịch vụ thiết kế UI/UX chuyên nghiệp của NPH Digital giúp xây dựng giao diện thân thiện với người dùng, tối ưu trải nghiệm, từ đó nâng cao tương tác và giá trị thương hiệu."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/thiet-ke-ui-ux"
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
					content="Thiết kế UI/UX | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Thiết kế UI/UX từ NPH Digital tập trung vào việc tạo ra trải nghiệm người dùng tối ưu và giao diện hiện đại, thu hút khách hàng và nâng cao hiệu suất trang web."
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
					href="https://www.nphdigital.com/thiet-ke-ui-ux"
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
					<DetailsUIUX />
					<UIUXWorkflow />
					<UIUXService />
					<UIUXFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
