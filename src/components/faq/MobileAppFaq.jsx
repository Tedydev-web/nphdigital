import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const MobileAppFaq = () => {
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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về phát triển ứng dụng di động</h2>

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
											Quy trình phát triển ứng dụng di động gồm những bước nào?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Quy trình phát triển ứng dụng của chúng tôi bao gồm: phân tích yêu cầu, thiết kế UI/UX, lập trình, kiểm thử, và triển khai. Mỗi giai đoạn đều được thực hiện một cách chuyên nghiệp để đảm bảo ứng dụng vận hành trơn tru và mang lại trải nghiệm tốt nhất cho người dùng.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											Tôi có thể phát triển ứng dụng đa nền tảng không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ phát triển ứng dụng đa nền tảng sử dụng các framework hiện đại như Flutter và React Native. Điều này giúp bạn tiết kiệm chi phí và thời gian phát triển mà vẫn đảm bảo hiệu năng tốt trên cả iOS và Android.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Thời gian hoàn thành một dự án phát triển ứng dụng là bao lâu?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Thời gian phát triển ứng dụng phụ thuộc vào độ phức tạp và yêu cầu cụ thể của dự án. Thông thường, một ứng dụng cơ bản sẽ mất từ 3 đến 6 tháng để hoàn thiện, bao gồm cả giai đoạn kiểm thử và tối ưu hóa.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Làm thế nào để tối ưu trải nghiệm người dùng trên ứng dụng di động?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi tập trung vào việc thiết kế giao diện người dùng (UI) và trải nghiệm người dùng (UX) tốt nhất. Điều này bao gồm việc thực hiện nghiên cứu người dùng, kiểm tra khả năng sử dụng và tích hợp phản hồi từ người dùng vào quá trình phát triển. Chúng tôi đảm bảo rằng ứng dụng dễ sử dụng và mang lại giá trị thực cho người dùng.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Có hỗ trợ bảo trì và cập nhật ứng dụng sau khi hoàn thành không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ bảo trì và cập nhật ứng dụng sau khi hoàn thành để đảm bảo ứng dụng luôn hoạt động mượt mà và đáp ứng nhu cầu của người dùng. Chúng tôi sẵn sàng hỗ trợ sửa lỗi, cập nhật tính năng và cải thiện hiệu suất ứng dụng theo yêu cầu của bạn.</p>
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

export default MobileAppFaq;
