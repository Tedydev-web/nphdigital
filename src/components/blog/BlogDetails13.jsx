import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

import Detail1 from '../../../public/assets/imgs/blog/detail/13/1.webp';
import Detail2 from '../../../public/assets/imgs/blog/detail/13/2.webp';
import Detail3 from '../../../public/assets/imgs/blog/detail/13/3.webp';
import Detail4 from '../../../public/assets/imgs/blog/detail/13/4.webp';
import Detail5 from '../../../public/assets/imgs/blog/detail/13/5.webp';
import Detail6 from '../../../public/assets/imgs/blog/detail/13/6.webp';
import Detail7 from '../../../public/assets/imgs/blog/detail/13/7.webp';
import Detail8 from '../../../public/assets/imgs/blog/detail/13/8.webp';
import Detail9 from '../../../public/assets/imgs/blog/detail/13/9.webp';
import Detail10 from '../../../public/assets/imgs/blog/detail/13/10.webp';
import Detail12 from '../../../public/assets/imgs/blog/detail/13/12.webp';
import Detail13 from '../../../public/assets/imgs/blog/detail/13/13.webp';
import Detail14 from '../../../public/assets/imgs/blog/detail/13/14.webp';
import animationWordCome from '@/lib/utils/animationWordCome';
import Switcher from '../../components/common/Switcher';
import { useEffect, useRef, useState } from 'react';
import avt from '../../../public/assets/imgs/blog/avt.png';

