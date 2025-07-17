import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";

import { connectToDB } from "./config/connectToDB.js";
import authRoutes from "./routes/auth.routes.js";
import imageRoutes from "./routes/image.routes.js";
import paymentRoutes from "./routes/payment.routes.js";


const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true // ✅ Allow sending cookies
}));

app.use("/api/auth", authRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    connectToDB();
})