/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        okamed: {
          blue: "#2970A3",
        },
      },
      boxShadow: {
        'soft-xl': '0 10px 30px rgba(16,24,40,0.08)'
      }
    },
  },
  plugins: [],
};