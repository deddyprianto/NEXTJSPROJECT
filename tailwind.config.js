module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        16: "100px 1fr",
      },
      fontFamily: {
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
