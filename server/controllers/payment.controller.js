import User from "../models/user.model.js";
import  {razorpay}  from "../utils/razorpay.js";
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

        const order = await razorpay.orders.create(options); // Create Razorpay order
        return res.status(200).json({ success: true, orderId: order.id, amount: order.amount }); // Send order ID to frontend
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const verifyRazorpayPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, credits } = req.body;
        // console.log(`razorpay_order_id: ${razorpay_order_id}, razorpay_payment_id: ${razorpay_payment_id}, razorpay_signature: ${razorpay_signature}, userId: ${userId}, credits: ${credits}`)

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (generatedSignature === razorpay_signature) {

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            user.creditBalance += credits;
            await user.save();

            return res.status(200).json({
                success: true,
                message: "Payment verified & credits added successfully",
                updatedCredits: user.creditBalance,
            });

        } else {
            return res.status(400).json({ error: "Payment verification failed" });
        }

    } catch (error) {
        console.error("Error verifying Razorpay payment:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


