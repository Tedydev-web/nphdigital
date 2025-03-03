import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

import Detail1 from '../../../public/assets/imgs/blog/detail/5/1.webp';
import Detail2 from '../../../public/assets/imgs/blog/detail/5/2.webp';
import Detail3 from '../../../public/assets/imgs/blog/detail/5/3.webp';
import Detail4 from '../../../public/assets/imgs/blog/detail/5/4.webp';
import Detail5 from '../../../public/assets/imgs/blog/detail/5/5.webp';
import Detail6 from '../../../public/assets/imgs/blog/detail/5/6.webp';
import Detail7 from '../../../public/assets/imgs/blog/detail/5/7.webp';
import Detail8 from '../../../public/assets/imgs/blog/detail/5/8.webp';
import Detail9 from '../../../public/assets/imgs/blog/detail/5/9.webp';
import Detail10 from '../../../public/assets/imgs/blog/detail/5/10.webp';
import Detail11 from '../../../public/assets/imgs/blog/detail/5/11.webp';
import Detail12 from '../../../public/assets/imgs/blog/detail/5/12.webp';
import Detail13 from '../../../public/assets/imgs/blog/detail/5/13.webp';
import Detail14 from '../../../public/assets/imgs/blog/detail/5/14.webp';
import Detail15 from '../../../public/assets/imgs/blog/detail/5/15.webp';
import Detail16 from '../../../public/assets/imgs/blog/detail/5/16.webp';
import Detail17 from '../../../public/assets/imgs/blog/detail/5/17.webp';
import Detail18 from '../../../public/assets/imgs/blog/detail/5/18.webp';
import Detail19 from '../../../public/assets/imgs/blog/detail/5/19.webp';
import Detail20 from '../../../public/assets/imgs/blog/detail/5/20.webp';
import Detail21 from '../../../public/assets/imgs/blog/detail/5/21.webp';
import animationWordCome from '@/lib/utils/animationWordCome';
import Switcher from '../../components/common/Switcher';
import { useEffect, useRef, useState } from 'react';
import avt from '../../../public/assets/imgs/blog/avt.png';

