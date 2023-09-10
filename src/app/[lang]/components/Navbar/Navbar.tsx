import Link from "next/link"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/src/lib/dictionary"

import { ThemeToggle } from "../Header/ThemeToggle"
import LocaleSwitcher from "../locale-switcher"

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
        <ThemeToggle />
      </nav>
    </header>
  )
}
