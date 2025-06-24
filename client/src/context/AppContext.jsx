import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../lib/axios.js";
import { getUser } from "../services/authService.js";
import { generateImage } from "../services/imageService.js";
import { assets } from "../assets/assets.js";
import { initiatePayment, verifyPayment } from "../services/paymentService.js";
import { loadRazorpayScript } from "../services/loadRazorpay.js";
import {useNavigate } from "react-router-dom";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [image, setImage] = useState(assets.puppy_img);
  const [imageLoading, setImageLoading] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [credit, setCredit] = useState(false);

  const naivgate = useNavigate();

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const userData = await getUser();
      if (userData) {
        setUser(userData);
        setCredit(userData.creditBalance);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const loginUser = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await axios.post(`/auth/login`, {
        email,
        password,
      });
      setUser(response.data.user);
      setCredit(response.data.user.creditBalance);
      setShowLogin(false);
      toast.success(`Welcome back, ${response.data.user.name.split(" ")[0]}`);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false); // Ensures loading state resets regardless of success or failure
    }
  };

  const logoutUser = async () => {
    try {
      const response = await axios.get("/auth/logout");
      setUser(null);
      setCredit(null);
      setShowLogin(false);
      naivgate("/");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Logout failed, please try again."
      );
    }
  };
  const signupUser = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const response = await axios.post(`/auth/signup`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      setUser(response.data.user);
      setCredit(response.data.user.creditBalance);
      setShowLogin(false);
      toast.success(
        `Welcome to imagicon, ${response.data.user.name.split(" ")[0]}`
      );
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateImage = async (prompt) => {
    // setIsImageLoaded(false);
    setImageLoading(true);
    const response = await generateImage(prompt);
    if (response.success) {
      setImage(response.imageURL);
      setCredit(response.creditBalance);
      setIsImageLoaded(true);
      toast.success("Hurray! Image generated succesfully");
    } else {
      console.error(response.message);
      toast.error(response.message, { id: "image-error" });
    }
    setImageLoading(false);
  };

  const handlePayment = async (plan) => {
    console.log("plan", plan);
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
        toast.error("Failed to load Razorpay. Please try again.");
        return;
    }

    const order = await initiatePayment({ price: plan.price });
    if (!order) {
      toast.error("Payment Failed, try again later!");
    }
    console.log(order);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Imagicon",
      description: `Purchase ${plan.credits} credits`,
      order_id: order.orderId,
      handler: async function (response) {
        const paymentDetails = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          userId: user._id,
          credits: plan.credits,
        };

        const verification = await verifyPayment(paymentDetails);

        if (verification?.success) {
          setCredit(verification.updatedCredits); // Update credit balance
          toast.success(
            `Payment successful! You now have ${verification.updatedCredits} credits.`
          );
          naivgate("/");
        } else {
          toast.error("Payment verification failed.");
        }
      },
      theme: { color: "#3399cc" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURL,
    credit,
    setCredit,
    loginUser,
    signupUser,
    getUser,
    loading,
    logoutUser,
    handleGenerateImage,
    image,
    imageLoading,
    setIsImageLoaded,
    isImageLoaded,
    setImage,
    handlePayment,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// We created a custom hook to access the AppContext using useContext
export const useAppContext = () => useContext(AppContext);
