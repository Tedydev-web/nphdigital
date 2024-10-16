import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import animationCharCome from '@/lib/utils/animationCharCome';
import animationWordCome from '@/lib/utils/animationWordCome';
import { toast, ToastContainer, Slide } from 'react-toastify'; // Import Toastify và animation
import 'react-toastify/dist/ReactToastify.css';
import { POSITION } from 'react-toastify'; // Import trực tiếp POSITION

const Contact1 = () => {
	const charAnim = useRef();
	const wordAnim = useRef();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
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
				toast.success('Thư đã được gửi thành công!', {
					position: POSITION.TOP_RIGHT, // Sử dụng POSITION từ react-toastify
					className: 'Toastify__toast Toastify__toast-theme--light Toastify__toast--success',
					autoClose: 5000, // Tự động đóng sau 5 giây
					transition: Slide, // Hiệu ứng chuyển động
				});
			})
			.catch((err) => {
				toast.error('Gửi thư thất bại. Vui lòng thử lại sau.', {
					position: POSITION.TOP_RIGHT,
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
									ref={charAnim}>
									Liên hệ
									<br /> với chúng tôi
								</h2>
							</div>
						</div>
						<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
							<div className="contact__text">
								<p>{'Thật tuyệt vời! NPH Digital rất vui khi được lắng nghe ý kiến của bạn. Hãy liên hệ ngay cho chúng tôi nếu có bất kỳ thắc mắc nào.'}</p>
							</div>
						</div>
					</div>
					<div className="row contact__btm">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="contact__info">
								<h3
									className="sub-title-anim-top animation__word_come"
									ref={wordAnim}>
									{'Đừng ngần ngại ! '}
									<br />
									Hãy gửi thông tin cho chúng tôi
								</h3>
								<ul>
									<li>
										<a href="tel:+(2)578365379">(+84) 777 018 333</a>
									</li>
									<li>
										<a href="mailto:hi@nphdigital.com">hi@nphdigital.com</a>
									</li>
									<li>
										<span>
											Số 838, Ấp Vĩnh Bình, <br /> Xã An Vĩnh Ngãi, Tp Tân An, T Long An
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
												placeholder="Tên *"
												value={formData.name}
												onChange={handleChange}
												required
											/>
										</div>
										<div className="col-xxl-6 col-xl-6 col-12">
											<input
												type="email"
												name="email"
												placeholder="Email *"
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
												placeholder="Số điện thoại"
												value={formData.phone}
												onChange={handleChange}
											/>
										</div>
										<div className="col-xxl-6 col-xl-6 col-12">
											<input
												type="text"
												name="subject"
												placeholder="Chủ đề *"
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
												placeholder="Nội dung *"
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
													<span></span> {isSubmitting ? 'Đang gửi...' : 'Gửi'}
													<br />
													Cho chúng tôi <i className="fa-solid fa-arrow-right"></i>
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
