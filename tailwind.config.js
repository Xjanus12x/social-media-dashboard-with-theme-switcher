/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          youtube: "hsl(348, 97%, 39%)",
        },
        instagram: {
          from: "hsl(37, 97%, 70%)",
          to: "hsl(329, 70%, 58%)",
        },
        theme: {
          toggleLightClr: "hsl(230, 22%, 74%)",
          dashboardClr: "hsl(var(--dashboard-bg-clr))",
          topPattern: "hsl(var(--top-pattern-clr))",
          cardClr: "hsl(var(--card-bg-clr))",
          textClr1: "hsl(var(--text-clr-1))",
          textClr2: "hsl(var(--text-clr-2))",
          hoverClr: "hsl(var(--hover-clr))",
        },
      },
      backgroundImage: {
        toggleDarkClr:
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
};
