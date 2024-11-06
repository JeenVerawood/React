/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: { // แก้ไขจาก ; เป็น :
              title: ["Poppins", "sans-serif"],
          },
      },
  },
  plugins: [require('daisyui')],
};
