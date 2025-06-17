import axios from "../lib/axios.js";
export const generateImage = async ({ prompt }) => {
    try {
        const response = await axios.post(`/image/generate-image`, { prompt });
        return response.data;
    } catch (error) {
        console.error("Image Generation Error:", error.response?.data?.message || error.message);
        return { success: false, message: error.response?.data?.message || "Failed to generate image, please try again." };
    }
}