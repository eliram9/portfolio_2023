/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{js,ts,jsx,tsx}" ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                dosis: ["Dosis", "sans-serif"],
            },
            colors: {
                lightDark: "#5c5e58",
                dark: "#3d3f3a",
                light: "#f5f5f5", 
                gray: "#E7E5E4",
                gold: "#d29829",
                primary: "#B63E96", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            },
            animation: {
                'spin-slow': 'spin 6s linear infinite',
            }
        },
        screens: {
            "2xl": { min: "1535px" },
            // @media (max-width: 1535px) { ... }

            "xl2": { min: "1280px" },
            // @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // @media (max-width: 1279px) { ... }
        
            lg: { max: "1023px" },
            // @media (max-width: 1023px) { ... }
        
            md: { max: "767px" },
            // @media (max-width: 767px) { ... }
        
            sm: { max: "639px" },
            // @media (max-width: 639px) { ... }
        
            xs: { max: "479px" },
            // @media (max-width: 479px) { ... }
        },
    },
    plugins: [],
}

