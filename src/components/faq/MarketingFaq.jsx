import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const MarketingFaq = () => {
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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về dịch vụ quảng cáo số</h2>

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
											Quy trình triển khai quảng cáo số diễn ra như thế nào?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Quy trình của chúng tôi bắt đầu bằng việc phân tích yêu cầu và mục tiêu của doanh nghiệp. Sau đó, chúng tôi lập kế hoạch chiến lược, thiết kế nội dung quảng cáo, triển khai chiến dịch, và cuối cùng là đo lường hiệu quả để tối ưu hóa.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											Tôi có thể tự chạy quảng cáo trên mạng xã hội không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, bạn có thể tự chạy quảng cáo, nhưng chúng tôi khuyên bạn nên làm việc với chuyên gia để tối ưu hóa hiệu quả. Đội ngũ của chúng tôi có thể hỗ trợ bạn trong việc lên kế hoạch và thực hiện các chiến dịch quảng cáo thành công.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											Các chỉ số nào tôi nên theo dõi để đánh giá hiệu quả quảng cáo?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Các chỉ số quan trọng bao gồm tỷ lệ nhấp chuột (CTR), tỷ lệ chuyển đổi, chi phí trên mỗi nhấp chuột (CPC), và doanh thu từ quảng cáo. Chúng tôi sẽ giúp bạn thiết lập các công cụ phân tích để theo dõi và đánh giá hiệu quả chiến dịch.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Thời gian để thấy được kết quả từ quảng cáo là bao lâu?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Thời gian để thấy kết quả từ quảng cáo phụ thuộc vào nhiều yếu tố như loại quảng cáo, ngân sách, và thị trường mục tiêu. Thông thường, bạn có thể bắt đầu thấy kết quả sau từ 1 đến 4 tuần.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Có hỗ trợ nào cho việc tối ưu hóa chiến dịch quảng cáo không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ tối ưu hóa chiến dịch quảng cáo liên tục để đảm bảo hiệu quả tối đa. Chúng tôi theo dõi và điều chỉnh các chiến dịch dựa trên dữ liệu thực tế để đảm bảo rằng bạn đạt được kết quả tốt nhất.</p>
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

export default MarketingFaq;
