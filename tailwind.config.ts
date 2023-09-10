import { shadcnPreset } from "./lib/shadcn/shadcn-preset"

const config = {
  presets: [shadcnPreset],
  content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
}

export default config
