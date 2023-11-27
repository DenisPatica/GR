import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/UserRoutes";
import weatherRouter from "./routes/WeatherRoutes";
import { json } from "body-parser";
import UserEntry from "./models/UserEntry";
import {logout} from "./controllers/UsersController";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

const uri = process.env.MONGO_URI || "";

mongoose.connect(uri).then((e) => console.log('nahui', e));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use(json());
app.use("/api/user", userRouter);
app.use("/api/weather", weatherRouter);
export default app;
