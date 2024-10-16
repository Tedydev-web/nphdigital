import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
	const router = useRouter();
	useEffect(() => {
		router.push('/trang-chu');
	}, [router]);
	return <div></div>;
};

export default Index;
