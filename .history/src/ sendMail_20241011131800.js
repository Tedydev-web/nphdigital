const nodemailer = require('nodemailer');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { name, email, phone, subject, message } = req.body;

		// Cấu hình transporter cho Nodemailer
		let transporter = nodemailer.createTransport({
			service: 'gmail', // Hoặc dịch vụ email khác
			auth: {
				user: 'Hieudat2310.bh@gmail.com', // Thay bằng email của bạn
				pass: 'DongHieuDat@231005', // Thay bằng mật khẩu email của bạn
			},
		});

		// Cấu hình email
		let mailOptions = {
			from: email,
			to: 'hieudat2310.bh@gmail.com', // Thay bằng email nhận
			subject: `New message from ${name}: ${subject}`,
			text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
		};

		// Gửi email
		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ message: 'Email sent successfully' });
		} catch (error) {
			res.status(500).json({ error: 'Error sending email' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
