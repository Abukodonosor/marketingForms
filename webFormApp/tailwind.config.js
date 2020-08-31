module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "salestrekker-background": "#f8f8f8",
        "salestrekker-font": "#666",
        "salestrekker-button": "#58acf6",
        "salestrekker-button-hover": "#2096f3",
      },
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          color: config("theme.colors.salestrekker-font"),
          backgroundColor: config("theme.colors.white"),
        },
        "@screen dark": {
          body: {
            color: "white",
            backgroundColor: "black",
          },
        },
      });
    },
  ],
};
