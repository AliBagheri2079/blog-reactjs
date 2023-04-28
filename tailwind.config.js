/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  /* NOTE: This Option Part of Combining Tailwind with MUI */
  important: "#root",
  theme: {
    extend: {
      /* NOTE: Add Many Custom Utility Fonts */
      fontFamily: {
        "slussen-semibold-trial": ["slussen-semibold-trial", "sans-serif"],
        "slussen-trial": ["slussen-trial", "sans-serif"],
        "slussen-stencil-semibold-trial": [
          "slussen-stencil-semibold-trial",
          "serif",
        ],
        "slussen-stencil-trial": ["slussen-stencil-trial", "serif"],
      },
      /* NOTE: Add Many Custom Utility Colors */
      colors: {
        lenis: {
          // light: "",
          DEFAULT: "#ff98a2",
          // dark: "",
        },
      },
    },
  },
  corePlugins: {
    /*
    ! Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    ! Remove Tailwind CSS's aspectRatio style so it can use the @tailwindcss/aspect-ratio (Tailwind Plugin).
    */
    preflight: false,
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
