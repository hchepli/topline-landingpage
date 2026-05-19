import { Reveal } from "../../animations/Reveal"
import { BrandCard } from "../cards/BrandCard"
import { companies } from "../../../data/companies"

export function BrandCardGrid() {
  return (
    <ul className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
      aria-label="Empresas do Grupo TF">
      {companies.map((company, i) => (
        <li key={company.name}>
          <Reveal delay={0.3 + i * 0.2} direction="up">
            <BrandCard
              img={company.image}
              name={company.name}
              url={company.href}
              target={company.target}
            />
          </Reveal>
        </li>
      ))}
    </ul>

  )
}
