import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

import Detail1 from '../../../public/assets/imgs/blog/detail/14/1.webp';
import Detail2 from '../../../public/assets/imgs/blog/detail/14/2.webp';
import Detail3 from '../../../public/assets/imgs/blog/detail/14/3.webp';
import Detail4 from '../../../public/assets/imgs/blog/detail/14/4.webp';
import Detail5 from '../../../public/assets/imgs/blog/detail/14/5.webp';
import Detail6 from '../../../public/assets/imgs/blog/detail/14/6.webp';
import Detail7 from '../../../public/assets/imgs/blog/detail/14/7.webp';
import Detail8 from '../../../public/assets/imgs/blog/detail/14/8.webp';
import Detail9 from '../../../public/assets/imgs/blog/detail/14/9.webp';
import Detail10 from '../../../public/assets/imgs/blog/detail/14/10.webp';
import Detail11 from '../../../public/assets/imgs/blog/detail/14/11.webp';
import Detail12 from '../../../public/assets/imgs/blog/detail/14/12.webp';
import Detail13 from '../../../public/assets/imgs/blog/detail/14/13.webp';
import Detail14 from '../../../public/assets/imgs/blog/detail/14/14.webp';
import animationWordCome from '@/lib/utils/animationWordCome';
import Switcher from '../../components/common/Switcher';
import { useEffect, useRef, useState } from 'react';
import avt from '../../../public/assets/imgs/blog/avt.png';

