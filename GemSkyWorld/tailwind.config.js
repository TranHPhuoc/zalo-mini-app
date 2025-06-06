module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--zmp-primary-color)",
        gray: "#767A7F",
        divider: "#E9EBED",
        green: "#288F4E",
        background: "#ffffff",
        skeleton: "rgba(0, 0, 0, 0.1)",
        brown_id: "#9f583e",
      },
      fontFamily: {
        tinhHoaHoiTu: ["Cormorant Garamond", "serif"],
        content: ["Josefin Sans", "sans-serif"],
      },
    },
  },
};
