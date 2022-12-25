module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mainBg: "#F4F6FC",
      transparent: "transparent",
      current: "currentColor",
      white: "#E9EDF7",
      borderColor: "#E9F5FC",
      iconColor: "#5D888F",
      hoverBg: '#C0C6D4',
      primary: "#0d5c75",
      info: "#A5D1E1",
      default: "#199FB1",
      txtDark: "#262626",
      txtWhite: "#eaeaea",
      Error: "#BB120E",
      Success: "#0B9314",
      Warning: "#EE6619",
    },

    screens: {
      sm: "640px",
      md: "600px",
      lg: "900px",
      xl: "1200px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["IRANSans", "Tahoma", "sans"],
      },
    },
  },
  plugins: [require("tailwindcss-dir")(), require("tailwindcss-rtl")],
};
