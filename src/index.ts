import * as dotenv from "dotenv";
dotenv.config();
import { app } from "./app";

app.listen(4000, () => {
  console.log("Listening at port 4000");
});
