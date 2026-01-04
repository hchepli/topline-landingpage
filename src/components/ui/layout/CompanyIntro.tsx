import { Reveal } from "../../animations/Reveal"
import { NavCTA } from "../../ui/buttons/NavCTA"

export function CompanyIntro({
  company,
  index,
}: {
  company: any
  index: number
}) {
  return (
    <Reveal direction="left" delay={0.2 + index * 0.2}>
      <div   className={`${company.target} scroll-mt-28 flex w-full flex-col items-start gap-3 lg:gap-4`}>
        <h3 className="text-xl font-semibold border-b-2 border-[rgb(var(--brand-secondary))] lg:text-2xl">
          {company.name}
        </h3>

        <p className="max-w-md text-sm text-neutral-500 lg:text-base">
          {company.description}
        </p>

        <NavCTA title={company.buttonLabel} href={company.href} />
      </div>
    </Reveal>
  )
}
