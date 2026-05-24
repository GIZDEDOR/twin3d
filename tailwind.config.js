/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'mask': 'mask-position',
        'svg': 'transform, opacity'
      },
      fontFamily: {
        sans: ["var(--font-drukcyr)", "sans-serif"],
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "gradient-x": {
      "0%, 100%": { backgroundPosition: "0% center" },
      "50%": { backgroundPosition: "100% center" },
    },
      },
      animation: {
        "slide-left": "slide-left 3s linear infinite",
        "spin-slow": "spin 6s linear infinite",
        "gradient-x": "gradient-x 5s ease infinite"
      },
    },
  },
};