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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về thiết kế UI/UX</h2>

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
											Thiết kế UI là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>UI (Giao diện người dùng) là cách mà người dùng tương tác với sản phẩm hoặc dịch vụ kỹ thuật số. Thiết kế UI tập trung vào việc tối ưu hóa các yếu tố trực quan như nút, biểu tượng và bố cục để đảm bảo trải nghiệm người dùng tốt nhất.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											UX có phải là một phần của UI không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Không. UX (Trải nghiệm người dùng) tập trung vào việc tối ưu hóa hành trình người dùng, trong khi UI tập trung vào các yếu tố giao diện. Cả hai phối hợp với nhau để tạo ra trải nghiệm sản phẩm hoàn chỉnh.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Nguyên tắc cơ bản của thiết kế UI là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Thiết kế UI cần phải nhất quán, dễ sử dụng, rõ ràng, và trực quan. Các yếu tố như màu sắc, phông chữ, và bố cục phải được sử dụng một cách hợp lý để tạo sự dễ hiểu và hấp dẫn cho người dùng.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Làm thế nào để đảm bảo thiết kế UX tốt?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Thiết kế UX tốt bắt đầu từ việc hiểu rõ nhu cầu của người dùng. Việc nghiên cứu người dùng, thử nghiệm với prototype và lắng nghe phản hồi là các bước cần thiết để cải thiện trải nghiệm người dùng liên tục.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Các công cụ phổ biến để thiết kế UI/UX là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Một số công cụ phổ biến cho thiết kế UI/UX bao gồm Figma, Sketch, Adobe XD, và InVision. Các công cụ này hỗ trợ quá trình tạo mẫu, thiết kế giao diện và hợp tác trong nhóm.</p>
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
