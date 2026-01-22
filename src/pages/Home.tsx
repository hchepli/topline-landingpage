import { Header } from "../components/sections/Header"
import { Hero } from "../components/sections/Hero"
import { BrandGroupSection } from "../components/sections/BrandGroupSection"
import { CompanyShowcaseSection } from "../components/sections/CompanyShowcaseSection"
import { ContactSection } from "../components/sections/ContactSection"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"

export function Home() {
  return (
    <>
    <Header />
    <Hero />
    <LayoutContainer>
      <BrandGroupSection />
      <CompanyShowcaseSection />
      <ContactSection />
    </LayoutContainer>
    <Footer />
    </>
  )
}
