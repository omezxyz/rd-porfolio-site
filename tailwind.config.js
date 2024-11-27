 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        icon1: "iconMovement 6s ease-in-out infinite",
        icon2: "iconMovement 7s ease-in-out infinite",
        icon3: "iconMovement 5s ease-in-out infinite",
        icon4: "iconMovement 6.5s ease-in-out infinite",
        icon5: "iconMovement 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        iconMovement: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: 0.3,
          },
          "50%": {
            transform: "translateY(-30px) rotate(180deg)",
            opacity: 0.6,
          },
        },
      },
    },
    
  },

    plugins: [],
  };
  
