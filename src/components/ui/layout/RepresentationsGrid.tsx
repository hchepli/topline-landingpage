// src/components/ui/layout/RepresentationsGrid.tsx
import { Reveal } from "../../animations/Reveal"
import type { Company } from "../../../data/companies"

type RepresentationsGridProps = {
  companyName: string
  representations: Company[]
}

export function RepresentationsGrid({
  companyName,
  representations,
}: RepresentationsGridProps) {
  return (
    <div className="flex flex-col gap-10">
      <Reveal direction="up">
        <header className="flex max-w-2xl flex-col gap-3">
          <h2
            id="representacoes-title"
            className="font-black uppercase text-[#0F2240] text-2xl leading-snug tracking-[.09rem] lg:text-4xl"
          >
            Marcas representadas pela{" "}
            <span className="text-[rgb(var(--brand-primary))]">
              {companyName}
            </span>
          </h2>
          <p className="text-lg leading-snug text-[#0F2240]/70">
            Conheça as empresas que fazem parte da nossa força de vendas e
            acesse o site oficial de cada uma.
          </p>
        </header>
      </Reveal>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {representations.map((rep, index) => (
          <li key={rep.target}>
            <Reveal delay={0.1 * index} direction="up" className="h-full">
              <article className="flex h-full flex-col gap-5 rounded-[2rem] bg-white p-8 shadow-xl shadow-black/10 ring-1 ring-black/5">
                <div className="flex h-28 items-center justify-center rounded-2xl bg-[#F4F6FA] px-6">
                  {rep.image ? (
                    <img
                      src={rep.image}
                      alt={rep.name}
                      className="max-h-16 w-full object-contain"
                    />
                  ) : (
                    <span className="text-lg font-black uppercase tracking-[.06rem] text-[#0F2240]/60">
                      {rep.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-xl font-black uppercase tracking-[.06rem] text-[#0F2240]">
                    {rep.name}
                  </h3>
                  <p className="text-base leading-snug text-[#0F2240]/70">
                    {rep.description}
                  </p>
                </div>

                <a
                  href={rep.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar o site da ${rep.name}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2240] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[rgb(var(--brand-primary))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2240]"
                >
                  {rep.buttonLabel}
                  <span aria-hidden>↗</span>
                </a>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  )
}