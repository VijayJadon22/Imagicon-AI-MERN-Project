
export const generateTokenAndSetCookie = (user, res) => {

    const token = user.generateToken(user._id);

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensures cookie security in production
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    }
    res.cookie("token", token, options);
}