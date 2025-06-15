import express from "express";
import { getUser, login, logout, signup, userCredits } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

router.get('/user', protectRoute, getUser);
router.get('/credits', protectRoute, userCredits);
router.get('/logout', protectRoute, logout);


export default router;