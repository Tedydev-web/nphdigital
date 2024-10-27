import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

import Detail1 from '../../../public/assets/imgs/blog/detail/12/1.webp';
import Detail2 from '../../../public/assets/imgs/blog/detail/12/2.webp';
import Detail3 from '../../../public/assets/imgs/blog/detail/12/3.webp';
import Detail4 from '../../../public/assets/imgs/blog/detail/12/4.webp';
import Detail5 from '../../../public/assets/imgs/blog/detail/12/5.webp';
import Detail6 from '../../../public/assets/imgs/blog/detail/12/6.webp';
import Detail7 from '../../../public/assets/imgs/blog/detail/12/7.webp';
import Detail8 from '../../../public/assets/imgs/blog/detail/12/8.webp';
import Detail9 from '../../../public/assets/imgs/blog/detail/12/9.webp';
import Detail10 from '../../../public/assets/imgs/blog/detail/12/10.webp';
import Detail11 from '../../../public/assets/imgs/blog/detail/12/11.webp';
import animationWordCome from '@/lib/utils/animationWordCome';
import Switcher from '../../components/common/Switcher';
import { useEffect, useRef, useState } from 'react';
import avt from '../../../public/assets/imgs/blog/avt.png';

const BlogDetails2024 = () => {
	const { t } = useTranslation('blog12');
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
									<span>{t('blogDetails12.content.h2.1')}</span>
									<span>06 Jan 2024</span>
								</h2>
								<h3
									className="blog__detail-title animation__word_come"
									ref={wordAnim2}>
									{t('blogDetails12.content.h3.1')}
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
											<span>{t('blogDetails12.authorInfo')}</span>
											<span>{t('blogDetails12.authorName')}</span>
										</p>
									</div>
									<div className="blog__detail-meta">
										<p>
											<span>{t('blogDetails12.realTime')}</span>
											<span>30/07/2024</span>
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
								<p>{t('blogDetails12.content.p.1')}</p>
								<h2>{t('blogDetails12.content.h2.2')}</h2>
								<h3>{t('blogDetails12.content.h3.2')}</h3>
								<p>{t('blogDetails12.content.p.2')}</p>
								<p>{t('blogDetails12.content.p.3')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail2}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3>{t('blogDetails12.content.h3.3')}</h3>
								<p>{t('blogDetails12.content.p.4')}</p>
								<p>{t('blogDetails12.content.p.5')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail3}
									alt="Dễ Dàng Bảo Trì và Cập Nhật"
								/>

								<h3>{t('blogDetails12.content.h3.4')}</h3>
								<p>{t('blogDetails12.content.p.6')}</p>
								<ul>
									<li>
										<strong>{t('blogDetails12.content.ul.1.li.1')} </strong> {t('blogDetails12.content.ul.1.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.2.li.1')} </strong> {t('blogDetails12.content.ul.2.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.3.li.1')} </strong> {t('blogDetails12.content.ul.3.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.4.li.1')} </strong> {t('blogDetails12.content.ul.4.li.2')}
									</li>
								</ul>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail4}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails12.content.p.7')}</p>
								<h2>{t('blogDetails12.content.h2.3')}</h2>
								<h3>{t('blogDetails12.content.h3.5')}</h3>
								<p>{t('blogDetails12.content.p.8')}</p>
								<p>{t('blogDetails12.content.p.9')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail5}
									alt="Sự phát triển của công nghệ di động"
								/>

								<p>{t('blogDetails12.content.p.10')}</p>
								<p>{t('blogDetails12.content.p.11')}</p>
								<h3>{t('blogDetails12.content.h3.6')}</h3>
								<p>{t('blogDetails12.content.p.12')}</p>
								<p>{t('blogDetails12.content.p.13')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail6}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails12.content.p.14')} </p>
								<p>{t('blogDetails12.content.p.15')}</p>
								<p>{t('blogDetails12.content.p.16')}</p>

								<h3>{t('blogDetails12.content.h3.7')}</h3>
								<p>{t('blogDetails12.content.p.17')}</p>
								<p>{t('blogDetails12.content.p.18')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail7}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails12.content.p.19')}</p>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail8}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails12.content.p.20')}</p>
								<p>{t('blogDetails12.content.p.21')}</p>
								<h2>{t('blogDetails12.content.h2.4')}</h2>
								<p>{t('blogDetails12.content.p.22')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail9}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h2>{t('blogDetails12.content.h2.5')}</h2>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail10}
									alt="Sự phát triển của công nghệ di động"
								/>

								<ul>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.1')} </strong> {t('blogDetails12.content.ul.5.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.3')} </strong> {t('blogDetails12.content.ul.5.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.5')} </strong> {t('blogDetails12.content.ul.5.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.7')} </strong> {t('blogDetails12.content.ul.5.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.9')} </strong> {t('blogDetails12.content.ul.5.li.10')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.11')} </strong> {t('blogDetails12.content.ul.5.li.12')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.13')} </strong> {t('blogDetails12.content.ul.5.li.14')}
									</li>
									<li>
										<strong>{t('blogDetails12.content.ul.5.li.15')} </strong> {t('blogDetails12.content.ul.5.li.16')}
									</li>
								</ul>

								<h2>{t('blogDetails12.content.h2.6')}</h2>
								<p>{t('blogDetails12.content.p.23')}</p>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail11}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails12.content.p.24')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetails2024;
