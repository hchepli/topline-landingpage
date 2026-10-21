// src/components/sections/CompaniesHero.tsx
import type { CSSProperties } from "react"
import { Link } from "react-router-dom"
import { ArrowDown } from "lucide-react"
import { companies, type Company } from "../../data/companies"
import { CompanyLogo } from "../ui/CompanyLogo"

/** Quantas vezes a lista é repetida. Garante que nunca apareça um "buraco" na faixa. */
const COPIES = 4

/** Segundos por card. Menor = mais rápido. */
const SECONDS_PER_CARD = 5

/** Largura dos cards: igual nas duas faixas. */
const CARD_WIDTH = "w-48 sm:w-60"

type StripCardProps = {
  company: Company
  hidden?: boolean
}

function StripCard({ company, hidden }: StripCardProps) {
  return (
    <Link
      to={`/empresas/${company.target}`}
      tabIndex={hidden ? -1 : undefined}
      className={`flex ${CARD_WIDTH} flex-col items-center gap-3 p-6 transition-opacity hover:opacity-70`}
    >
      <CompanyLogo image={company.image} name={company.name} className="h-20" />
      <span className="text-sm font-semibold text-[#1f2937]">{company.name}</span>
    </Link>
  )
}

type StripProps = {
  items: Company[]
  direction: "up" | "down"
  delay?: string
}

function Strip({ items, direction, delay }: StripProps) {
  // Mesma velocidade nas duas faixas, mesmo com quantidades diferentes de cards
  const duration = `${items.length * SECONDS_PER_CARD}s`

  const trackStyle = {
    "--copies": COPIES,
    animationDuration: duration,
    animationDelay: delay,
  } as CSSProperties

  return (
    <div className="chp-strip h-full overflow-hidden">
      <ul
        className={`chp-track flex flex-col ${
          direction === "up" ? "chp-scroll-up" : "chp-scroll-down"
        }`}
        style={trackStyle}
      >
        {Array.from({ length: COPIES }).flatMap((_, copy) =>
          items.map((company) => (
            <li key={`${copy}-${company.target}`} aria-hidden={copy > 0}>
              <StripCard company={company} hidden={copy > 0} />
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export function CompaniesHero() {
  const left = companies.filter((_, i) => i % 2 === 0)
  const right = companies.filter((_, i) => i % 2 === 1)

  return (
    <section
      aria-labelledby="empresas-hero-title"
      className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 mt-10 lg:grid-cols-2 lg:py-20"
    >
      <style>{`
        @keyframes chp-scroll-up {
          from { transform: translate3d(0, 0, 0) }
          to   { transform: translate3d(0, calc(-100% / var(--copies)), 0) }
        }
        @keyframes chp-scroll-down {
          from { transform: translate3d(0, calc(-100% / var(--copies)), 0) }
          to   { transform: translate3d(0, 0, 0) }
        }
        .chp-track { will-change: transform; backface-visibility: hidden }
        .chp-scroll-up   { animation: chp-scroll-up 25s linear infinite }
        .chp-scroll-down { animation: chp-scroll-down 25s linear infinite }
        .chp-strip:hover .chp-track { animation-play-state: paused }
        @media (prefers-reduced-motion: reduce) {
          .chp-scroll-up, .chp-scroll-down { animation: none }
        }
      `}</style>

      {/* Texto + CTA */}
      <div className="flex flex-col items-start gap-6">
        <span className="text-sm font-medium uppercase tracking-widest text-[rgb(var(--brand-secondary))]">
          Ecossistema CHP Smart
        </span>
        <h1
          id="empresas-hero-title"
          className="text-4xl font-bold leading-tight text-[#1f2937] sm:text-5xl"
        >
          Empresas que fazem parte da nossa história
        </h1>
        <p className="max-w-xl text-lg text-gray-600">
          Marcas, distribuição e força de vendas trabalhando juntas para levar
          soluções hidráulicas e de controle de fluidos a todo o Brasil.
        </p>
        <a
          href="#grupo-italy"
          className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--brand-secondary))] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Conhecer as empresas
          <ArrowDown size={18} />
        </a>
      </div>

      {/* Faixas levemente inclinadas */}
      <div
        className="relative h-[460px] overflow-hidden lg:h-[640px]"
        aria-label="Empresas do ecossistema"
      >
        {/* Fade em cima e embaixo (fora da área inclinada, para não borrar as imagens) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="mx-auto flex h-full w-fit gap-6">
          <Strip items={left} direction="up" />
          <Strip items={right} direction="down" delay="-10s" />
        </div>
      </div>
    </section>
  )
}
