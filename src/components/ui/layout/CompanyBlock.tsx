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
    <div className="flex w-full flex-col items-center gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-20">
      <CompanyIntro company={company} index={index} />
      <CompanyFeatureGrid company={company} />
    </div>
  )
}
