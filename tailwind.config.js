/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "onedark-crust": "#1E2227",
        "onedark-base": "#21252B",
        "onedark-mantle": "#323842",
        "onedark-text": "#F6F7F9",
        "onedark-red": "#E06C75",
        "onedark-green": "#98C379",
        "onedark-yellow": "#E5C07B",
        "onedark-blue": "#61AFEF",
        "onedark-purple": "#C678DD",
        "onedark-fountainblue": "#56B6C2",
        "onedark-gray": "#ABB2BF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#E06C75",
          "secondary": "#61AFEF",
          "accent": "#98C379",
          "neutral": "#ABB2BF",
          "base-100": "#21252B",
          "info": "#61AFEF",
          "success": "#98C379",
          "warning": "#E5C07B",
          "error": "#E06C75",
        },
      },
    ],
  },
};
