import express, { Request, Response } from "express";
import { sendEmail } from "./services/email";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.post("/sendEmail", async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);
  try {
    const info = await sendEmail(email);

    res.status(201).send(info.response);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("There was an error sending an email please try again.");
  }
});
