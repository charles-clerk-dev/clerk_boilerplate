import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Locale, i18n } from "@/i18n.config"
import { ClerkProvider } from "@clerk/nextjs"

import Header from "./components/Navbar/Navbar"
import { ThemeProvider } from "./components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <ClerkProvider>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header lang={params.lang} />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
