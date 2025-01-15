import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import DetailsAI from '@/components/development/DetailsAI';
import AIWorkflow from '@/components/workflow/AIWorkflow';
import AIService from '@/components/service/AIService';
import AIFaq from '@/components/faq/AIFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceDetails = () => {
	return (
		<>
			<Head>
				<title>Lập trình AI | NPH Digital</title>
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
					content="Dịch vụ lập trình AI của NPH Digital giúp doanh nghiệp ứng dụng trí tuệ nhân tạo vào các sản phẩm và quy trình của mình, tăng cường hiệu quả và tối ưu hóa hoạt động."
				/>
				<meta
					name="keywords"
					content="Lập trình AI, trí tuệ nhân tạo, machine learning, deep learning, NPH Digital, phát triển phần mềm, ứng dụng AI"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Lập trình AI | NPH Digital"
				/>
				<meta
					property="og:description"
					content="NPH Digital cung cấp dịch vụ lập trình AI, giúp doanh nghiệp xây dựng các giải pháp thông minh, tối ưu hóa quy trình và nâng cao trải nghiệm người dùng."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://nphdigital.vn/lap-trinh-ai"
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
					content="Lập trình AI | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Dịch vụ lập trình AI từ NPH Digital giúp doanh nghiệp tối ưu hóa quy trình và nâng cao hiệu quả hoạt động với các giải pháp thông minh."
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
					href="https://nphdigital.vn/lap-trinh-ai"
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
					<DetailsAI />
					<AIWorkflow />
					<AIService />
					<AIFaq />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceDetails;
