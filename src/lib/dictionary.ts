import "server-only"
import type { Locale } from "@/i18n.config"

const dictionaries = {
  en: () =>
    import("@/src/dictionaries/en.json").then((module) => module.default),
  kr: () =>
    import("@/src/dictionaries/kr.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
