import axios from "../lib/axios";
import toast from "react-hot-toast";

export const initiatePayment = async ({ price }) => {
    try {
        const response = await axios.post("/payment/create-order", { price });
        return response.data;
    } catch (error) {
        console.error("Payment Error: ", error.response?.data?.message || "Payment Failed");
        toast.error("Payment Failed, try again later!");
        return null;
    }
}


export const verifyPayment = async (paymentDetails) => {
    try {
        const response = await axios.post("/payment/verify-payment", paymentDetails);
        return response.data;
    } catch (error) {
        console.error("Verification Error:", error.response?.data?.message || "Verification failed");
        toast.error("Payment verification Failed, try again later!");
        return null;
    }
}