/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#e8c065",
        "custom-background": "#080e17",
      },
    },
  },
  plugins: [],
};
