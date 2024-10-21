/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
      },
    },
  },
  plugins: [],
};

// outline button variant
// bg = "bg-transparent text-primary border-primary border-[1px] hover:bg-primary hover:text-white";
