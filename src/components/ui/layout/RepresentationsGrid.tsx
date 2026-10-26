import { SectionHeader } from "./SectionHeader"
import { CompanyCard } from "../CompanyCard"
import type { Company } from "../../../data/companies"

type RepresentationsGridProps = {
  companyName: string
  representations: Company[]
}

export function RepresentationsGrid({
  companyName,
  representations,
}: RepresentationsGridProps) {
  if (representations.length === 0) return null

  return (
    <div className="flex flex-col gap-10">
      <SectionHeader
        id="representacoes-title"
        title={`Marcas representadas pela ${companyName}`}
        description={`Conheça as marcas que a ${companyName} representa no mercado.`}
      />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {representations.map((company) => (
          <li key={company.target}>
            <CompanyCard company={company} />
          </li>
        ))}
      </ul>
    </div>
  )
}