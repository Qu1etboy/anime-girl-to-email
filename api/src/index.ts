import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
import { app } from "./app";

app.listen(4000, () => {
  console.log("Listening at port 4000");
});
