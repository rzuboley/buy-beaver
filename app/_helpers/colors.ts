import resolveConfig from "tailwindcss/resolveConfig"
import config from "../../tailwind.config"

const fullConfig = resolveConfig(config)

export const { colors } = fullConfig.theme
