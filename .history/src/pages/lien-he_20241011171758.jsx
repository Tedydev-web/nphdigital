import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import Contact1 from '@/components/contact/Contact1';
const Contact = () => {
	return (
		<>
<Head>
	<title>Liên Hệ | NPH Digital</title>
	<meta
		name="description"
		content="Liên hệ với NPH Digital để nhận được các giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng, Thiết kế website, Marketing số, và nhiều hơn nữa."
	/>
	<meta
		name="keywords"
		content="Liên hệ, NPH Digital, Giải pháp kỹ thuật số, Phát triển ứng dụng, Thiết kế website"
	/>
	<meta
		name="author"
		content="NPH Digital"
	/>

	{/* Open Graph Meta Tags */}
	<meta
		property="og:title"
		content="Liên Hệ | NPH Digital"
	/>
	<meta
		property="og:description"
		content="Liên hệ với NPH Digital để nhận được các giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng, Thiết kế website, Marketing số, và nhiều hơn nữa."
	/>
	<meta
		property="og:type"
		content="website"
	/>
	<meta
		property="og:url"
		content="https://www.nphdigital.com/contact"
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/contact-cover.png" // Bạn cần thay đổi đường dẫn hình ảnh nếu cần
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
		content="Liên Hệ | NPH Digital"
	/>
	<meta
		name="twitter:description"
		content="Liên hệ với NPH Digital để nhận được các giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng, Thiết kế website, Marketing số, và nhiều hơn nữa."
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/contact-cover.png" // Bạn cần thay đổi đường dẫn hình ảnh nếu cần
	/>

	{/* Viewport and Mobile Optimization */}
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0"
	/>

	{/* Canonical URL */}
	<link
		rel="canonical"
		href="https://www.nphdigital.com/contact"
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
					footer="footer3">
					<Contact1 />
				</RootLayout>
			</main>
		</>
	);
};

export default Contact;
