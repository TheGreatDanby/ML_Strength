/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        theme01: {
          "primary": "#2d3143",
          "secondary": "#4b5f77",
          "accent": "#c0c0c0",
          "neutral": "#ff7c47",
          "base-100": "#ffffff",
          "info": "#8fd6f7",
          "success": "#a3f1e2",
          "warning": "#f7de78",
          "error": "#ec8391",
        },
      },
      {
        theme02: {
          "primary": "#6A994E",
          "secondary": "#A7C957",
          "accent": "#386641",
          "neutral": "#F2E8CF",
          "base-100": "#BC4749",
          "info": "#8fd6f7",
          "success": "#a3f1e2",
          "warning": "#f7de78",
          "error": "#ec8391",
        },
      },
      {
        theme03: {
          "primary": "#E8ECEF",
          "secondary": "#aacdf1",
          "accent": "#6a95ba",
          "neutral": "#304a77",
          "base-100": "#FFFFFF",
          "info": "#8fd6f7",
          "success": "#a3f1e2",
          "warning": "#f7de78",
          "error": "#ec8391",
        },
      },
    ],
  },

  plugins:
    [require("daisyui"), ('@tailwindcss/forms'),]

  ,
}
