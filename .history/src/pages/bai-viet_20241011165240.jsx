import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import StartupAgencyBlog from '@/components/blog/StartupAgencyBlog';
import DesignStudioCTA from '@/components/cta/DesignStudioCTA';

const Blog = () => {
	return (
		<>
			<Head>
				<title>Bài viết | NPH Digital</title>
				<meta
					name="description"
					content="Đọc những bài viết mới nhất từ NPH Digital về các giải pháp kỹ thuật số, xu hướng công nghệ, và mẹo hữu ích trong ngành."
				/>
				<meta
					name="keywords"
					content="Bài viết NPH Digital, Giải pháp kỹ thuật số, Xu hướng công nghệ, Mẹo hữu ích"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="NPH Digital | Bài viết"
				/>
				<meta
					property="og:description"
					content="Đọc những bài viết mới nhất từ NPH Digital về các giải pháp kỹ thuật số, xu hướng công nghệ, và mẹo hữu ích trong ngành."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.nphdigital.com/bai-viet"
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
					content="NPH Digital | Bài viết"
				/>
				<meta
					name="twitter:description"
					content="Đọc những bài viết mới nhất từ NPH Digital về các giải pháp kỹ thuật số, xu hướng công nghệ, và mẹo hữu ích trong ngành."
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
					href="https://www.nphdigital.com/bai-viet"
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
					<StartupAgencyBlog />
					<DesignStudioCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default Blog;
