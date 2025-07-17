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

// Replace with your actual Vercel frontend URL
const allowedOrigins = [
  "http://localhost:5173",             // local frontend dev
  "http://localhost:5000",             // local backend direct call (optional)
  "https://your-vercel-domain.vercel.app"  // your deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies if used
}));

app.use("/api/auth", authRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    connectToDB();
})