import imagiconLogo from "./draw.png";
import creditStar from "./credit_star.svg";
import profileIcon from "./profile_icon.png";
import girl_image from "./girl_ai_image.jpg";
import stepIcon1 from "./step_icon_1.svg";
import stepIcon2 from "./step_icon_2.svg";
import stepIcon3 from "./step_icon_3.svg";
import ai_boy_image from "./ai_boy_image.avif";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import ratingStar from "./rating_star.svg";
import facebook_icon from "./facebook_icon.svg";
import insta_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import doremon from "./doremon_image.jpg";
import puppy_img from "./puppy.jpg"
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import cross_icon from "./cross_icon.svg";





export const assets = {
    imagiconLogo,
    creditStar,
    profileIcon,
    girl_image,
    ai_boy_image,
    ratingStar,
    facebook_icon,
    insta_icon,
    twitter_icon,
    doremon,
    puppy_img,
    email_icon,
    lock_icon,
    cross_icon,


}



export const stepsData = [
    {
        icon: stepIcon1,
        title: "Describe Your Vision",
        description:
            "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    },
    {
        icon: stepIcon2,
        title: "Watch the Magic",
        description:
            "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
    },
    {
        icon: stepIcon3,
        title: "Download & Share",
        description:
            "Instantly download your creation or share it with the world directly from our platform.",
    },
];

export const testimonialsData = [
    {
        image: profile_img_1,
        name: "Sophia Martinez",
        role: "UI/UX Designer",
        stars: 5,
        text: `This AI-powered design tool has completely transformed my workflow. The precision and creativity it offers are unmatched!`
    },
    {
        image: profile_img_2,
        name: "Daniel Roberts",
        role: "Freelance Illustrator",
        stars: 4,
        text: `I've been using this platform for my projects, and it's incredibly helpful. The AI-generated images are stunning and save me so much time!`
    },
    {
        image: profile_img_1,
        name: "Aisha Patel",
        role: "Marketing Strategist",
        stars: 5,
        text: `Absolutely amazing! This tool helped me create engaging visuals for my campaigns effortlessly. Highly recommended!`
    }
];

export const subscriptionPlan = [
    {
        "id": "Basic",
        "price": "$10",
        "credits": 100,
        "desc": "Best for personal use."
    },
    {
        "id": "Advanced",
        "price": "$50",
        "credits": 500,
        "desc": "Best for business use."
    },
    {
        "id": "Business",
        "price": "$250",
        "credits": 5000,
        "desc": "Best for enterprise use."
    }
]



