module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans, sans"],
      },
      animation: {
        fade: "fadeOut 500ms ease-in-out",
      },

      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.gray.900") },
          "100%": { backgroundColor: theme("colors.black/50") },
        },
      }),
    },
  },
  plugins: [],
};
