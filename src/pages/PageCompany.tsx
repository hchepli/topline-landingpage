import { useParams, Navigate } from "react-router-dom"
import { CompanyIntro } from "../components/ui/layout/CompanyIntro"
import { CompanyCatalog } from "../components/ui/layout/CompanyCatalog"
import { companies } from "../data/companies"
import { getVideosByCompany } from "../data/videos"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { ContactSection } from "../components/sections/ContactSection"
import { VideoShowcaseSection } from "../components/sections/VideoShowcaseSection"

export function CompanyPage() {
  const { target } = useParams()
  const company = companies.find((c) => c.target === target)

  if (!company) {
    return <Navigate to="/" replace />
  }

  const companyVideos = getVideosByCompany(company.target)
  const hasVideos = companyVideos.length > 0

  return (
    <>
      <Header />
      <LayoutContainer>
        <section className="mx-auto flex max-w-7xl flex-col gap-20 px-6 pt-20 lg:pt-24 lg:gap-24">
          <CompanyIntro
            company={company}
            index={0}
            titleId={`company-${company.name}-title`}
          />
          <CompanyCatalog company={company} />
        </section>

        {hasVideos && (
          <>
            <div className="mt-20 border-t lg:mt-28" />
            <VideoShowcaseSection
              videos={companyVideos}
              sectionId={`${company.target}-videos`}
              title={`Conheça a ${company.name} em Vídeos`}
              description={`Confira alguns vídeos que mostram de perto o trabalho e a essência da ${company.name}.`}
            />
          </>
        )}

        <ContactSection />
      </LayoutContainer>
      <Footer />
    </>
  )
}