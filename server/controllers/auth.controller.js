import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/auth.js";


export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists", success: false });

        const user = await User.create({ name, email, password });
        generateTokenAndSetCookie(user, res);

        return res.status(201).json({
            success: true,
            user: { name: user.name, email: user.email },
            message: "User registered successfully"
        });
    } catch (error) {
        console.error("Signup Error:", error.message);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "All fields are required", success: false });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User does not exist", success: false });
        
        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials", success: false });
        }

        generateTokenAndSetCookie(user, res);

        return res.status(200).json({
            success: true,
            user: { name: user.name, email: user.email },
            message: "User logged in successfully"
        });

    } catch (error) {
        console.error("Login Error:", error.message);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
}
export const logout = async (req, res) => {
    try {

    } catch (error) {

    }
}