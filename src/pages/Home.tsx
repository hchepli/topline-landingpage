import { Header } from "../components/sections/Header"
import { Hero } from "../components/sections/Hero"
import { BrandGroupSection } from "../components/sections/BrandGroupSection"
import { ContactSection } from "../components/sections/ContactSection"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { ServicesSection } from "../components/sections/ServicesSection"
import { VideoShowcaseSection } from "../components/sections/VideoShowcaseSection"
import { getFeaturedVideos } from "../data/videos"


export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LayoutContainer>
        <ServicesSection />
        <BrandGroupSection />
              <VideoShowcaseSection
        videos={getFeaturedVideos()}
        title="Conheça o Grupo Italy em Vídeos"
        description="Confira alguns vídeos que mostram de perto o trabalho de nossas empresas parceiras."
      />
        <ContactSection />
      </LayoutContainer>
      <Footer />
    </>
  )
}
