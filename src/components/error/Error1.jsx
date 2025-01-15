import Link from 'next/link';
import Thumb404 from '../../../public/assets/imgs/thumb/404.png';
import Image from 'next/image';

const Error1 = () => {
	return (
		<>
			<section className="error__page">
				<div className="container line">
					<span className="line-3"></span>
					<div className="row">
						<div className="col-xxl-12">
							<div className="error__content">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={Thumb404}
									alt="Page not found"
								/>
								<h2>Sorry! page did not found</h2>
								<p>{"The page you are looking for doesn't exist or has been moved"}</p>
								<div className="btn_wrapper">
									<Link
										href="https://nphdigital.vn/"
										className="wc-btn-primary btn-hover btn-item">
										<span></span> Back to <br />
										Homepage <i className="fa-solid fa-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Error1;
