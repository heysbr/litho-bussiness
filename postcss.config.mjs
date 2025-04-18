const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        
        customFooter: "#262B35",
        customPink: {
          light: "#FFD1DC",
          DEFAULT: "#FF69B4",
          dark: "#C71585",
        },
        customGray: "#1A202C",
      },
    },
  },
};

export default config;
