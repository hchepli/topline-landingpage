import { CompanyIntro } from "./CompanyIntro"
import { CompanyFeatureGrid } from "./CompanyFeatureGrid"
import { Company } from "../../../types/company"

export function CompanyBlock({
  company,
  index,
}: {
  company: Company
  index: number
}) {
  return (
    <article
      className="flex w-full flex-col items-center gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-20"
      aria-labelledby={`company-${company.name}-title`}
    >
      <CompanyIntro
        company={company}
        index={index}
        titleId={`company-${company.name}-title`}
      />

      <CompanyFeatureGrid company={company} />
    </article>
  )
}
