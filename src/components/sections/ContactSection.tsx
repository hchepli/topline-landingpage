import { Reveal } from "../animations/Reveal"
import { SectionTitle } from "../ui/layout/SectionTitle"
import { ContactCard } from "../ui/cards/ContactCard"

export function ContactSection() {
  return (
    <section className="contact min-h-screen w-full flex items-center justify-center pt-8 md:pt-10">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-10">
        <SectionTitle title="Contato Comercial" />

        <Reveal delay={0.4} direction="up">
          <ContactCard />
        </Reveal>
      </div>
    </section>
  )
}
