import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const mailOptions = (email: string) => ({
  from: process.env.EMAIL,
  to: email,
  subject: "Here is your anime girl picture.",
  html: `
  <main>
    <h1>Thank you for using our service!</h1>
    <img src="cid:${email}" style="width:720px;"/>
  </main>
  `,
  attachments: [
    {
      filename: "anime.png",
      path: "https://pic.re/image",
      cid: email, //same cid value as in the html img src
    },
  ],
});