const BlogDetails2024 = () => {
	const { t } = useTranslation('blog13');
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
									<span>{t('blogDetails13.content.h2.1')}</span>
									<span>06 Jan 2024</span>
								</h2>
								<h3
									className="blog__detail-title animation__word_come"
									ref={wordAnim2}>
									{t('blogDetails13.content.h3.1')}
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
											<span>{t('blogDetails13.authorInfo')}</span>
											<span>{t('blogDetails13.authorName')}</span>
										</p>
									</div>
									<div className="blog__detail-meta">
										<p>
											<span>{t('blogDetails13.realTime')}</span>
											<span>29/07/2024</span>
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
								<p>{t('blogDetails13.content.p.1')}</p>
								<h2>{t('blogDetails13.content.h2.2')}</h2>
								<p>{t('blogDetails13.content.p.2')}</p>
								<p>{t('blogDetails13.content.p.3')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail2}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails13.content.p.4')}</p>
								<h2>{t('blogDetails13.content.h2.3')}</h2>
								<h3>{t('blogDetails13.content.h3.2')}</h3>
								<p>{t('blogDetails13.content.p.5')}</p>
								<h3>{t('blogDetails13.content.h3.3')}</h3>
								<p>{t('blogDetails13.content.p.6')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail3}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails13.content.h3.4')}</h3>
								<p>{t('blogDetails13.content.p.7')}</p>
								<h3>{t('blogDetails13.content.h3.5')}</h3>
								<p>{t('blogDetails13.content.p.8')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail4}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3>{t('blogDetails13.content.h3.6')}</h3>
								<p>{t('blogDetails13.content.p.9')}</p>
								<h3>{t('blogDetails13.content.h3.7')}</h3>
								<p>{t('blogDetails13.content.p.10')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail5}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3> {t('blogDetails13.content.h3.8')} </h3>
								<p>{t('blogDetails13.content.p.11')}</p>
								<h2>{t('blogDetails13.content.h2.4')}</h2>
								<h3>{t('blogDetails13.content.h3.9')}</h3>
								<p>{t('blogDetails13.content.p.12')}</p>
								<h3>{t('blogDetails13.content.h3.10')}</h3>
								<p>{t('blogDetails13.content.p.13')}</p>
								<p>
									<strong>{t('blogDetails13.content.p.14')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.9.li.1')}</strong> {t('blogDetails13.content.ul.9.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.9.li.3')}</strong> {t('blogDetails13.content.ul.9.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.9.li.5')}</strong> {t('blogDetails13.content.ul.9.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.9.li.7')}</strong> {t('blogDetails13.content.ul.9.li.8')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail6}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails13.content.h3.11')}</h3>
								<h4>{t('blogDetails13.content.h4.1')}</h4>
								<p>{t('blogDetails13.content.p.15')}</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.10.li.1')}</strong> {t('blogDetails13.content.ul.10.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.10.li.3')}</strong> {t('blogDetails13.content.ul.10.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.10.li.5')}</strong> {t('blogDetails13.content.ul.10.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.10.li.7')}</strong> {t('blogDetails13.content.ul.10.li.8')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail7}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h4>{t('blogDetails13.content.h4.2')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.11.li.1')}</strong> {t('blogDetails13.content.ul.11.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.11.li.3')}</strong> {t('blogDetails13.content.ul.11.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.11.li.5')}</strong> {t('blogDetails13.content.ul.11.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.11.li.7')}</strong> {t('blogDetails13.content.ul.11.li.8')}
									</li>
								</ul>

								<h4>{t('blogDetails13.content.h4.3')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.12.li.1')}</strong> {t('blogDetails13.content.ul.12.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.12.li.3')}</strong> {t('blogDetails13.content.ul.12.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.12.li.5')}</strong> {t('blogDetails13.content.ul.12.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.12.li.7')}</strong> {t('blogDetails13.content.ul.12.li.8')}
									</li>
								</ul>
								<p>{t('blogDetails13.content.p.16')}</p>
								<h3>{t('blogDetails13.content.h3.12')}</h3>
								<h4>{t('blogDetails13.content.h4.4')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.13.li.1')}</strong> {t('blogDetails13.content.ul.13.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.13.li.3')}</strong> {t('blogDetails13.content.ul.13.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.13.li.5')}</strong> {t('blogDetails13.content.ul.13.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.13.li.7')}</strong> {t('blogDetails13.content.ul.13.li.8')}
									</li>
								</ul>

								<h3>{t('blogDetails13.content.h3.13')}</h3>
								<h4>{t('blogDetails13.content.h4.5')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.14.li.1')}</strong> {t('blogDetails13.content.ul.14.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.14.li.3')}</strong> {t('blogDetails13.content.ul.14.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.14.li.5')}</strong> {t('blogDetails13.content.ul.14.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.14.li.7')}</strong> {t('blogDetails13.content.ul.14.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.14.li.9')}</strong> {t('blogDetails13.content.ul.14.li.10')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail8}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h4>{t('blogDetails13.content.h4.6')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.15.li.1')}</strong> {t('blogDetails13.content.ul.15.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.15.li.3')}</strong> {t('blogDetails13.content.ul.15.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.15.li.5')}</strong> {t('blogDetails13.content.ul.15.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.15.li.7')}</strong> {t('blogDetails13.content.ul.15.li.8')}
									</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.14')}</h3>
								<p>{t('blogDetails13.content.p.17')}</p>
								<h4>{t('blogDetails13.content.h4.7')}</h4>
								<h5>{t('blogDetails13.content.h5.1')}</h5>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.16.li.1')}</strong> {t('blogDetails13.content.ul.16.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.16.li.3')}</strong> {t('blogDetails13.content.ul.16.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.16.li.5')}</strong> {t('blogDetails13.content.ul.16.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.16.li.7')}</strong> {t('blogDetails13.content.ul.16.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.16.li.9')}</strong> {t('blogDetails13.content.ul.16.li.10')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail9}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h4>{t('blogDetails13.content.h4.7')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.17.li.1')}</strong> {t('blogDetails13.content.ul.17.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.17.li.3')}</strong> {t('blogDetails13.content.ul.17.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.17.li.5')}</strong> {t('blogDetails13.content.ul.17.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.17.li.7')}</strong> {t('blogDetails13.content.ul.17.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.17.li.9')}</strong> {t('blogDetails13.content.ul.17.li.10')}
									</li>
								</ul>

								<h4>{t('blogDetails13.content.h4.8')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.18.li.1')}</strong> {t('blogDetails13.content.ul.18.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.18.li.3')}</strong> {t('blogDetails13.content.ul.18.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.18.li.5')}</strong> {t('blogDetails13.content.ul.18.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.18.li.7')}</strong> {t('blogDetails13.content.ul.18.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.18.li.9')}</strong> {t('blogDetails13.content.ul.18.li.10')}
									</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.15')}</h3>
								<p>{t('blogDetails13.content.p.18')}</p>
								<h4>{t('blogDetails13.content.h4.9')}</h4>
								<h5>{t('blogDetails13.content.h5.2')}</h5>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.19.li.1')}</strong> {t('blogDetails13.content.ul.19.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.19.li.3')}</strong> {t('blogDetails13.content.ul.19.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.19.li.5')}</strong> {t('blogDetails13.content.ul.19.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.19.li.7')}</strong> {t('blogDetails13.content.ul.19.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.19.li.9')}</strong> {t('blogDetails13.content.ul.19.li.10')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail10}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails13.content.h3.16')}</h3>
								<h4>{t('blogDetails13.content.h4.10')}</h4>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.20.li.1')}</strong> {t('blogDetails13.content.ul.20.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.20.li.3')}</strong> {t('blogDetails13.content.ul.20.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.20.li.5')}</strong> {t('blogDetails13.content.ul.20.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.20.li.7')}</strong> {t('blogDetails13.content.ul.20.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.20.li.9')}</strong> {t('blogDetails13.content.ul.20.li.10')}
									</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.17')}</h3>
								<p>{t('blogDetails13.content.p.19')}</p>
								<h4>{t('blogDetails13.content.h4.11')}</h4>
								<p>{t('blogDetails13.content.p.20')}</p>
								<h5>{t('blogDetails13.content.h5.3')}</h5>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.21.li.1')}</strong> {t('blogDetails13.content.ul.21.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.21.li.3')}</strong> {t('blogDetails13.content.ul.21.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.21.li.5')}</strong> {t('blogDetails13.content.ul.21.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.21.li.7')}</strong> {t('blogDetails13.content.ul.21.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.21.li.9')}</strong> {t('blogDetails13.content.ul.21.li.10')}
									</li>
								</ul>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail12}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h5>{t('blogDetails13.content.h5.4')}</h5>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.22.li.1')}</strong> {t('blogDetails13.content.ul.22.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.22.li.3')}</strong> {t('blogDetails13.content.ul.22.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.22.li.5')}</strong> {t('blogDetails13.content.ul.22.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.22.li.7')}</strong> {t('blogDetails13.content.ul.22.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.22.li.9')}</strong> {t('blogDetails13.content.ul.22.li.10')}
									</li>
								</ul>

								<h5>{t('blogDetails13.content.h5.5')}</h5>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.23.li.1')}</strong> {t('blogDetails13.content.ul.23.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.23.li.3')}</strong> {t('blogDetails13.content.ul.23.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.23.li.5')}</strong> {t('blogDetails13.content.ul.23.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.23.li.7')}</strong> {t('blogDetails13.content.ul.23.li.8')}
									</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.18')}</h3>
								<p>{t('blogDetails13.content.p.21')}</p>
								<h4>{t('blogDetails13.content.h4.12')}</h4>
								<h5>{t('blogDetails13.content.h5.6')}</h5>
								<p>
									<strong>{t('blogDetails13.content.p.22')} </strong> {t('blogDetails13.content.p.23')}
								</p>
								<p>
									<strong>{t('blogDetails13.content.p.24')} </strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.24.li.1')}</strong> {t('blogDetails13.content.ul.24.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.24.li.3')}</strong> {t('blogDetails13.content.ul.24.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.24.li.5')}</strong> {t('blogDetails13.content.ul.24.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.24.li.7')}</strong> {t('blogDetails13.content.ul.24.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.24.li.9')}</strong> {t('blogDetails13.content.ul.24.li.10')}
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail13}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h5>{t('blogDetails13.content.h5.7')}</h5>
								<p>
									<strong>{t('blogDetails13.content.p.25')} </strong> {t('blogDetails13.content.p.26')}
								</p>
								<p>
									<strong>{t('blogDetails13.content.p.27')} </strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.25.li.1')}</strong> {t('blogDetails13.content.ul.25.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.25.li.3')}</strong> {t('blogDetails13.content.ul.25.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails13.content.p.28')} </strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.26.li.1')}</strong> {t('blogDetails13.content.ul.26.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.26.li.3')}</strong> {t('blogDetails13.content.ul.26.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails13.content.p.29')} </strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.27.li.1')}</strong> {t('blogDetails13.content.ul.27.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.27.li.3')}</strong> {t('blogDetails13.content.ul.27.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails13.content.p.30')} </strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.28.li.1')}</strong> {t('blogDetails13.content.ul.28.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.28.li.3')}</strong> {t('blogDetails13.content.ul.28.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails13.content.p.31')} </strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.29.li.1')}</strong> {t('blogDetails13.content.ul.29.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails13.content.ul.29.li.3')}</strong> {t('blogDetails13.content.ul.29.li.4')}
									</li>
								</ul>

								<p>
									<strong>{t('blogDetails13.content.p.32')} </strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails13.content.ul.30.li.1')}</strong> {t('blogDetails13.content.ul.30.li.2')}
									</li>
								</ul>

								<h2>{t('blogDetails13.content.h2.5')}</h2>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail14}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails13.content.h3.19')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.1.li.1')}</li>
									<li>{t('blogDetails13.content.ul.1.li.2')}</li>
									<li>{t('blogDetails13.content.ul.1.li.3')}</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.20')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.2.li.1')}</li>
									<li>{t('blogDetails13.content.ul.2.li.2')}</li>
									<li>{t('blogDetails13.content.ul.2.li.3')}</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.21')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.3.li.1')}</li>
									<li>{t('blogDetails13.content.ul.3.li.2')}</li>
									<li>{t('blogDetails13.content.ul.3.li.3')}</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.22')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.4.li.1')}</li>
									<li>{t('blogDetails13.content.ul.4.li.2')}</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.23')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.5.li.1')}</li>
									<li>{t('blogDetails13.content.ul.5.li.2')}</li>
									<li>{t('blogDetails13.content.ul.5.li.3')}</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.24')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.6.li.1')}</li>
									<li>{t('blogDetails13.content.ul.6.li.2')}</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.25')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.7.li.1')}</li>
									<li>{t('blogDetails13.content.ul.7.li.2')}</li>
								</ul>
								<h3>{t('blogDetails13.content.h3.26')}</h3>
								<ul>
									<li>{t('blogDetails13.content.ul.8.li.1')}</li>
									<li>{t('blogDetails13.content.ul.8.li.2')}</li>
									<li>{t('blogDetails13.content.ul.8.li.3')}</li>
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
