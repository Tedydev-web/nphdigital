import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

import Detail1 from '../../../public/assets/imgs/blog/detail/3/1.webp';
import Detail2 from '../../../public/assets/imgs/blog/detail/3/2.webp';
import Detail3 from '../../../public/assets/imgs/blog/detail/3/3.webp';
import Detail4 from '../../../public/assets/imgs/blog/detail/3/4.webp';
import Detail5 from '../../../public/assets/imgs/blog/detail/3/5.webp';
import Detail6 from '../../../public/assets/imgs/blog/detail/3/6.webp';
import Detail7 from '../../../public/assets/imgs/blog/detail/3/7.webp';
import Detail8 from '../../../public/assets/imgs/blog/detail/3/8.webp';
import Detail9 from '../../../public/assets/imgs/blog/detail/3/9.webp';
import Detail10 from '../../../public/assets/imgs/blog/detail/3/10.webp';
import Detail11 from '../../../public/assets/imgs/blog/detail/3/11.webp';
import Detail12 from '../../../public/assets/imgs/blog/detail/3/12.webp';
import Detail13 from '../../../public/assets/imgs/blog/detail/3/13.webp';
import animationWordCome from '@/lib/utils/animationWordCome';
import Switcher from '../../components/common/Switcher';
import { useEffect, useRef, useState } from 'react';
import avt from '../../../public/assets/imgs/blog/avt.png';

