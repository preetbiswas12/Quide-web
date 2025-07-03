import {
    EyeOff,
    Sparkle,
    BellOff,
    Command,
    Monitor
} from "lucide-react";

export const FEATURES = [
    {
        title: "Screen Sharing ",
        description: "Quide is completely invisible to screen recording software,making it perfect for short term interviews,Quizzes",
        icon: Monitor,
        image: "/images/feature-two.svg",
    },
    {
        title: "Active Tab Detection",
        description: "Toggle the appliaction window without your cursor losing focus",
        icon: Command,
        image: "/features/SVG3.png",
    },
    {
        title: "Solution Reasoning",
        description: "Each and every solution is explained in detailed by Gemini 2.5 Flash which is reliable for heavy use.",
        icon: Sparkle,
        image: "/features/SVG.png",
    },
    {
        title: "Monitoring",
        description: "Move the overlay window around the window to avoid eye detection and also to avoid detection by screen recording software.",
        icon: EyeOff,
        image: "/images/feature-four.svg",
    },
    {
        title: "Silent Execution",
        description: ".vbs Keeps the window away from focus even in the Task Manager with the help of Gemini 2,5 flash.",
        icon: BellOff,
        image: "/features/Mask.png",
    }
]