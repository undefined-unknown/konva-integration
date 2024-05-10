/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}",
    "./node_modules/@xpix-editor/presets/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}",
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
