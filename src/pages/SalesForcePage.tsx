// src/pages/SalesForcePage.tsx
import { DistributionIntro } from "../components/ui/layout/DistributionIntro"
import { RepresentationsGrid } from "../components/ui/layout/RepresentationsGrid"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { ContactSection } from "../components/sections/ContactSection"
import {
  conceittoCompany,
  conceittoRepresentations,
} from "../data/companies"

export function SalesForcePage() {
  const company = conceittoCompany

  return (
    <>
      <Header />

      <DistributionIntro
        company={company}
        brands={conceittoRepresentations}
        badge="Força de vendas"
        headline={["Do fabricante", "direto à obra."]}
        subtitle={`A ${company.name} representa marcas de referência do ecossistema CHP Smart.`}
        brandsCaption={`Marcas representadas pela ${company.name}`}
        ctaTitle="Ver marcas"
        ctaTarget="representacoes"
      />

      <LayoutContainer>
        <section
          id="representacoes"
          aria-labelledby="representacoes-title"
          className="mx-auto flex max-w-7xl scroll-mt-32 flex-col gap-20 px-6 pt-20 lg:pt-24 lg:gap-24"
        >
          <RepresentationsGrid
            companyName={company.name}
            representations={conceittoRepresentations}
          />
        </section>

        <div id="contato" className="scroll-mt-32">
          <ContactSection />
        </div>
      </LayoutContainer>

      <Footer />
    </>
  )
}