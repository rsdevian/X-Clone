import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            "light",
            {
                black: {
                    primary: "rgb(29, 155, 240)", // blue
                    secondary: "rgb(24, 24, 24)", // dark bg
                    accent: "#1f1f1f",
                    neutral: "#111111",
                    "base-100": "#000000", // <-- main background
                    info: "#3abff8",
                    success: "#36d399",
                    warning: "#fbbd23",
                    error: "#f87272",
                },
            },
        ],
    },
};
