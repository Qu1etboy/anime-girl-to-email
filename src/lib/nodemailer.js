const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = (email) => ({
  from: process.env.EMAIL,
  to: email,
  subject: "Purchase successful",
  html: `
  <main style="width: 100%; max-width: 672px; margin: 0 auto;">
    <h1>Thank you for purchased the product from us</h1>
    <h2>Your product is being delivery</h2>
    <div style="border: 1px solid black; border-radius: 0.375rem; padding: 1.25rem;">
      <img style="width: 100%;" src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="macbook pro" />
      <h3>Macbook Pro</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, neque in consectetur pulvinar, tellus ligula accumsan urna, eget ultrices felis diam id odio. Maecenas efficitur rhoncus viverra. Vivamus scelerisque lacus sed ipsum pharetra, id malesuada sapien rhoncus. Sed purus dolor, porttitor nec interdum eget, volutpat efficitur nisl.</p>
      <button>View Detail</button>    
    </div>
  </main>
  `,
});

module.exports = { transporter, mailOptions };
