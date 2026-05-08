/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#172554"
        },

        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b"
        }
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ],

        display: [
          "Space Grotesk",
          "sans-serif"
        ]
      },

      maxWidth: {
        "8xl": "90rem"
      },

      boxShadow: {
        soft:
          "0 10px 30px rgba(0,0,0,0.06)",

        glow:
          "0 0 40px rgba(59,130,246,0.12)"
      },

      backdropBlur: {
        xs: "2px"
      },

      borderRadius: {
        "4xl": "2rem"
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },

          "50%": {
            transform: "translateY(-10px)"
          }
        },

        pulseGlow: {
          "0%, 100%": {
            opacity: "0.6"
          },

          "50%": {
            opacity: "1"
          }
        },

        gridMove: {
          "0%": {
            transform: "translateY(0px)"
          },

          "100%": {
            transform: "translateY(40px)"
          }
        }
      },

      animation: {
        float: "float 6s ease-in-out infinite",

        pulseGlow:
          "pulseGlow 4s ease-in-out infinite",

        gridMove:
          "gridMove 10s linear infinite"
      }
    }
  },

  plugins: []
};
