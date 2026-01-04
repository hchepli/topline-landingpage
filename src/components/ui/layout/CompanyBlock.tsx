import { CompanyIntro } from "./CompanyIntro"
import { CompanyFeatureGrid } from "./CompanyFeatureGrid"

export function CompanyBlock({
  company,
  index,
}: {
  company: any
  index: number
}) {
  return (
    <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
      <CompanyIntro company={company} index={index} />
      <CompanyFeatureGrid cards={company.cards} />
    </div>
  )
}
