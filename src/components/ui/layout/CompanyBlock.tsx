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
    <div className="flex w-full flex-col items-center gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-20">
      <CompanyIntro company={company} index={index} />
      <CompanyFeatureGrid cards={company.cards} />
    </div>
  )
}
