import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const WebsiteFaq = () => {
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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về Thiết kế và Phát triển Website</h2>

							<div className="faq__list">
								<Accordion
									defaultActiveKey="0"
									className="accordion"
									id="accordionExample">
									{/* FAQ Item 1 */}
									<Accordion.Item
										eventKey="0"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingOne">
											Quy trình phát triển website của NPH Digital?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Quy trình phát triển website của chúng tôi gồm 6 bước chính: phân tích yêu cầu, thiết kế giao diện (UI/UX), lập trình, kiểm thử, tối ưu SEO, và triển khai. Mỗi bước đều được thực hiện tỉ mỉ và chuyên nghiệp để đảm bảo sản phẩm hoàn thiện đạt hiệu suất tốt nhất.</p>
										</Accordion.Body>
									</Accordion.Item>

									{/* FAQ Item 2 */}
									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											Lợi ích của việc thiết kế website chuẩn SEO là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Website chuẩn SEO giúp cải thiện thứ hạng trên các công cụ tìm kiếm như Google, từ đó tăng lượng truy cập tự nhiên và tiếp cận khách hàng tiềm năng hiệu quả hơn. Chúng tôi đảm bảo rằng mỗi website phát triển đều tích hợp SEO từ giai đoạn đầu, giúp bạn đạt được hiệu quả cao trong dài hạn.</p>
										</Accordion.Body>
									</Accordion.Item>

									{/* FAQ Item 3 */}
									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Thời gian hoàn thành dự án thiết kế và phát triển website là bao lâu?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Thời gian hoàn thành phụ thuộc vào độ phức tạp của dự án. Thông thường, một website cơ bản có thể hoàn thành trong 4 đến 6 tuần, bao gồm cả giai đoạn thiết kế, phát triển và kiểm thử. Đối với các dự án phức tạp hơn, thời gian có thể kéo dài từ 8 đến 12 tuần.</p>
										</Accordion.Body>
									</Accordion.Item>

									{/* FAQ Item 4 */}
									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Các giải pháp kỹ thuật nào được sử dụng để phát triển website?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi sử dụng nhiều công nghệ tiên tiến như React, Next.js, và WordPress để phát triển website. Các nền tảng này không chỉ giúp tối ưu hóa trải nghiệm người dùng mà còn đảm bảo tốc độ tải trang nhanh, dễ dàng mở rộng và bảo mật mạnh mẽ.</p>
										</Accordion.Body>
									</Accordion.Item>

									{/* FAQ Item 5 */}
									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Có hỗ trợ bảo trì và cập nhật website sau khi hoàn thành không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ bảo trì và cập nhật sau khi hoàn thành dự án. Điều này bao gồm kiểm tra định kỳ, sửa lỗi, và cập nhật các tính năng mới theo nhu cầu của khách hàng để đảm bảo website luôn vận hành ổn định và đáp ứng các yêu cầu kinh doanh thay đổi.</p>
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

export default WebsiteFaq;
