import { Company } from "../../../types/company"
import { NavCTA } from "../buttons/NavCTA"

export function CompanyIntro({
  company,
  titleId,
}: {
  company: Company
  index: number
  titleId: string
}) {
  return (
    <div className="w-full rounded-3xl bg-muted/40 p-8 lg:p-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        {/* Logo em destaque */}
        <div className="flex shrink-0 items-center justify-center rounded-2xl bg-white p-8 shadow-sm lg:w-64">
          <img
            src={company.image}
            alt={`Logo da ${company.name}`}
            className="h-16 w-auto object-contain lg:h-20"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--brand-secondary))]">
            Empresa parceira CHP Smart
          </span>

          <h1
            id={titleId}
            className="text-3xl font-bold leading-tight text-primary lg:text-4xl"
          >
            {company.name}
          </h1>

          <p className="max-w-2xl text-justify leading-relaxed text-muted-foreground">
            {company.description}
          </p>

          <div className="pt-2">
            <NavCTA title={company.buttonLabel} href={company.href} />
          </div>
        </div>
      </div>
    </div>
  )
}