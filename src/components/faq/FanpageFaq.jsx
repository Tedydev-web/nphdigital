import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const FanpageFaq = () => {
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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về dịch vụ Chăm sóc Fanpage</h2>

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
											Dịch vụ chăm sóc Fanpage bao gồm những gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Dịch vụ chăm sóc Fanpage của chúng tôi bao gồm quản lý nội dung, tạo bài đăng, tối ưu hóa quảng cáo, theo dõi tương tác, phân tích dữ liệu và quản lý bình luận, tin nhắn. Chúng tôi giúp bạn xây dựng hình ảnh thương hiệu và tăng cường tương tác với khách hàng trên mạng xã hội.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											Làm thế nào để xây dựng nội dung Fanpage hiệu quả?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi xây dựng nội dung Fanpage dựa trên chiến lược sáng tạo, hướng tới đối tượng khách hàng mục tiêu. Nội dung đa dạng bao gồm hình ảnh, video, bài viết và tương tác trực tiếp, giúp tăng cường mức độ nhận diện thương hiệu và tương tác từ người dùng.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Lợi ích của việc chăm sóc Fanpage là gì?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chăm sóc Fanpage giúp thương hiệu của bạn duy trì sự hiện diện trên mạng xã hội, tăng cường tương tác với khách hàng và thúc đẩy doanh số. Ngoài ra, việc thường xuyên theo dõi và tối ưu hóa Fanpage còn giúp bạn nắm bắt xu hướng và điều chỉnh chiến lược tiếp thị kịp thời.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Dịch vụ này có hỗ trợ quảng cáo không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ tối ưu hóa quảng cáo trên Fanpage, giúp bạn tiếp cận đúng đối tượng khách hàng mục tiêu. Chúng tôi sẽ theo dõi hiệu quả quảng cáo, điều chỉnh ngân sách và chiến lược để đạt được kết quả tốt nhất.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Tôi có thể theo dõi kết quả chăm sóc Fanpage như thế nào?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Chúng tôi cung cấp báo cáo chi tiết về hiệu quả chăm sóc Fanpage, bao gồm số lượt thích, bình luận, chia sẻ, và tương tác của người dùng. Bạn sẽ có cái nhìn toàn diện về sự phát triển của Fanpage và có thể điều chỉnh chiến lược tiếp thị nếu cần.</p>
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

export default FanpageFaq;
