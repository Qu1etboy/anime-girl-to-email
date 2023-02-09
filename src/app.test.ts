import request from "supertest";
import { app } from "./app";
import { sendEmail } from "./services/email";
import * as dotenv from "dotenv";
dotenv.config();

const sendMailMock = jest.fn();

// mock sendEmail function
jest.mock("./services/email");

const sendEmailMock = sendEmail as jest.Mock;
sendEmailMock.mockReturnValue(sendMailMock);

describe("POST /sendEmail", () => {
  it("should sent an email", async () => {
    const res = await request(app)
      .post("/sendEmail")
      .send({ email: "weerawong.v@ku.th" })
      .set("Accept", "application/json");

    expect(res.status).toBe(201);
    expect(sendEmailMock).toHaveBeenCalled();
  });
});