const BlogDetails2024 = () => {
	const { t } = useTranslation('blog5');
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
									<span>{t('blogDetails5.content.h2.1')}</span>
									<span>06 Jan 2024</span>
								</h2>
								<h3
									className="blog__detail-title animation__word_come"
									ref={wordAnim2}>
									{t('blogDetails5.content.h3.1')}
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
											<span>{t('blogDetails5.authorInfo')}</span>
											<span>{t('blogDetails5.authorName')}</span>
										</p>
									</div>
									<div className="blog__detail-meta">
										<p>
											<span>{t('blogDetails5.realTime')}</span>
											<span>09/08/2024</span>
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
								<p>{t('blogDetails5.content.p.1')}</p>
								<h2>{t('blogDetails5.content.h2.2')}</h2>
								<p>{t('blogDetails5.content.p.2')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail2}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>{t('blogDetails5.content.p.3')}</strong>
								</p>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.1.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.1.li.2')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.1.li.3')}</strong>
										<span>{t('blogDetails5.content.ul.1.li.4')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.1.li.5')}</strong>
										<span>{t('blogDetails5.content.ul.1.li.6')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.1.li.7')}</strong>
										<span>{t('blogDetails5.content.ul.1.li.8')}</span>
									</li>
								</ul>
								<h2>{t('blogDetails5.content.h2.3')}</h2>
								<h3>{t('blogDetails5.content.h3.2')}</h3>
								<p>{t('blogDetails5.content.p.4')}</p>
								<h3>{t('blogDetails5.content.h3.31')}</h3>
								<p>{t('blogDetails5.content.p.5')}</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail3}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.3')}</h3>
								<ul>
									<li>{t('blogDetails5.content.ul.2.li.1')}</li>
								</ul>
								<h3>{t('blogDetails5.content.h3.4')}</h3>
								<ul>
									<li>{t('blogDetails5.content.ul.2.li.2')}</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail4}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.5')}</h3>
								<ul>
									<li>{t('blogDetails5.content.ul.2.li.3')}</li>
								</ul>
								<h3>{t('blogDetails5.content.h3.6')}</h3>

								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.3.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.3.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.3.li.3')}</strong>
										<span>{t('blogDetails5.content.ul.3.li.4')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail5}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.7')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.4.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.4.li.2')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.4.li.3')}</strong>
										<span>{t('blogDetails5.content.ul.4.li.4')}</span>
									</li>
								</ul>
								<h3>{t('blogDetails5.content.h3.8')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.5.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.5.li.2')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.5.li.3')}</strong>
										<span>{t('blogDetails5.content.ul.5.li.4')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail6}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3>{t('blogDetails5.content.h3.9')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.6.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.6.li.2')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.6.li.3')}</strong>
										<span>{t('blogDetails5.content.ul.6.li.4')}</span>
									</li>
								</ul>
								<h3>{t('blogDetails5.content.h3.10')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.7.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.7.li.2')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.7.li.3')}</strong>
										<span>{t('blogDetails5.content.ul.7.li.4')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail7}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.11')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.8.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.8.li.2')}</span>
									</li>
									<li>
										<strong>{t('blogDetails5.content.ul.8.li.3')}</strong>
										<span>{t('blogDetails5.content.ul.8.li.4')}</span>
									</li>
								</ul>
								<h2>{t('blogDetails5.content.h2.4')}</h2>
								<h3>{t('blogDetails5.content.h3.12')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.9.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.9.li.2')}</span>
										<span>{t('blogDetails5.content.ul.9.li.3')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.10.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.10.li.2')}</span>
										<span>{t('blogDetails5.content.ul.10.li.3')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.11.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.11.li.2')}</span>
										<span>{t('blogDetails5.content.ul.11.li.3')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.12.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.12.li.2')}</span>
										<span>{t('blogDetails5.content.ul.12.li.3')}</span>
									</li>
									<Image
										priority
										width={850}
										style={{ height: 'auto' }}
										src={Detail8}
										alt="Sự phát triển của công nghệ di động"
									/>
								</ul>
								<h3>{t('blogDetails5.content.h3.13')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.13.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.13.li.2')}</span>
										<span>{t('blogDetails5.content.ul.13.li.3')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.14.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.14.li.2')}</span>
										<span>{t('blogDetails5.content.ul.14.li.3')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.15.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.15.li.2')}</span>
										<span>{t('blogDetails5.content.ul.15.li.3')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.16.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.16.li.2')}</span>
										<span>{t('blogDetails5.content.ul.16.li.3')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail9}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3>{t('blogDetails5.content.h3.14')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.17.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.17.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.18.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.18.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.19.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.19.li.2')}</span>
										<span>{t('blogDetails5.content.ul.19.li.3')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.20.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.20.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail10}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.15')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.21.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.21.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.22.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.22.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.23.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.23.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.24.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.24.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail11}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.16')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.25.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.25.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.26.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.26.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.27.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.27.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail12}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.17')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.28.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.28.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.29.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.29.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.30.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.30.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail13}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.18')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.31.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.31.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.32.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.32.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.33.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.33.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.34.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.34.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail14}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.19')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.35.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.35.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.36.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.36.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.37.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.37.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail15}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.20')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.38.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.38.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.39.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.39.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.40.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.40.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.41.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.41.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail16}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>{t('blogDetails5.content.h3.21')}</h3>
								<ul>
									<li>
										<strong>{t('blogDetails5.content.ul.42.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.42.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.43.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.43.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.44.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.44.li.2')}</span>
									</li>

									<li>
										<strong>{t('blogDetails5.content.ul.45.li.1')}</strong>
										<span>{t('blogDetails5.content.ul.45.li.2')}</span>
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail17}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h2> {t('blogDetails5.content.h2.5')}</h2>
								<h3> {t('blogDetails5.content.h3.22')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.6')}</strong>
									<span>{t('blogDetails5.content.p.7')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.8')}</strong>
									<span>{t('blogDetails5.content.p.9')}</span>
								</p>

								<h3> {t('blogDetails5.content.h3.23')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.10')}</strong>
									<span>{t('blogDetails5.content.p.11')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.12')}</strong>
									<span>{t('blogDetails5.content.p.13')}</span>
								</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail18}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3> {t('blogDetails5.content.h3.24')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.14')}</strong>
									<span>{t('blogDetails5.content.p.15')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.16')}</strong>
									<span>{t('blogDetails5.content.p.17')}</span>
								</p>

								<h3> {t('blogDetails5.content.h3.25')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.18')}</strong>
									<span>{t('blogDetails5.content.p.19')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.20')}</strong>
									<span>{t('blogDetails5.content.p.21')}</span>
								</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail19}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3> {t('blogDetails5.content.h3.26')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.22')}</strong>
									<span>{t('blogDetails5.content.p.23')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.24')}</strong>
									<span>{t('blogDetails5.content.p.25')}</span>
								</p>

								<h3> {t('blogDetails5.content.h3.27')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.26')}</strong>
									<span>{t('blogDetails5.content.p.27')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.28')}</strong>
									<span>{t('blogDetails5.content.p.29')}</span>
								</p>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail20}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3> {t('blogDetails5.content.h3.28')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.30')}</strong>
									<span>{t('blogDetails5.content.p.31')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.32')}</strong>
									<span>{t('blogDetails5.content.p.33')}</span>
								</p>

								<h3> {t('blogDetails5.content.h3.29')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.34')}</strong>
									<span>{t('blogDetails5.content.p.35')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.36')}</strong>
									<span>{t('blogDetails5.content.p.37')}</span>
								</p>

								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail21}
									alt="Sự phát triển của công nghệ di động"
								/>

								<h3> {t('blogDetails5.content.h3.30')}</h3>
								<p>
									<strong>{t('blogDetails5.content.p.38')}</strong>
									<span>{t('blogDetails5.content.p.39')}</span>
								</p>
								<p>
									<strong>{t('blogDetails5.content.p.40')}</strong>
									<span>{t('blogDetails5.content.p.41')}</span>
								</p>
							</div>
							<div className="blog__detail-tags">
								<p className="sub-title-anim">
									tags: <Link href="/blog">{t('blogDetails5.content.p.42')}</Link>, <Link href="/blog">UX/UI</Link>,<Link href="/tag">{t('blogDetails5.content.p.43')}</Link>
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
