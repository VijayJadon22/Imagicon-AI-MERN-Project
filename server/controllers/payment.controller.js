import User from "../models/user.model.js";
import { razorpay } from "../utils/razorpay.js";
import crypto from "crypto";

export const createRazorpayOrder = async (req, res) => {
    try {
        const { price } = req.body;

        const options = {
            amount: price * 100, // Convert amount to paisa
            currency: "INR",
            receipt: `receipt_${Date.now()}`, // Unique ID for tracking
            payment_capture: 1, // Auto-capture payment
        };

        const order = await razorpayInstance.orders.create(options); // Create Razorpay order
        return res.status(200).json({ success: true, orderId: order.id, amount: order.amount }); // Send order ID to frontend
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


