import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import emailjs from 'emailjs-com';
import animationCharCome from '@/lib/utils/animationCharCome';
import animationWordCome from '@/lib/utils/animationWordCome';
import { toast, ToastContainer, Slide } from 'react-toastify'; // Import Toastify và animation
import 'react-toastify/dist/ReactToastify.css';
import { POSITION } from 'react-toastify'; // Import trực tiếp POSITION
import { useTranslation } from 'react-i18next';

const Contact1 = () => {
	const { t } = useTranslation('contact');
	const router = useRouter();
	const { email } = router.query;
	const charAnim = useRef();
	const wordAnim = useRef();
	const [formData, setFormData] = useState({
		name: '',
		email: email || '',
		phone: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		animationCharCome(charAnim.current);
		animationWordCome(wordAnim.current);
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		const serviceID = 'nphdigitalcom';
		const templateID = 'nphdigitalcom';
		const userID = 'fvan4FMFu4HeemPfC';

		emailjs
			.send(serviceID, templateID, formData, userID)
			.then((response) => {
				toast.success(t('toast.success'), {
					className: 'Toastify__toast Toastify__toast-theme--light Toastify__toast--success',
					autoClose: 5000, // Tự động đóng sau 5 giây
					transition: Slide, // Hiệu ứng chuyển động
				});
			})
			.catch((err) => {
				toast.error(t('toast.error'), {
					className: 'Toastify__toast Toastify__toast-theme--light Toastify__toast--error',
					autoClose: 5000,
					transition: Slide,
				});
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<>
			<section className="contact__area-6">
				<div className="container g-0 line pt-120 pb-110">
					<span className="line-3"></span>
					<div className="row">
						<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title-2 animation__char_come"
									ref={charAnim}
									style={{ color: '#e0fd60' }}>
									<span>{t('title.line1')}</span>
									<br />
									<span>{t('title.line2')}</span>
								</h2>
							</div>
						</div>
						<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
							<div className="contact__text">
								<p>{t('text')}</p>
							</div>
						</div>
					</div>
					<div className="row contact__btm">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="contact__info">
								<h3 className="sub-title-anim-top animation__word_come">
									<span>{t('subTitle.line1')}</span>
									<br />
									<span>{t('subTitle.line2')}</span>
								</h3>
								<ul>
									<li>
										<a href="tel:18003108">18003108</a>
									</li>
									<li>
										<a href="mailto:hi@nphdigital.com">hi@nphdigital.com</a>
									</li>
									<li>
										<span>
											{t('address.line1')}
											<br /> {t('address.line2')}
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="contact__form">
								<form onSubmit={sendEmail}>
									<div className="row g-3">
										<div className="col-xxl-6 col-xl-6 col-12">
											<input
												type="text"
												name="name"
												placeholder={t('form.name')}
												value={formData.name}
												onChange={handleChange}
												required
											/>
										</div>
										<div className="col-xxl-6 col-xl-6 col-12">
											<input
												type="email"
												name="email"
												placeholder={t('form.email')}
												value={formData.email}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className="row g-3">
										<div className="col-xxl-6 col-xl-6 col-12">
											<input
												type="tel"
												name="phone"
												placeholder={t('form.phone')}
												value={formData.phone}
												onChange={handleChange}
											/>
										</div>
										<div className="col-xxl-6 col-xl-6 col-12">
											<input
												type="text"
												name="subject"
												placeholder={t('form.subject')}
												value={formData.subject}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className="row g-3">
										<div className="col-12">
											<textarea
												name="message"
												placeholder={t('form.message')}
												value={formData.message}
												onChange={handleChange}
												required></textarea>
										</div>
									</div>
									<div className="row g-3">
										<div className="col-12">
											<div className="btn_wrapper">
												<button
													className="wc-btn-primary btn-hover btn-item"
													type="submit"
													disabled={isSubmitting}>
													<span></span> {isSubmitting ? t('form.sending') : t('form.send')}
													{t('form.button')}
													<i className="fa-solid fa-arrow-right"></i>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Toastify Container để hiển thị thông báo */}
			<ToastContainer />

			<style jsx>{`
				.Toastify__toast--success {
					background-color: #89c082; /* Màu nền cho thông báo thành công */
				}
				.Toastify__toast--error {
					background-color: #f56565; /* Màu nền cho thông báo lỗi */
				}
			`}</style>
		</>
	);
};

export default Contact1;
