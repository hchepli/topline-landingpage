// src/pages/Companies.tsx
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader } from "../components/ui/layout/SectionHeader"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { CompanyLogo } from "../components/ui/CompanyLogo"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { ContactSection } from "../components/sections/ContactSection"
import { CompaniesHero } from "../components/sections/CompaniesHero"
import {
  italyGroup,
  distributionCompanies,
  representationCompanies,
  partnerBrands,
  type Channel,
  type Company,
} from "../data/companies"

const channelLabel: Record<Channel, { representation: string; distribution: string }> = {
  conceitto: {
    representation: "Representada pela Conceitto",
    distribution: "Distribuída pela Conceitto",
  },
  hidrosmart: {
    representation: "Representada pela HidroSmart",
    distribution: "Distribuída pela HidroSmart",
  },
}

function CompanyCard({ company }: { company: Company }) {
  const tags = [
    ...company.representation.map((c) => channelLabel[c].representation),
    ...company.distribution.map((c) => channelLabel[c].distribution),
  ]

  return (
    <Link
      to={`/empresas/${company.target}`}
      className="relative flex h-full flex-col items-center gap-4 rounded-2xl border border-[rgb(var(--brand-secondary))] p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="absolute right-3 top-3 flex items-center gap-1 text-xs font-medium text-[rgb(var(--brand-secondary))]">
        <span>Ver mais</span>
        <ArrowUpRight size={16} />
      </div>

      <div className="mt-4 flex h-20 items-center">
        <CompanyLogo image={company.image} name={company.name} className="h-20" />
      </div>

      <h3 className="text-lg font-semibold text-[#1f2937]">{company.name}</h3>
      <p className="line-clamp-3 text-sm text-gray-600">{company.description}</p>

      {tags.length > 0 && (
        <ul className="mt-auto flex flex-wrap justify-center gap-2 pt-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Link>
  )
}

type CompaniesSectionProps = {
  id: string
  title: string
  description: string
  items: Company[]
}

function CompaniesSection({ id, title, description, items }: CompaniesSectionProps) {
  if (items.length === 0) return null

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto flex max-w-7xl scroll-mt-28 flex-col gap-10 px-6 py-12 lg:py-16"
    >
      <SectionHeader id={`${id}-title`} title={title} description={description} />

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((company) => (
          <li key={company.target}>
            <CompanyCard company={company} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Companies() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <CompaniesHero />

        <CompaniesSection
          id="grupo-italy"
          title="Grupo Italy"
          description="As marcas que fazem parte do Grupo Italy."
          items={italyGroup}
        />

        <CompaniesSection
          id="nossa-distribuicao"
          title="Nossa Distribuição"
          description="A HidroSmart reúne e distribui os produtos do ecossistema CHP Smart."
          items={distributionCompanies}
        />

        <CompaniesSection
          id="nossa-representacao"
          title="Nossa Representação"
          description="A Conceitto é a força de vendas que representa marcas líderes em soluções hidráulicas."
          items={representationCompanies}
        />

        <CompaniesSection
          id="empresas-parceiras"
          title="Outras empresas parceiras"
          description="Marcas parceiras que complementam o nosso portfólio."
          items={partnerBrands}
        />

        <ContactSection />
      </LayoutContainer>
      <Footer />
    </>
  )
}
