import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand:"#0F4C81", brandDark:"#0C1B2A", brandLight:"#E6F0FA", accent:"#1F7A1F" },
      boxShadow: { soft: "0 10px 20px -10px rgba(0,0,0,.15)" },
      borderRadius: { xl:"0.9rem","2xl":"1.2rem","3xl":"1.6rem" }
    },
  },
  plugins: [],
};
export default config;
