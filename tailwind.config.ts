import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"
import { fontFamily } from "tailwindcss/defaultTheme"

import { shadcnPreset } from "./lib/shadcn/shadcn-preset"

const config = {
  presets: [shadcnPreset],
  content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
}

export default config
