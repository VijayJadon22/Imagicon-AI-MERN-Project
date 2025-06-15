import axios from "axios";
import User from "../models/user.model.js";
import { OpenAI } from "openai";

const client = new OpenAI({
    baseURL: 'https://api.studio.nebius.com/v1/',
    apiKey: process.env.NEBIUS_API_KEY || "dummy_api"
});


export const generateImage = async (req, res) => {
    try {
        const userId = req.user._id;
        const { prompt } = req.body;
        console.log(prompt);
        console.log("API KEY", process.env.NEBIUS_API_KEY);

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required"
            });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist"
            });
        }

        if (user.creditBalance <= 0) {
            return res.status(400).json({ success: false, message: "Insufficient Credits, Buy More Credits", creditBalance: user.creditBalance });
        }

        //if creditBalance is available then we will generate image using Nebius AI which will let use generate image using FLUX

        // Generate image using Nebius AI
        // console.log("Generating image...");

        const response = await axios.post(
            'https://api.studio.nebius.com/v1/images/generations',
            {
                model: "black-forest-labs/flux-schnell",
                prompt: prompt.trim(),
                size: "1024x1024",
                response_format: "b64_json",
                n: 1
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.NEBIUS_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // console.log("Image generated successfully with axios");
        const imageData = response.data.data[0].b64_json;

        const imageUrl = `data:image/png;base64,${imageData}`; //convert base_64 image into url

        user.creditBalance -= 1;
        await user.save();

        // console.log("Image generated:", imageUrl);

        return res.status(200).json({
            success: true,
            message: "Image Generated successfully",
            creditBalance: user.creditBalance,
            imageURL: imageUrl
        })

    } catch (error) {
        console.error("Error in generateImage controller:", error.message);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
}