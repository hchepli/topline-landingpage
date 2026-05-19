import { SectionHeader } from "../ui/layout/SectionHeader"
import { CompanyBlock } from "../ui/layout/CompanyBlock"
import { companies } from "../../data/companies"


export function CompanyShowcaseSection() {
  return (
    <section aria-labelledby="empresas-title" className="empresas flex mx-auto max-w-7xl px-6 flex-col gap-24 pt-20 lg:min-h-screen lg:gap-32 lg:pt-24">
      <SectionHeader
      id="empresas-title"
        title="Grupo TF"
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
  )
}
