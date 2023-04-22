/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // // // Light Mode // // /
        // Backround
        //
        // Action
        //
        // Foreground
        //
        //
        // Oder
        //
        //
        // // // Dark Mode // // /
        // Backround
        //
        // Action
        //
        // Foreground
        //
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
