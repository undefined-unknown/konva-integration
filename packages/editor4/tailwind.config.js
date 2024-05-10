/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@library/components/dist/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      "slate-700": "#303030",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#1668DC",
          "base-100": "#141414",
          "base-content": "#DCDCDC",
        },
      },
    ],
  },
};
