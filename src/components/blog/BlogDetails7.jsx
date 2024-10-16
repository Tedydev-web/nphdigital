import Image from 'next/image';
import Link from 'next/link';

import Detail1 from '../../../public/assets/imgs/blog/detail/7/1.webp';
import Detail2 from '../../../public/assets/imgs/blog/detail/7/2.webp';
import Detail3 from '../../../public/assets/imgs/blog/detail/7/3.webp';
import Detail4 from '../../../public/assets/imgs/blog/detail/7/4.webp';
import Detail5 from '../../../public/assets/imgs/blog/detail/7/5.webp';
import Detail6 from '../../../public/assets/imgs/blog/detail/7/6.webp';
import Detail7 from '../../../public/assets/imgs/blog/detail/7/7.webp';
import Detail8 from '../../../public/assets/imgs/blog/detail/7/8.webp';
import Detail9 from '../../../public/assets/imgs/blog/detail/7/9.webp';
import Detail10 from '../../../public/assets/imgs/blog/detail/7/10.webp';
import Detail11 from '../../../public/assets/imgs/blog/detail/7/11.webp';
import animationWordCome from '@/lib/utils/animationWordCome';
import Switcher from '../../components/common/Switcher';
import { useEffect, useRef, useState } from 'react';

const BlogDetails2024 = () => {
	const wordAnim = useRef();
	const wordAnim2 = useRef();
	const [mode, setMode] = useState('light');
	const cursor1 = useRef();
	const cursor2 = useRef();

	useEffect(() => {
		animationWordCome(wordAnim.current);
		animationWordCome(wordAnim2.current);
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (mode === 'dark') {
				document.querySelector('body').classList.add('dark');
			} else {
				document.querySelector('body').classList.remove('dark');
			}
		}
	}, [mode]);
	return (
		<>
			<Switcher
				setMode={setMode}
				mode={mode}
				cursor1={cursor1}
				cursor2={cursor2}
			/>
			<section className="blog__detail">
				<div className="container g-0 line pt-140">
					<span className="line-3"></span>
					<div className="row">
						<div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
							<div className="blog__detail-top">
								<h2
									className="blog__detail-date animation__word_come"
									ref={wordAnim}>
									Thiết kế App, UX/UI <span>06 Jan 2024</span>
								</h2>
								<h3
									className="blog__detail-title animation__word_come"
									ref={wordAnim2}>
									10 Cách Tối Ưu Hóa Trải Nghiệm Người Dùng Trong Thiết Kế App
								</h3>
								<div className="blog__detail-metalist">
									<div className="blog__detail-meta">
										<div
											className="blog__detail-author-img"
											style={{ width: 50, height: 50, backgroundColor: '#f0f0f0', borderRadius: '50%' }}></div>
										<p>
											Viết bởi <span>CHI DINH KIM</span>
										</p>
									</div>
									<div className="blog__detail-meta">
										<p>
											Thời gian đọc <span>07/08/2024</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-12">
							<div className="blog__detail-thumb">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={Detail1}
									alt="Thiết kế App 2024"
									data-speed="0.5"
								/>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
							<div className="blog__detail-content">
								<p>Trong quá trình thiết kế app, các nguyên tắc của UX phải được áp dụng để đảm bảo rằng ứng dụng không chỉ đẹp mắt mà còn dễ sử dụng và hiệu quả.</p>
								<h2>1. Giới Thiệu Về Tầm Quan Trọng Của Trải Nghiệm Người Dùng (UX) Trong Thiết Kế App</h2>
								<p>Trong thời đại công nghệ số phát triển vượt bậc, app hay ứng dụng di động đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Từ việc giải trí, mua sắm, đến quản lý công việc và sức khỏe, ứng dụng di động đóng vai trò quan trọng trong việc kết nối và hỗ trợ người dùng. Tuy nhiên, không phải ứng dụng nào cũng thành công và chiếm được lòng tin của người dùng. Một trong những yếu tố then chốt quyết định sự thành công của một ứng dụng chính là trải nghiệm người dùng (UX).</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail2}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>
									<strong>Trải nghiệm người dùng (UX)</strong>đề cập đến cảm nhận, phản ứng và sự tương tác của người dùng khi sử dụng một sản phẩm hoặc dịch vụ. Trong bối cảnh thiết kế ứng dụng di động, UX bao gồm mọi khía cạnh từ giao diện, tính năng, tốc độ, đến sự dễ dàng và thuận tiện khi sử dụng. Một ứng dụng có UX tốt không chỉ thu hút người dùng tải về mà còn giữ chân họ, khuyến khích họ sử dụng lâu dài và giới thiệu cho người khác.
								</p>

								<h2>2. Tầm Quan Trọng của Trải Nghiệm Người Dùng UX trong Thiết Kế App</h2>
								<h3>Thu hút và giữ chân người dùng</h3>
								<p>Trải nghiệm người dùng (UX) tốt đóng vai trò quan trọng trong việc thu hút và giữ chân người dùng. Khi người dùng cảm thấy thoải mái và hài lòng khi sử dụng ứng dụng, họ sẽ có xu hướng sử dụng ứng dụng lâu dài hơn. Ngược lại, nếu họ gặp khó khăn hoặc cảm thấy bực bội, họ sẽ nhanh chóng từ bỏ ứng dụng và tìm kiếm giải pháp khác. UX tốt giúp người dùng dễ dàng hiểu và sử dụng các tính năng của ứng dụng, tạo cảm giác thỏa mãn và tin tưởng vào sản phẩm.</p>
								<h3>Tăng tính cạnh tranh</h3>
								<p>Trong thị trường app hay ứng dụng di động đầy cạnh tranh, một ứng dụng với UX xuất sắc sẽ dễ dàng nổi bật và tạo lợi thế cạnh tranh so với các ứng dụng khác có cùng chức năng. UX tốt không chỉ thu hút người dùng mà còn giữ họ ở lại, làm tăng khả năng ứng dụng được đánh giá cao và được khuyến nghị cho người khác. Điều này đặc biệt quan trọng trong việc xây dựng danh tiếng và tăng thị phần của ứng dụng.</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail3}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>Tăng cường sự tương tác và sử dụng</h3>
								<p>UX tốt khuyến khích người dùng khám phá và sử dụng nhiều tính năng của ứng dụng hơn. Khi người dùng cảm thấy dễ dàng và thoải mái khi tương tác với ứng dụng, họ sẽ dành nhiều thời gian hơn để sử dụng ứng dụng và khám phá các tính năng mới. Điều này không chỉ tăng thời gian sử dụng mà còn tạo cơ hội cho các tính năng bổ sung được phát huy tối đa, từ đó nâng cao giá trị của ứng dụng đối với người dùng.</p>

								<h3>Giảm thiểu chi phí hỗ trợ khách hàng</h3>
								<p>Khi thiết kế app với UX tốt, người dùng sẽ ít gặp phải vấn đề hoặc khó khăn trong quá trình sử dụng. Điều này giúp giảm thiểu số lượng yêu cầu hỗ trợ từ phía người dùng và do đó giảm chi phí liên quan đến việc hỗ trợ khách hàng. UX tốt giúp người dùng tự giải quyết các vấn đề nhỏ mà không cần đến sự trợ giúp từ bộ phận hỗ trợ, từ đó tăng hiệu quả và giảm chi phí vận hành.</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail4}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>Tăng doanh thu và lợi nhuận</h3>
								<p>Đối với các ứng dụng có mục tiêu kinh doanh, UX tốt có thể dẫn đến tăng doanh thu thông qua việc cải thiện tỷ lệ chuyển đổi, tăng doanh số bán hàng hoặc gia tăng giá trị dịch vụ. Khi người dùng có trải nghiệm tốt, họ sẽ có xu hướng thực hiện nhiều giao dịch hơn, mua sắm nhiều hơn và sử dụng các dịch vụ trả phí của ứng dụng. UX tốt giúp tăng lòng tin và sự hài lòng của khách hàng, từ đó thúc đẩy doanh thu và lợi nhuận.</p>
								<h3>Xây dựng lòng trung thành và thương hiệu</h3>
								<p>Một trải nghiệm người dùng tuyệt vời sẽ tạo dựng lòng trung thành của khách hàng và giúp xây dựng một hình ảnh thương hiệu mạnh mẽ. Khi người dùng hài lòng với ứng dụng, họ sẽ trở thành những người ủng hộ tích cực, giới thiệu ứng dụng cho bạn bè và gia đình. Điều này không chỉ giúp tăng số lượng người dùng mà còn nâng cao uy tín và danh tiếng của thương hiệu. Lòng trung thành của khách hàng là yếu tố quan trọng trong việc duy trì và phát triển lâu dài của bất kỳ ứng dụng nào.</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail5}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h2> 3. Các Cách Tối Ưu Hóa Trải Nghiệm Người Dùng Trong Thiết Kế App</h2>
								<h3>Thiết kế giao diện đơn giản và trực quan</h3>
								<p>Để tối ưu hóa trải nghiệm người dùng, thiết kế giao diện ứng dụng cần phải đơn giản và trực quan. Một giao diện gọn gàng với các yếu tố rõ ràng giúp người dùng dễ dàng nhận diện và hiểu cách sử dụng ứng dụng. Việc hạn chế sử dụng quá nhiều màu sắc, biểu tượng và nút bấm phức tạp không chỉ giảm sự rối mắt mà còn tăng cường sự dễ dàng trong việc tương tác.</p>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail6}
									alt="Sự phát triển của công nghệ di động"
								/>
								<p>Giao diện nên tập trung vào việc làm nổi bật các chức năng chính và thông tin quan trọng, tránh sự phân tán và nhầm lẫn. Sử dụng không gian trắng hợp lý và lựa chọn biểu tượng đơn giản sẽ giúp người dùng nhanh chóng tìm thấy những gì họ cần mà không gặp khó khăn. Điều này không chỉ tạo ra một trải nghiệm người dùng mượt mà hơn mà còn tăng tính thẩm mỹ và chuyên nghiệp của ứng dụng, từ đó giữ chân người dùng lâu dài.</p>
								<h3> Đảm bảo tốc độ tải nhanh</h3>
								<p>
									<strong>Tối ưu hóa mã nguồn</strong> giúp giảm thiểu khối lượng dữ liệu cần tải, cải thiện hiệu suất và giảm thiểu lỗi. <strong>Nén hình ảnh </strong>và sử dụng định dạng phù hợp giúp giảm kích thước tệp mà không làm giảm chất lượng. <strong>Tối ưu hóa tài nguyên</strong> như CSS và JavaScript bằng cách loại bỏ mã thừa và sử dụng kỹ thuật tải chậm (lazy loading) cũng giúp cải thiện tốc độ.
								</p>
								<h3>Thiết kế nhất quán</h3>
								<ul>
									<li>
										<strong>Font chữ</strong> nên được sử dụng đồng nhất trong toàn bộ ứng dụng để tạo sự đồng bộ và dễ đọc.
									</li>
									<li>
										<strong>Màu sắc </strong> cần được lựa chọn cẩn thận và sử dụng nhất quán để làm nổi bật các yếu tố quan trọng và tạo ra một phong cách thương hiệu dễ nhận diện.
									</li>
									<li>
										<strong>Bố cục </strong> của các trang và màn hình cũng phải nhất quán, giúp người dùng dễ dàng dự đoán và hiểu cách sử dụng ứng dụng.
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail7}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>Tối ưu hóa cho nhiều thiết bị và kích thước màn hình</h3>
								<ul>
									<li>
										<strong>Thiết kế đáp ứng (responsive design) </strong>là chìa khóa để ứng dụng tự động điều chỉnh giao diện phù hợp với kích thước màn hình của thiết bị.
									</li>
									<li>
										Sử dụng <strong> lưới linh hoạt (flexible grids)</strong> và <strong>hình ảnh có thể thay đổi kích thước (responsive images)</strong> giúp đảm bảo rằng nội dung hiển thị một cách tối ưu trên các thiết bị từ smartphone đến máy tính bảng.{' '}
									</li>
								</ul>
								<p>
									<strong>Kiểm tra trên nhiều thiết bị</strong>là cần thiết để xác định và khắc phục các vấn đề về giao diện và hiệu suất. Đảm bảo rằng tất cả các yếu tố giao diện, như nút bấm và văn bản, đều dễ đọc và dễ sử dụng trên mọi kích thước màn hình.
								</p>
								<h3>Tích hợp phản hồi người dùng</h3>
								<ul>
									<li>
										<strong>Thu thập phản hồi </strong>có thể thực hiện qua nhiều kênh như khảo sát trong ứng dụng, đánh giá và phản hồi từ người dùng, cũng như các cuộc thảo luận trực tiếp. Việc này giúp hiểu rõ hơn về những điểm mạnh và điểm yếu của ứng dụng từ góc độ của người dùng thực tế.
									</li>
									<li>
										<strong>Sử dụng phản hồi</strong> để điều chỉnh và cải tiến ứng dụng là bước tiếp theo quan trọng. Phân tích các phản hồi này để xác định các vấn đề phổ biến, nhu cầu chưa được đáp ứng, và các cơ hội cải thiện. Áp dụng những cải tiến dựa trên phản hồi giúp tăng cường sự hài lòng của người dùng, giảm thiểu sự thất vọng và giữ chân người dùng lâu dài.
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail8}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>Thiết kế cho truy cập dễ dàng</h3>
								<ul>
									<li>
										<strong>Đặt các nút bấm và menu </strong> ở vị trí dễ nhìn và dễ thao tác là rất quan trọng. Các nút nên được bố trí hợp lý và không bị che khuất, giúp người dùng nhanh chóng tìm thấy và sử dụng các chức năng quan trọng mà không phải mất nhiều thời gian tìm kiếm.
									</li>
									<li>
										<strong>Kích thước nút và các yếu tố tương tác </strong> nên được thiết kế đủ lớn để người dùng dễ dàng chạm vào, đặc biệt trên các thiết bị di động có màn hình nhỏ. Đảm bảo rằng các hành động quan trọng, như gửi tin nhắn, lưu trữ dữ liệu, hoặc truy cập các chức năng chính, đều được đặt ở các vị trí thuận tiện và dễ tiếp cận.
									</li>
									<li>
										<strong>Sử dụng các yếu tố thiết kế</strong> như màu sắc tương phản và biểu tượng dễ nhận biết để làm nổi bật các chức năng chính, giúp người dùng dễ dàng phân biệt và thực hiện các thao tác cần thiết.
									</li>
								</ul>

								<h3>Tích hợp hướng dẫn sử dụng và hỗ trợ</h3>
								<ul>
									<li>
										<strong>Cung cấp hướng dẫn sử dụng chi tiết: </strong> Đưa ra các hướng dẫn rõ ràng và dễ hiểu ngay trong ứng dụng, bao gồm hướng dẫn từng bước, video hướng dẫn, và FAQ (câu hỏi thường gặp). Những tài liệu này giúp người dùng nhanh chóng làm quen với các tính năng và chức năng của ứng dụng mà không cần tìm kiếm thông tin bên ngoài.
									</li>
									<li>
										<strong>Tích hợp các tùy chọn hỗ trợ trực tiếp: </strong> Cung cấp các công cụ hỗ trợ như chat trực tiếp, hệ thống gửi yêu cầu hỗ trợ (support ticket), và liên kết đến các trang trợ giúp online. Điều này cho phép người dùng nhận được sự trợ giúp ngay lập tức khi gặp phải vấn đề hoặc có câu hỏi.
									</li>
									<li>
										<strong>Thiết kế các tùy chọn hỗ trợ dễ dàng truy cập: </strong> Đặt các liên kết đến hỗ trợ và hướng dẫn ở các vị trí dễ tìm, như trong menu chính hoặc phần cài đặt. Đảm bảo rằng người dùng có thể nhanh chóng tìm thấy và sử dụng các tùy chọn hỗ trợ khi cần.
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail9}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>Tạo trải nghiệm cá nhân hóa</h3>
								<p>
									<strong>Sử dụng dữ liệu người dùng </strong>để tùy chỉnh nội dung và các tính năng của ứng dụng theo nhu cầu và sở thích cá nhân. Ví dụ, dựa trên lịch sử sử dụng, sở thích, và hành vi của người dùng, ứng dụng có thể hiển thị các gợi ý, nội dung hoặc ưu đãi phù hợp hơn.
								</p>
								<p>
									<strong>Tạo trải nghiệm cá nhân hóa </strong> bằng cách:{' '}
								</p>
								<ul>
									<li>
										<strong>Thông báo và ưu đãi: </strong> Gửi các thông báo và ưu đãi được cá nhân hóa để phù hợp với nhu cầu và thói quen của người dùng.
									</li>
									<li>
										<strong>Cá nhân hóa giao diện: </strong> Điều chỉnh các yếu tố như màu sắc, chủ đề, và layout dựa trên sở thích của người dùng.
									</li>
									<li>
										<strong>Gợi ý và nội dung tùy chỉnh: </strong> Cung cấp các đề xuất, sản phẩm, hoặc dịch vụ dựa trên các hoạt động trước đây của người dùng.
									</li>
								</ul>

								<h3>Sử dụng hình ảnh và đồ họa chất lượng cao</h3>
								<p>
									<strong>Hình ảnh và biểu tượng sắc nét </strong> giúp tạo ấn tượng đầu tiên tốt đẹp và làm cho ứng dụng trông hiện đại và tinh tế. <strong>Đồ họa chất lượng cao</strong> không chỉ làm cho giao diện ứng dụng trở nên hấp dẫn mà còn giúp người dùng dễ dàng nhận diện và tương tác với các yếu tố trên màn hình trong quy trình thiết kế app.
								</p>

								<p>
									{' '}
									<strong>Áp dụng hình ảnh và đồ họa chất lượng cao bằng cách:</strong>{' '}
								</p>
								<ul>
									<li>
										<strong>Chọn màu sắc và thiết kế phù hợp: </strong> Lựa chọn màu sắc và phong cách đồ họa phù hợp với thương hiệu và tạo cảm giác hài hòa trong toàn bộ ứng dụng.
									</li>
									<li>
										<strong>Sử dụng hình ảnh độ phân giải cao: </strong> Đảm bảo rằng tất cả các hình ảnh, biểu tượng và đồ họa đều sắc nét trên mọi loại màn hình và kích thước.
									</li>
									<li>
										<strong>Tối ưu hóa tài nguyên đồ họa: </strong> Nén các tệp hình ảnh và đồ họa để giảm thiểu thời gian tải mà không làm giảm chất lượng.
									</li>
								</ul>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail10}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>Thử nghiệm và cải tiến liên tục</h3>
								<ul>
									<li>
										<strong>Thực hiện các cuộc thử nghiệm A/B </strong> giúp so sánh hiệu quả của các phiên bản khác nhau của ứng dụng, từ đó xác định các yếu tố nào hoạt động tốt nhất và điều chỉnh thiết kế hoặc tính năng tương ứng. Ví dụ, thử nghiệm các phiên bản khác nhau của giao diện người dùng hoặc các tính năng mới để xem phiên bản nào mang lại trải nghiệm tốt hơn.
									</li>
									<li>
										<strong>Khảo sát người dùng </strong> là một công cụ hữu ích để thu thập phản hồi trực tiếp về các tính năng và trải nghiệm của ứng dụng. Điều này giúp xác định các vấn đề hiện tại, nhu cầu chưa được đáp ứng, và cơ hội cải tiến.
									</li>
									<li>
										<strong>Cải tiến liên tục </strong> dựa trên dữ liệu từ các thử nghiệm và khảo sát giúp nâng cao chất lượng khi thiết kế app, tối ưu hóa hiệu suất, và đáp ứng nhu cầu thay đổi của người dùng. Việc duy trì quy trình này không chỉ giúp ứng dụng phát triển mà còn tạo ra trải nghiệm người dùng tốt hơn, giữ cho ứng dụng luôn cập nhật và cạnh tranh trên thị trường.
									</li>
								</ul>
								<h2>4. Quy Trình Thiết Kế App Tại NPH Digital Group</h2>
								<Image
									priority
									width={850}
									style={{ height: 'auto' }}
									src={Detail11}
									alt="Sự phát triển của công nghệ di động"
								/>
								<h3>Bước 1: Thu Thập Thông Tin</h3>
								<ul>
									<li>Đặt câu hỏi, lắng nghe và hiểu rõ nhu cầu của khách hàng.</li>
									<li>Thực hiện cuộc trò chuyện để tìm hiểu về mục tiêu, người dùng mục tiêu và yêu cầu cụ thể của ứng dụng giao hàng.</li>
									<li>Thu thập thông tin về các tính năng cần thiết, giao diện người dùng mong muốn, yêu cầu về hiệu suất và bảo mật. </li>
								</ul>
								<h3>Bước 2: Trao đổi giải pháp</h3>
								<ul>
									<li>Trao đổi về các chức năng cụ thể và đề xuất giải pháp phù hợp.</li>
									<li>Xác định công nghệ sẽ được sử dụng</li>
									<li>Đề xuất các tính năng bổ sung để tối ưu trải nghiệm người dùng. </li>
								</ul>
								<h3>Bước 3: Phân tích và xác nhận</h3>
								<ul>
									<li>Phân tích chi tiết yêu cầu chức năng và xác nhận lại với khách hàng.</li>
									<li>Viết lại yêu cầu chức năng thành các tài liệu chi tiết và rõ ràng.</li>
									<li>Đảm bảo sự đồng ý từ khách hàng về yêu cầu đã đề xuất. </li>
								</ul>
								<h3>Bước 4: Báo giá và hợp động</h3>
								<ul>
									<li>Gửi báo giá cho dự án, bao gồm cả các yêu cầu và tính năng được thỏa thuận.</li>
									<li>Ký hợp đồng với khách hàng và thực hiện tạm ứng (nếu có).</li>
								</ul>
								<h3>Bước 5: Triển khai và cập nhật</h3>
								<ul>
									<li>Phát triển phần mềm theo yêu cầu và thỏa thuận trong hợp đồng.</li>
									<li>Cập nhật tiến độ hàng tuần cho khách hàng.</li>
									<li>Tiến hành kiểm tra và bảo mật dữ liệu. </li>
								</ul>
								<h3>Bước 6: Bàn giao và thử nghiệm</h3>
								<ul>
									<li>Bàn giao từng giai đoạn phát triển cho khách hàng..</li>
									<li>Khách hàng thử nghiệm ứng dụng và đưa ra phản hồi.</li>
								</ul>
								<h3>Bước 7: Phản hồi và chỉnh sửa</h3>
								<ul>
									<li>Nhận phản hồi từ khách hàng và thực hiện các chỉnh sửa nếu cần thiết.</li>
									<li>Đảm bảo rằng ứng dụng đáp ứng được mọi yêu cầu và tiêu chuẩn đã đề ra.</li>
								</ul>
								<h3>Bước 8: Nghiệm thu và bảo hành</h3>
								<ul>
									<li>Bảo hành theo hợp đồng và cung cấp hỗ trợ kỹ thuật cho khách hàng.</li>
									<li>Thực hiện nghiệm thu cuối cùng.</li>
									<li>Thanh toán và ký kết việc hoàn thành dự án. </li>
								</ul>
							</div>
							<div className="blog__detail-tags">
								<p className="sub-title-anim">
									tags: <Link href="/blog">thiết kế app</Link>, <Link href="/blog">UX/UI</Link>,<Link href="/tag">xu hướng 2024</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetails2024;
