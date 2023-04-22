/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // // // Light Mode // // /
        // Backround
        lbp: "#ffffff",
        lbs: "#f0f0ff",
        lbh: "#1E2022",
        // Action
        lap: "#d5e2f1",
        las: "#e7f0f8",
        // Foreground
        lfp: "#232b39",
        lfs: "#697586",
        lft: "#52565c",

        // Oder
        accent: "#eebc1d",
        daccent: "#c89d14",
        silver: "#949494",

        // // // Dark Mode // // /
        // Backround
        dbp: "#16171a",
        dbs: "#14161A",
        dbt: "#131111",
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
          DEFAULT: "1rem",
          sm: "2rem",
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
};
