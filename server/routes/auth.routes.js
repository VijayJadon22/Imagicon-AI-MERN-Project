import express from "express";
import { login, signup, userCredits } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

router.get('/credits', protectRoute, userCredits);


export default router;