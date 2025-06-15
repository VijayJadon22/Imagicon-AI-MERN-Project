import express from "express";
import { generateImage } from "../controllers/image.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/generate-image", protectRoute, generateImage);

export default router;