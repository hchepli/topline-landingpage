import { CompanyCatalog } from "../components/ui/layout/CompanyCatalog"
import { DistributionIntro } from "../components/ui/layout/DistributionIntro"
import { hidrosmartCompany, hidrosmartDistribution } from "../data/companies"
import { getVideosByCompany } from "../data/videos"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { ContactSection } from "../components/sections/ContactSection"
import { VideoShowcaseSection } from "../components/sections/VideoShowcaseSection"

export function DistributionPage() {
  const company = hidrosmartCompany
  const companyVideos = getVideosByCompany(company.target)
  const hasVideos = companyVideos.length >  0

  return (
    <>
      <Header />
      <DistributionIntro company={company} brands={hidrosmartDistribution} />

      <LayoutContainer>
        <section
          id="catalogo"
          className="mx-auto flex max-w-7xl scroll-mt-32 flex-col gap-20 px-6 pt-20 lg:pt-24 lg:gap-24"
        >
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

        <div id="contato" className="scroll-mt-32">
          <ContactSection />
        </div>
      </LayoutContainer>
      <Footer />
    </>
  )
}