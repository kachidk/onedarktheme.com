/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "onedark-black": "#282C34",
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
          "primary": "#61AFEF",
          "secondary": "#C678DD",
          "accent": "#98C379",
          "neutral": "#ABB2BF",
          "base-100": "#282C34",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
