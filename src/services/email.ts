import { transporter, mailOptions } from "../lib/nodemailer";

export async function sendEmail(email: string) {
  return await transporter.sendMail(mailOptions(email));
}
