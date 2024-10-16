import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';

const SystemFaq = () => {
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
							<h2 className="faq__title title-anim">Câu hỏi thường gặp về dịch vụ CRM, ERP, HRM</h2>

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
											Dịch vụ CRM là gì và nó mang lại lợi ích gì cho doanh nghiệp?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Dịch vụ CRM (Quản lý quan hệ khách hàng) giúp doanh nghiệp quản lý thông tin khách hàng, cải thiện mối quan hệ và tăng cường sự hài lòng của khách hàng. Nó cho phép bạn theo dõi lịch sử tương tác, quản lý giao dịch và phân tích dữ liệu để đưa ra quyết định kinh doanh tốt hơn.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											ERP là gì và nó giúp doanh nghiệp tiết kiệm thời gian thế nào?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>ERP (Hoạch định nguồn lực doanh nghiệp) là một hệ thống quản lý tích hợp giúp doanh nghiệp tự động hóa và tối ưu hóa các quy trình kinh doanh. Nó cho phép bạn theo dõi tài chính, sản xuất, và quản lý chuỗi cung ứng, từ đó tiết kiệm thời gian và giảm thiểu lỗi do xử lý thủ công.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											HRM là gì và nó mang lại lợi ích gì cho việc quản lý nhân sự?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>HRM (Quản lý nguồn nhân lực) là một hệ thống giúp doanh nghiệp quản lý thông tin nhân viên, theo dõi hiệu suất, và xử lý các quy trình tuyển dụng, đào tạo, và phát triển nhân tài. Nó giúp tăng cường hiệu quả làm việc và giữ chân nhân viên tốt hơn.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											Chúng tôi có thể tùy chỉnh dịch vụ theo nhu cầu cụ thể không?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ tùy chỉnh cho các hệ thống CRM, ERP, và HRM để phù hợp với nhu cầu riêng của doanh nghiệp. Đội ngũ chuyên gia của chúng tôi sẽ làm việc với bạn để xác định các yêu cầu và phát triển giải pháp tốt nhất cho bạn.</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											Có hỗ trợ bảo trì và cập nhật các hệ thống sau khi triển khai?
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>Có, chúng tôi cung cấp dịch vụ bảo trì và cập nhật liên tục cho các hệ thống CRM, ERP, và HRM sau khi triển khai. Chúng tôi đảm bảo rằng các hệ thống luôn hoạt động hiệu quả và đáp ứng nhu cầu thay đổi của doanh nghiệp.</p>
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

export default SystemFaq;
