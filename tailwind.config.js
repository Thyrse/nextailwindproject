// tailwind.config.js
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
                sans: ['var(--font-montserrat)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};