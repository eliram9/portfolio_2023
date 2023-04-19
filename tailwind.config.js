/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{js,ts,jsx,tsx}" ],
    theme: {
        extend: {
            fontFamily: {
                dosis: ["Dosis", "sans-serif"],
            },
            colors: {
                dark: "#3d3f3a",
                light: "#f5f5f5",
                gold: "#d29829",
                primary: "#B63E96", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            }
        },
    },
    plugins: [],
}
