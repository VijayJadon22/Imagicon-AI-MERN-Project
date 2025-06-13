import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    creditBalance: {
        type: Number,
        default: 5
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;