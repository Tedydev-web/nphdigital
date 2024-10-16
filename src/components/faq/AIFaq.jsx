import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const AIFaq = () => {
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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về dịch vụ Lập trình AI và tự động hóa</h2>

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
											Dịch vụ lập trình AI và tự động hóa là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Dịch vụ lập trình AI và tự động hóa từ NPH Digital giúp doanh nghiệp tối ưu hóa quy trình làm việc, nâng cao hiệu suất và giảm chi phí thông qua việc sử dụng các giải pháp AI tùy chỉnh và tự động hóa quy trình.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											Các công nghệ nào được sử dụng trong lập trình AI?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi sử dụng các công nghệ hiện đại như machine learning, deep learning, và tự động hóa quy trình (RPA) để phát triển các ứng dụng AI hiệu quả và đáp ứng nhu cầu của doanh nghiệp.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Làm thế nào để xác định giải pháp AI phù hợp cho doanh nghiệp của tôi?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi sẽ tiến hành phân tích nhu cầu và quy trình hiện tại của doanh nghiệp bạn để đưa ra những giải pháp AI tùy chỉnh và phù hợp nhất. Đội ngũ chuyên gia của chúng tôi sẽ tư vấn và hỗ trợ bạn trong từng bước của quá trình này.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Tôi có thể yêu cầu nâng cấp và bảo trì cho ứng dụng AI của mình không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ bảo trì và nâng cấp ứng dụng AI sau khi hoàn thành. Chúng tôi sẵn sàng hỗ trợ sửa lỗi, cập nhật tính năng và tối ưu hóa hiệu suất để đảm bảo ứng dụng hoạt động ổn định và đáp ứng nhu cầu của bạn.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Có hỗ trợ đào tạo cho đội ngũ nhân viên sử dụng giải pháp AI không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp các khóa đào tạo cho đội ngũ nhân viên của bạn để đảm bảo họ có thể sử dụng và khai thác hiệu quả các giải pháp AI mà chúng tôi cung cấp.</p>
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

export default AIFaq;