const BlogDetails2024 = () => {
	const { t } = useTranslation('blog3');
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
									<span>{t('blogDetails3.content.h2.1')}</span>
									<span>06 Jan 2024</span>
								</h2>
								<h3
									className="blog__detail-title animation__word_come"
									ref={wordAnim2}>
									{t('blogDetails3.content.h3.1')}
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
											<span>{t('blogDetails3.authorInfo')}</span>
											<span>{t('blogDetails3.authorName')}</span>
										</p>
									</div>
									<div className="blog__detail-meta">
										<p>
											<span>{t('blogDetails3.realTime')}</span>
											<span>12/08/2024</span>
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
								<p>{t('blogDetails3.content.p.3')}</p>
								<h2>{t('blogDetails3.content.h2.2')}</h2>
								<p>
									<strong>{t('blogDetails3.content.p.4')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails3.content.ul.9.li.1')}</strong> {t('blogDetails3.content.ul.9.li.2')}
									</li>
									<li>{t('blogDetails3.content.ul.9.li.3')}</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail2}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>{t('blogDetails3.content.p.5')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails3.content.ul.10.li.1')} </strong> {t('blogDetails3.content.ul.10.li.2')}
									</li>
									<li>
										<strong>{t('blogDetails3.content.ul.10.li.3')} </strong> {t('blogDetails3.content.ul.10.li.4')}
									</li>
									<li>
										<strong>{t('blogDetails3.content.ul.10.li.5')} </strong> {t('blogDetails3.content.ul.10.li.6')}
									</li>
									<li>
										<strong>{t('blogDetails3.content.ul.10.li.7')} </strong> {t('blogDetails3.content.ul.10.li.8')}
									</li>
									<li>
										<strong>{t('blogDetails3.content.ul.10.li.9')} </strong> {t('blogDetails3.content.ul.10.li.10')}
									</li>
								</ul>
								<h2>{t('blogDetails3.content.h2.3')}</h2>
								<h3>{t('blogDetails3.content.h3.2')}</h3>
								<p>{t('blogDetails3.content.p.6')}</p>
								<p>{t('blogDetails3.content.p.7')}</p>
								<h3>{t('blogDetails3.content.h3.3')}</h3>
								<p>{t('blogDetails3.content.p.8')}</p>
								<p>{t('blogDetails3.content.p.9')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail3}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails3.content.h3.4')}</h3>
								<p>{t('blogDetails3.content.p.10')}</p>
								<p>{t('blogDetails3.content.p.11')}</p>
								<h3>{t('blogDetails3.content.h3.5')}</h3>
								<p>{t('blogDetails3.content.p.12')}</p>
								<p>{t('blogDetails3.content.p.13')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail4}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails3.content.h3.6')}</h3>
								<p>{t('blogDetails3.content.p.14')}</p>
								<p>{t('blogDetails3.content.p.15')}</p>
								<h3>{t('blogDetails3.content.h3.7')}</h3>
								<p>{t('blogDetails3.content.p.16')}</p>
								<p>{t('blogDetails3.content.p.17')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail5}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails3.content.h3.8')}</h3>
								<p>{t('blogDetails3.content.p.18')}</p>
								<p>{t('blogDetails3.content.p.19')}</p>
								<h3>{t('blogDetails3.content.h3.9')}</h3>
								<p>{t('blogDetails3.content.p.20')}</p>
								<p>{t('blogDetails3.content.p.21')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail6}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails3.content.h3.10')}</h3>
								<p>{t('blogDetails3.content.p.22')}</p>
								<p>{t('blogDetails3.content.p.23')}</p>
								<h3>{t('blogDetails3.content.h3.11')}</h3>
								<p>{t('blogDetails3.content.p.24')}</p>
								<p>{t('blogDetails3.content.p.25')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail7}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h2>{t('blogDetails3.content.h2.4')}</h2>
								<p>
									<strong>{t('blogDetails3.content.p.26')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.27')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail8}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>{t('blogDetails3.content.p.28')}</p>
								<h3>{t('blogDetails3.content.h3.12')}</h3>
								<p>
									<strong>{t('blogDetails3.content.p.29')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.30')}</p>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail9}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>{t('blogDetails3.content.p.31')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.32')}</p>
								<h3>{t('blogDetails3.content.h3.13')}</h3>
								<p>
									<strong>{t('blogDetails3.content.p.33')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.34')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail10}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>{t('blogDetails3.content.p.35')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.36')}</p>
								<h3>{t('blogDetails3.content.h3.14')}</h3>
								<p>
									<strong>{t('blogDetails3.content.p.37')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.38')}</p>
								<p>{t('blogDetails3.content.p.39')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail11}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>{t('blogDetails3.content.p.40')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.41')}</p>
								<h3>{t('blogDetails3.content.h3.15')}</h3>
								<p>
									<strong>{t('blogDetails3.content.p.42')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.43')}</p>

								<p>{t('blogDetails3.content.p.44')}</p>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail12}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>{t('blogDetails3.content.p.45')}</strong>
								</p>
								<p>{t('blogDetails3.content.p.46')}</p>
								<p>{t('blogDetails3.content.p.47')}</p>
								<h2>{t('blogDetails3.content.h2.5')}</h2>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail13}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails3.content.h3.16')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.1.li.1')}</li>
									<li>{t('blogDetails3.content.ul.1.li.2')}</li>
									<li>{t('blogDetails3.content.ul.1.li.3')}</li>
								</ul>
								<h3>{t('blogDetails3.content.h3.17')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.2.li.1')}</li>
									<li>{t('blogDetails3.content.ul.2.li.2')}</li>
									<li>{t('blogDetails3.content.ul.2.li.3')}</li>
								</ul>
								<h3>{t('blogDetails3.content.h3.18')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.3.li.1')}</li>
									<li>{t('blogDetails3.content.ul.3.li.2')}</li>
									<li>{t('blogDetails3.content.ul.3.li.3')}</li>
								</ul>
								<h3>{t('blogDetails3.content.h3.19')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.4.li.1')}</li>
									<li>{t('blogDetails3.content.ul.4.li.2')}</li>
								</ul>
								<h3>{t('blogDetails3.content.h3.20')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.5.li.1')}</li>
									<li>{t('blogDetails3.content.ul.5.li.2')}</li>
									<li>{t('blogDetails3.content.ul.5.li.3')}</li>
									<li>{t('blogDetails3.content.ul.5.li.4')}</li>
								</ul>
								<h3>{t('blogDetails3.content.h3.21')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.6.li.1')}</li>
									<li>{t('blogDetails3.content.ul.6.li.2')}</li>
								</ul>
								<h3>{t('blogDetails3.content.h3.22')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.7.li.1')}</li>
									<li>{t('blogDetails3.content.ul.7.li.2')}</li>
								</ul>
								<h3>{t('blogDetails3.content.h3.20')}</h3>
								<ul>
									<li>{t('blogDetails3.content.ul.8.li.1')}</li>
									<li>{t('blogDetails3.content.ul.8.li.2')}</li>
								</ul>
							</div>
							<div className="blog__detail-tags">
								<p className="sub-title-anim">
									tags: <Link href="/blog">{t('blogDetails3.content.p.1')}</Link>, <Link href="/blog">UX/UI</Link>,<Link href="/tag">{t('blogDetails3.content.p.2')}</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetails2024;
