import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader } from "../components/ui/layout/SectionHeader"
import { companies } from "../data/companies"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { ContactSection } from "../components/sections/ContactSection"

export function Companies() {
  return (
    <>
      <Header />
      <LayoutContainer>
      <section
        aria-labelledby="empresas-title"
        className="empresas flex mx-auto max-w-7xl px-6 flex-col py-10 mt-10 gap-24 min-h-screen lg:gap-32 lg:py-24"
      >
        <SectionHeader
          id="empresas-title"
          title="Empresas que fazem parte da nossa história"
          description="Conheça as empresas que fazem parte do nosso ecossistema."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <li key={company.name}>
              <Link
                to={`/empresas/${company.target}`}
                className="relative flex flex-col items-center text-center gap-4 p-6 border border-[rgb(var(--brand-secondary))] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium text-[rgb(var(--brand-secondary))]">
                  <span>Ver mais</span>
                  <ArrowUpRight size={16} />
                </div>

                <img
                  src={company.image}
                  alt={`Logotipo da ${company.name}`}
                  className="h-20 w-20 object-contain mt-4"
                />
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {company.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ContactSection />
      </LayoutContainer>
      <Footer />
    </>
  )
}