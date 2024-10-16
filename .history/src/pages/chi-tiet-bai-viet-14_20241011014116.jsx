import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import BlogDetails14 from '@/components/blog/BlogDetails14';
import BlogRelated from '@/components/blog/BlogRelated';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const BlogDetails = () => {
	return (
		<>
			<Head>
				<title>Chi Tiết Blog | NPH Digital</title>
				<meta
					name="description"
					content="Mô tả chi tiết blog"
				/>
				<meta
					name="keywords"
					content="Blog, NPH Digital, Chi Tiết Blog, Giải Pháp Số"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Thẻ Meta Open Graph */}
				<meta
					property="og:title"
					content="Chi Tiết Blog | NPH Digital"
				/>
				<meta
					property="og:description"
					content="Mô tả chi tiết blog"
				/>
				<meta
					property="og:type"
					content="article"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/chi-tiet-bai-viet-14"
				/>
				<meta
					property="og:image"
					content="/public/cover.png"
				/>
				<meta
					property="og:locale"
					content="vi_VN"
				/>

				{/* Thẻ Meta Twitter Card */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="Chi Tiết Blog | NPH Digital"
				/>
				<meta
					name="twitter:description"
					content="Mô tả chi tiết blog"
				/>
				<meta
					name="twitter:image"
					content="/public/cover.png"
				/>

				{/* Tối ưu hóa Viewport và Mobile */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* URL Canonical */}
				<link
					rel="canonical"
					href="https://www.nphdigital.com/chi-tiet-bai-viet-14"
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

				{/* Các thẻ Meta khác */}
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
					<BlogDetails14 />
					<BlogRelated />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default BlogDetails14;
