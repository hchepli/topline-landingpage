import { Reveal } from "../../animations/Reveal"
import { BrandCard } from "../cards/BrandCard"
import { companies } from "../../../data/companies"

const duplicated = [...companies, ...companies]

export function BrandCardGrid() {
  return (
    <div className="mt-10 md:mt-14 w-full" style={{ overflowX: "clip" }}>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <ul
        className="marquee-track flex items-stretch gap-10 md:gap-[3rem] w-max"
        aria-label="Empresas do Grupo TF"
      >
        {duplicated.map((company, i) => (
          <li key={`${company.name}-${i}`} className="shrink-0">
            {i < companies.length ? (
              <Reveal delay={0.3 + i * 0.2} direction="up">
                <BrandCard
                  img={company.image}
                  name={company.name}
                  url={company.href}
                />
              </Reveal>
            ) : (
              <BrandCard
                img={company.image}
                name={company.name}
                url={company.href}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}