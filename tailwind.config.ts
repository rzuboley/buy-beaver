import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ui: {
          mainBg: "#dcdbdb",
          LeftBarBg: "#f2f2f2",
          text: "#152250"
        },
        chart: {
          green: "#29AB76",
          yellow: "#ffdf81",
          red: "#FF5843"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [nextui()]
}
export default config
