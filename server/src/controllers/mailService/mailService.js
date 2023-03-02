require('dotenv').config();
const nodemailer = require('nodemailer');
const ApplicationError = require('../../errors/ApplicationError');

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		});
	}

	async sendMail(to, message) {
		try {
			await this.transporter.sendMail({
				from: process.env.SMTP_USER,
				to,
				subject: 'Information on the offer' + process.env.API_URL,
				text: message,
			});
		} catch (error) {
			throw ApplicationError.MailError('Error sending message', error);
		}
	}
}

module.exports = new MailService();

