import { Header } from "../components/sections/Header"
import { Hero } from "../components/sections/Hero"
import { BrandGroupSection } from "../components/sections/BrandGroupSection"
import { ContactSection } from "../components/sections/ContactSection"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { ServicesSection } from "../components/sections/ServicesSection"
import { CompanyShowcaseSection } from "../components/sections/CompanyShowcaseSection"

export function Home() {
  return (
    <>
    <Header />
    <Hero />
    <LayoutContainer>
      <ServicesSection />
      <BrandGroupSection />
      <CompanyShowcaseSection />
      <ContactSection />
    </LayoutContainer>
    <Footer />
    </>
  )
}
