import { Header } from "../components/sections/Header"
import { Hero } from "../components/sections/Hero"
import { GroupOverview } from "../components/sections/GroupOverview"
import { CompaniesSection } from "../components/sections/CompaniesSection"
import { Contact } from "../components/sections/Contact"
import { Footer } from "../components/sections/Footer"

export function Home() {
  return (
    <>
    <Header />
    <Hero />
    <GroupOverview />
    <CompaniesSection />
    <Contact />
    <Footer />
    </>
  )
}
