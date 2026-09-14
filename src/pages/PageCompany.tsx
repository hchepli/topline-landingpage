// src/pages/CompanyPage.jsx
import { useParams, Navigate } from "react-router-dom"
import { CompanyBlock } from "../components/ui/layout/CompanyBlock"
import { companies } from "../data/companies"
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

  return (
    <>
      <Header />
      <LayoutContainer>
        <section className="flex mx-auto max-w-7xl px-6 flex-col gap-16 pt-20 lg:pt-24">
          <CompanyBlock company={company} index={0} />
        </section>
        <VideoShowcaseSection />
        <ContactSection />
      </LayoutContainer>
      <Footer />
    </>
  )
}