import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import BlogDetails13 from '@/components/blog/BlogDetails13';
import BlogRelated from '@/components/blog/BlogRelated';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import Switcher from '../components/common/Switcher';

const BlogDetails = () => {
	const [mode, setMode] = useState('light');
	const cursor1 = useRef();
	const cursor2 = useRef();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (mode === 'dark') {
				document.querySelector('body').classList.add('light');
			} else {
				document.querySelector('body').classList.remove('light');
			}
		}
	}, [mode]);

	return (
		<>
			<Switcher
				setMode={setMode}
				mode={mode}
				cursor1={cursor1}
				cursor2={cursor2}
			/>
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
					content="https://www.nphdigital.com/chi-tiet-bai-viet-13"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
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
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>

				{/* Tối ưu hóa Viewport và Mobile */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* URL Canonical */}
				<link
					rel="canonical"
					href="https://www.nphdigital.com/chi-tiet-bai-viet-13"
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
					footer="footer3"
					defaultMode="light">
					<BlogDetails13 />
					<BlogRelated />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default BlogDetails13;
