import express, { Request, Response } from "express";

import { transporter, mailOptions } from "./lib/nodemailer";

export const app = express();
app.use(express.json());

app.post("/sendEmail", (req: Request, res: Response) => {
  const { email } = req.body;

  transporter.sendMail(mailOptions(email), function (error, info) {
    if (error) {
      console.log(error);
      res
        .status(500)
        .send("There was an error when sending an email please try again");
    } else {
      res.status(201).send("Email sent: " + info.response);
    }
  });
});

app.listen(4000, () => {
  console.log("Listening at port 4000");
});
