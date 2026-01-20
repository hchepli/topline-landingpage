import { Reveal } from "../../animations/Reveal"
import { NavCTA } from "../../ui/buttons/NavCTA"

export function CompanyIntro({
  company,
  index,
  titleId,
}: {
  company: any
  index: number
  titleId: string
}) {
  return (
    <Reveal direction="left" delay={0.2 + index * 0.2}>
      <header
        className={`${company.target} scroll-mt-28 flex w-full flex-col items-start gap-3 lg:gap-4`}
      >
        <h3
          id={titleId}
          className="text-xl font-semibold border-b-2 border-[rgb(var(--brand-secondary))] lg:text-2xl"
        >
          {company.name}
        </h3>

        <p className="max-w-md text-sm text-neutral-500 text-justify lg:text-base">
          {company.description}
        </p>

        <NavCTA title={company.buttonLabel} href={company.href} />
      </header>
    </Reveal>
  )
}
