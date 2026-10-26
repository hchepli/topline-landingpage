// src/pages/Companies.tsx
import { SectionHeader } from "../components/ui/layout/SectionHeader"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { CompanyCard } from "../components/ui/CompanyCard"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { ContactSection } from "../components/sections/ContactSection"
import { CompaniesHero } from "../components/sections/CompaniesHero"
import {
  italyGroup,
  distributionCompanies,
  representationCompanies,
  partnerBrands,
  type Company,
} from "../data/companies"

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

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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