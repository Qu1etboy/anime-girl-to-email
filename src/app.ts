import express, { Request, Response } from "express";
import { sendEmail } from "./services/email";

export const app = express();
app.use(express.json());

app.post("/sendEmail", async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const info = await sendEmail(email);

    res.status(201).send(info.response);
  } catch (err) {
    res
      .status(500)
      .send("There was an error sending an email please try again.");
  }
});

app.listen(4000, () => {
  console.log("Listening at port 4000");
});