const BlogDetails2024 = () => {
	const { t } = useTranslation('blog14');
	const wordAnim = useRef();
	const wordAnim2 = useRef();
	const [mode, setMode] = useState('light');
	const cursor1 = useRef();
	const cursor2 = useRef();

	useEffect(() => {
		animationWordCome(wordAnim.current);
		animationWordCome(wordAnim2.current);
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (mode === 'dark') {
				document.querySelector('body').classList.add('dark');
			} else {
				document.querySelector('body').classList.remove('dark');
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
			<section className="blog__detail">
				<div className="container g-0 line pt-140">
					<span className="line-3"></span>
					<div className="row">
						<div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
							<div className="blog__detail-top">
								<h2
									className="blog__detail-date animation__word_come"
									ref={wordAnim}>
									<span>{t('blogDetails14.content.h2.1')}</span>
									<span>06 Jan 2024</span>
								</h2>
								<h3
									className="blog__detail-title animation__word_come"
									ref={wordAnim2}>
									{t('blogDetails14.content.h3.1')}
								</h3>
								<div className="blog__detail-metalist">
									<div className="blog__detail-meta">
										<Image
											src={avt}
											alt="Author"
											className="blog__detail-author-img"
											width={50}
											height={50}
											style={{ borderRadius: '50%' }}
										/>
										<p>
											{t('blogDetails14.authorInfo')} <span>{t('blogDetails14.authorName')}</span>
										</p>
									</div>
									<div className="blog__detail-meta">
										<p>
											{t('blogDetails14.realTime')}
											<span>27/07/2024</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-12">
							<div className="blog__detail-thumb">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={Detail1}
									alt="Thiết kế App 2024"
									data-speed="0.5"
								/>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
							<div className="blog__detail-content">
								<p>{t('blogDetails14.content.p.1')}</p>
								<h2>{t('blogDetails14.content.h2.2')}</h2>
								<p>{t('blogDetails14.content.p.2')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail2}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails14.content.p.3')}</p>
								<h2>{t('blogDetails14.content.h2.3')}</h2>
								<h3>{t('blogDetails14.content.h3.2')}</h3>
								<p>{t('blogDetails14.content.p.4')}</p>
								<h3>{t('blogDetails14.content.h3.3')}</h3>
								<p>{t('blogDetails14.content.p.5')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail3}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails14.content.h3.4')}</h3>
								<p>{t('blogDetails14.content.p.6')}</p>
								<h3>{t('blogDetails14.content.h3.5')}</h3>
								<p>{t('blogDetails14.content.p.7')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail4}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3>{t('blogDetails14.content.h3.6')}</h3>
								<p>{t('blogDetails14.content.p.8')}</p>
								<h3>{t('blogDetails14.content.h3.7')}</h3>
								<p>{t('blogDetails14.content.p.9')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail5}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails14.content.h3.8')}</h3>
								<p>{t('blogDetails14.content.p.10')}</p>
								<h3>{t('blogDetails14.content.h3.9')}</h3>
								<p>{t('blogDetails14.content.p.11')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail6}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h2>{t('blogDetails14.content.h2.4')}</h2>
								<h3>{t('blogDetails14.content.h3.10')}</h3>
								<p>{t('blogDetails14.content.p.12')}</p>
								<h3>{t('blogDetails14.content.h3.11')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.13')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.1.li.1')}</strong>{t('blogDetails14.content.ul.1.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.1.li.3')}</strong>{t('blogDetails14.content.ul.1.li.4')}
									</li>
								</ul>
								<p>
									<strong>{t('blogDetails14.content.p.14')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.2.li.1')}</strong>{t('blogDetails14.content.ul.2.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.2.li.3')}</strong>{t('blogDetails14.content.ul.2.li.4')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail7}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails14.content.h3.12')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.15')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.3.li.1')}</strong>{t('blogDetails14.content.ul.3.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.3.li.3')}</strong>{t('blogDetails14.content.ul.3.li.4')}
									</li>
								</ul>
								<p>
									<strong>{t('blogDetails14.content.p.16')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.4.li.1')}</strong>{t('blogDetails14.content.ul.4.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.4.li.3')}</strong>{t('blogDetails14.content.ul.4.li.4')}
									</li>
								</ul>

								<h3>{t('blogDetails14.content.h3.13')}</h3>
								<p>{t('blogDetails14.content.p.17')}</p>

								<h3>{t('blogDetails14.content.h3.14')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.18')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.5.li.1')}</strong>{t('blogDetails14.content.ul.5.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.5.li.3')}</strong>{t('blogDetails14.content.ul.5.li.4')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail8}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>{t('blogDetails14.content.p.19')}</strong>
								</p>
								<p>
									<strong>{t('blogDetails14.content.p.20')}</strong>{t('blogDetails14.content.p.21')}
								</p>
								<h3>{t('blogDetails14.content.h3.15')}</h3>
								<p>{t('blogDetails14.content.p.22')}</p>
								<h3>{t('blogDetails14.content.h3.16')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.23')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.6.li.1')}</strong>{t('blogDetails14.content.ul.6.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.6.li.3')}</strong>{t('blogDetails14.content.ul.6.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.24')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.7.li.1')}</strong>{t('blogDetails14.content.ul.7.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.7.li.3')}</strong>{t('blogDetails14.content.ul.7.li.4')}
									</li>
								</ul>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail9}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails14.content.h3.17')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.25')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.8.li.1')}</strong>{t('blogDetails14.content.ul.8.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.8.li.3')}</strong>{t('blogDetails14.content.ul.8.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.26')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.9.li.1')}</strong>{t('blogDetails14.content.ul.9.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.9.li.3')}</strong>{t('blogDetails14.content.ul.9.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.27')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.10.li.1')}</strong>{t('blogDetails14.content.ul.10.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.10.li.3')}</strong>{t('blogDetails14.content.ul.10.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.28')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.11.li.1')}</strong>{t('blogDetails14.content.ul.11.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.11.li.3')}</strong>{t('blogDetails14.content.ul.11.li.4')}
									</li>
								</ul>
								<h3>{t('blogDetails14.content.h3.18')}</h3>
								<p>{t('blogDetails14.content.p.29')}</p>
								<h4>{t('blogDetails14.content.h4.1')}</h4>
								<p>
									<strong>{t('blogDetails14.content.p.30')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.12.li.1')}</strong>{t('blogDetails14.content.ul.12.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.12.li.3')}</strong>{t('blogDetails14.content.ul.12.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.31')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.13.li.1')}</strong>{t('blogDetails14.content.ul.13.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.13.li.3')}</strong>{t('blogDetails14.content.ul.13.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.32')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.14.li.1')}</strong>{t('blogDetails14.content.ul.14.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.14.li.3')}</strong>{t('blogDetails14.content.ul.14.li.4')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail10}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3>{t('blogDetails14.content.h3.19')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.33')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.15.li.1')}</strong>{t('blogDetails14.content.ul.15.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.15.li.3')}</strong>{t('blogDetails14.content.ul.15.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.34')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.16.li.1')}</strong>{t('blogDetails14.content.ul.16.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.16.li.3')}</strong>{t('blogDetails14.content.ul.16.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.35')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.17.li.1')}</strong>{t('blogDetails14.content.ul.17.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.17.li.3')}</strong>{t('blogDetails14.content.ul.17.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.36')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.18.li.1')}</strong>{t('blogDetails14.content.ul.18.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.18.li.3')}</strong>{t('blogDetails14.content.ul.18.li.4')}
									</li>
								</ul>
								<h3>{t('blogDetails14.content.h3.20')}</h3>
								<p>{t('blogDetails14.content.p.37')}</p>

								<h4>{t('blogDetails14.content.h4.2')}</h4>
								<p>
									<strong>{t('blogDetails14.content.p.38')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.19.li.1')}</strong>{t('blogDetails14.content.ul.19.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.19.li.3')}</strong>{t('blogDetails14.content.ul.19.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.39')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.20.li.1')}</strong>{t('blogDetails14.content.ul.20.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.20.li.3')}</strong>{t('blogDetails14.content.ul.20.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.40')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.21.li.1')}</strong>{t('blogDetails14.content.ul.21.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.21.li.3')}</strong>{t('blogDetails14.content.ul.21.li.4')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail11}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h4>{t('blogDetails14.content.h4.3')}</h4>
								<p>
									<strong>{t('blogDetails14.content.p.41')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.22.li.1')}</strong>{t('blogDetails14.content.ul.22.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.22.li.3')}</strong>{t('blogDetails14.content.ul.22.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.42')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.23.li.1')}</strong>{t('blogDetails14.content.ul.23.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.23.li.3')}</strong>{t('blogDetails14.content.ul.23.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.43')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.24.li.1')}</strong>{t('blogDetails14.content.ul.24.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.24.li.3')}</strong>{t('blogDetails14.content.ul.24.li.4')}
									</li>
								</ul>
								<p>
									<strong>{t('blogDetails14.content.p.44')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.25.li.1')}</strong>{t('blogDetails14.content.ul.25.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.25.li.3')}</strong>{t('blogDetails14.content.ul.25.li.4')}
									</li>
								</ul>
								<h3>{t('blogDetails14.content.h3.21')}</h3>
								<p>{t('blogDetails14.content.p.45')}</p>
								<h4>{t('blogDetails14.content.h4.4')}</h4>
								<p>
									<strong>{t('blogDetails14.content.p.46')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.26.li.1')}</strong>{t('blogDetails14.content.ul.26.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.26.li.3')}</strong>{t('blogDetails14.content.ul.26.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.47')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.27.li.1')}</strong>{t('blogDetails14.content.ul.27.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.27.li.3')}</strong>{t('blogDetails14.content.ul.27.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.48')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.28.li.1')}</strong>{t('blogDetails14.content.ul.28.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.28.li.3')}</strong>{t('blogDetails14.content.ul.28.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.49')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.29.li.1')}</strong>{t('blogDetails14.content.ul.29.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.29.li.3')}</strong>{t('blogDetails14.content.ul.29.li.4')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail12}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails14.content.h3.22')}</h3>
								<p>{t('blogDetails14.content.p.50')}</p>
								<h4>{t('blogDetails14.content.h4.5')}</h4>
								<p>
									<strong>{t('blogDetails14.content.p.51')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.30.li.1')}</strong>{t('blogDetails14.content.ul.30.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.30.li.3')}</strong>{t('blogDetails14.content.ul.30.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.52')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.31.li.1')}</strong>{t('blogDetails14.content.ul.31.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.31.li.3')}</strong>{t('blogDetails14.content.ul.31.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.53')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.32.li.1')}</strong>{t('blogDetails14.content.ul.32.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.32.li.3')}</strong>{t('blogDetails14.content.ul.32.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.54')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.33.li.1')}</strong>{t('blogDetails14.content.ul.33.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.33.li.3')}</strong>{t('blogDetails14.content.ul.33.li.4')}
									</li>
								</ul>

								<h3>{t('blogDetails14.content.h3.23')}</h3>
								<h4>{t('blogDetails14.content.h4.6')}</h4>

								<p>
									<strong>{t('blogDetails14.content.p.55')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.34.li.1')}</strong>{t('blogDetails14.content.ul.34.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.34.li.3')}</strong>{t('blogDetails14.content.ul.34.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.56')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.35.li.1')}</strong>{t('blogDetails14.content.ul.35.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.35.li.3')}</strong>{t('blogDetails14.content.ul.35.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.57')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.36.li.1')}</strong>{t('blogDetails14.content.ul.36.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.36.li.3')}</strong>{t('blogDetails14.content.ul.36.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.58')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.37.li.1')}</strong>{t('blogDetails14.content.ul.37.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.37.li.3')}</strong>{t('blogDetails14.content.ul.37.li.4')}
									</li>
								</ul>

								<h3>{t('blogDetails14.content.h3.24')}</h3>

								<p>{t('blogDetails14.content.p.59')}</p>
								<h4>{t('blogDetails14.content.h4.7')}</h4>
								<p>
									<strong>{t('blogDetails14.content.p.60')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.38.li.1')}</strong>{t('blogDetails14.content.ul.38.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.38.li.3')}</strong>{t('blogDetails14.content.ul.38.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.61')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.39.li.1')}</strong>{t('blogDetails14.content.ul.39.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.39.li.3')}</strong>{t('blogDetails14.content.ul.39.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.62')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.40.li.1')}</strong>{t('blogDetails14.content.ul.40.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.40.li.3')}</strong>{t('blogDetails14.content.ul.40.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.63')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.41.li.1')}</strong>{t('blogDetails14.content.ul.41.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.41.li.3')}</strong>{t('blogDetails14.content.ul.41.li.4')}
									</li>
								</ul>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail13}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails14.content.h3.25')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.64')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.42.li.1')}</strong>{t('blogDetails14.content.ul.42.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.42.li.3')}</strong>{t('blogDetails14.content.ul.42.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.65')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.43.li.1')}</strong>{t('blogDetails14.content.ul.43.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.43.li.3')}</strong>{t('blogDetails14.content.ul.43.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.66')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.44.li.1')}</strong>{t('blogDetails14.content.ul.44.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.44.li.3')}</strong>{t('blogDetails14.content.ul.44.li.4')}
									</li>
								</ul>
								<p>
									<strong>{t('blogDetails14.content.p.67')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.45.li.1')}</strong>{t('blogDetails14.content.ul.45.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.45.li.3')}</strong>{t('blogDetails14.content.ul.45.li.4')}
									</li>
								</ul>

								<h3>{t('blogDetails14.content.h3.26')}</h3>
								<p>{t('blogDetails14.content.p.68')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail14}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3>{t('blogDetails14.content.h3.27')}</h3>
								<p>
									<strong>{t('blogDetails14.content.p.69')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.46.li.1')}</strong>{t('blogDetails14.content.ul.46.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.46.li.3')}</strong>{t('blogDetails14.content.ul.46.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.70')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.47.li.1')}</strong>{t('blogDetails14.content.ul.47.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.47.li.3')}</strong>{t('blogDetails14.content.ul.47.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.71')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.48.li.1')}</strong>{t('blogDetails14.content.ul.48.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.48.li.3')}</strong>{t('blogDetails14.content.ul.48.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails14.content.p.72')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails14.content.ul.49.li.1')}</strong>{t('blogDetails14.content.ul.49.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails14.content.ul.49.li.3')}</strong>{t('blogDetails14.content.ul.49.li.4')}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetails2024;
