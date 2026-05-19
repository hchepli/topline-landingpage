import { SectionHeader } from "../components/ui/layout/SectionHeader"
import { CompanyBlock } from "../components/ui/layout/CompanyBlock"
import { companies } from "../data/companies"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"


export function Companies() {
  return (
    <>
    <Header />
    <section aria-labelledby="empresas-title" className="empresas flex mx-auto max-w-7xl px-6 flex-col gap-24 pt-20 min-h-screen lg:gap-32 lg:py-24">
      <SectionHeader
      id="empresas-title"
        title="Empresas que fazem parte da nossa história"
        description="Conheça as empresas que fazem parte do nosso ecossistema."
      />

      <ul className="flex flex-col gap-24 lg:gap-32">
  {companies.map((company, index) => (
    <li key={company.name}>
      <CompanyBlock company={company} index={index} />
    </li>
  ))}
</ul>

    </section>
    <Footer />
    </>
  )
}
