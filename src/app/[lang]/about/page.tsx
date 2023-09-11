import { Locale } from "@/i18n.config"
import { getDictionary } from "@/src/lib/dictionary"
import { UserButton } from "@clerk/nextjs"

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className="py-24">
      <div className="container">
        <h1>Protected Page, you need to be logged in!</h1>
        <h1 className="text-3xl font-bold">{page.about.title}</h1>
        <p className="text-gray-500">{page.about.description}</p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </section>
  )
}
