import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const ServiceDetailsFaq = () => {
	return (
		<>
			<section className="faq__area">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						{/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
							<div className="faq__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbFaq}
									alt="FAQ Image"
									data-speed="auto"
								/>
							</div>
						</div> */}
						<div className="faq__content">
							<h2 className="faq__title title-anim">Dịch vụ Tương tác số</h2>

							<div className="faq__list">
								<Accordion
									defaultActiveKey="0"
									className="accordion"
									id="accordionExample">
									<Accordion.Item
										eventKey="0"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingOne">
											Tương tác số là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Tương tác số là cách thức mà người dùng tương tác với các dịch vụ trực tuyến thông qua các giao diện số, bao gồm website, ứng dụng di động, và các nền tảng truyền thông xã hội.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											Tại sao nên sử dụng dịch vụ Tương tác số?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Dịch vụ Tương tác số giúp tăng cường trải nghiệm người dùng, cải thiện mức độ tương tác và giữ chân khách hàng, từ đó nâng cao hiệu quả kinh doanh.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Những công cụ nào được sử dụng trong Tương tác số?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi sử dụng các công cụ như Google Analytics, các nền tảng CRM, và các phần mềm tự động hóa marketing để tối ưu hóa quá trình tương tác và phân tích dữ liệu.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Có những xu hướng nào trong Tương tác số hiện nay?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Một số xu hướng bao gồm việc sử dụng trí tuệ nhân tạo, trải nghiệm người dùng tùy chỉnh, và giao diện người dùng tối giản nhằm tối đa hóa tính hiệu quả.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Làm thế nào để bắt đầu với dịch vụ Tương tác số?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Bạn có thể liên hệ với chúng tôi để được tư vấn và thiết lập một chiến lược Tương tác số phù hợp với nhu cầu của doanh nghiệp.</p>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServiceDetailsFaq;
