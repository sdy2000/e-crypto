/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // // // Light Mode // // /
        // Backround
        lbp: "#ffffff",
        lbs: "#f0f0ff",
        lbt: "#d2d2d2",
        // Action
        lap: "#d5e2f1",
        las: "#e7f0f8",
        // Foreground
        lfp: "#232b39",
        lfs: "#697586",
        lft: "#52565c",

        // Oder
        gold: "#eebc1d",
        dgold: "#c89d14",
        silver: "#949494",
        dsilver: "#6c6c6c",
        blue: "#375fd9",
        lblue: "#6188ff",

        // // // Dark Mode // // /
        // Backround
        dbp: "#16171a",
        dbs: "#14161A",
        dbt: "#323546",
        // Action
        dap: "#d5e2f1",
        das: "#2a2a2a",
        // Foreground
        dfp: "#edf2f7",
        dfs: "#ccd6e0",
        dft: "#a0aec0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.25rem",
          sm: "0.5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        xs: "550px",
        // => @media (min-width: 550px) { ... }

        sm: "650px",
        // => @media (min-width: 650px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
