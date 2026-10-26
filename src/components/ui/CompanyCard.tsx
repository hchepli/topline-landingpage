import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { CompanyLogo } from "./CompanyLogo"
import type { Company } from "../../data/companies"

const channelName = {
  conceitto: "Conceitto",
  hidrosmart: "HidroSmart",
} as const

export function CompanyCard({ company }: { company: Company }) {
  // Badges (estilo "Published / Draft" da referência)
  const badges = [
    ...company.representation.map((c) => ({
      label: channelName[c],
      text: "Representada",
      tone: "green" as const,
    })),
    ...company.distribution.map((c) => ({
      label: channelName[c],
      text: "Distribuída",
      tone: "blue" as const,
    })),
  ]

  return (
    <Link
      to={`/empresas/${company.target}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--brand-secondary))] hover:shadow-xl"
    >
      {/* CAPA: gradiente suave + logo "flutuando" como o ebook da referência */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 40%, rgb(var(--brand-secondary) / 0.14), transparent 70%)",
          }}
        />

        <div className="relative flex h-28 w-44 items-center justify-center rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
          <CompanyLogo
            image={company.image}
            name={company.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-[rgb(var(--brand-secondary))] opacity-0 shadow-sm backdrop-blur transition-opacity group-hover:opacity-100">
          Ver mais
          <ArrowUpRight size={14} />
        </span>
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {badges.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={`${b.text}-${b.label}`}
                className={
                  "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold text-gray-900 " +
                  (b.tone === "green" ? "bg-emerald-100" : "bg-blue-100")
                }
              >
                {b.text} · {b.label}
              </li>
            ))}
          </ul>
        )}

        <h3 className="text-lg font-semibold leading-snug text-[#1f2937]">
          {company.headline ?? company.name}
        </h3>

        <p className="line-clamp-2 text-sm text-gray-500">{company.description}</p>
      </div>
    </Link>
  )
}