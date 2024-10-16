import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const ITFaq = () => {
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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về dịch vụ Cho thuê phòng IT ngoài</h2>

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
											Dịch vụ Cho thuê phòng IT ngoài là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Dịch vụ Cho thuê phòng IT ngoài cung cấp không gian làm việc linh hoạt và tiện nghi, giúp doanh nghiệp tiếp cận các giải pháp công nghệ và nhân lực chuyên nghiệp mà không cần đầu tư vào cơ sở hạ tầng cố định.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											Các tiện ích nào được cung cấp khi thuê phòng IT ngoài?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Khi thuê phòng IT ngoài, bạn sẽ được cung cấp các tiện ích như internet tốc độ cao, thiết bị văn phòng, không gian họp và hỗ trợ kỹ thuật 24/7. Chúng tôi cam kết tạo ra môi trường làm việc hiệu quả nhất cho bạn.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Tôi có thể tùy chỉnh không gian làm việc theo nhu cầu không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp các giải pháp tùy chỉnh cho không gian làm việc của bạn để phù hợp với nhu cầu và phong cách làm việc của doanh nghiệp. Bạn có thể điều chỉnh bố trí và thiết kế theo ý thích.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Có các lựa chọn nào về thời gian thuê phòng?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi cung cấp nhiều lựa chọn thời gian thuê linh hoạt, từ thuê theo giờ, theo ngày đến thuê dài hạn, giúp bạn dễ dàng lựa chọn gói dịch vụ phù hợp với nhu cầu của mình.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Làm thế nào để đặt thuê phòng IT ngoài?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Bạn có thể đặt thuê phòng IT ngoài qua trang web của chúng tôi hoặc liên hệ trực tiếp với đội ngũ hỗ trợ khách hàng để được tư vấn và hướng dẫn chi tiết về quy trình đặt phòng.</p>
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

export default ITFaq;
