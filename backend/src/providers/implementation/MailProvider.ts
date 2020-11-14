import { IMailProvider, IEmail } from '../IMailProvider'
import nodemailer from 'nodemailer'

export class MailProvider implements IMailProvider {
  async sendEmail(email: IEmail): Promise<void> {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })

    await transport.sendMail(email)
  }
}
