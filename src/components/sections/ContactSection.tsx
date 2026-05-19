import { Reveal } from "../animations/Reveal"
import { SectionTitle } from "../ui/layout/SectionTitle"
import { ContactCard } from "../ui/cards/ContactCard"
import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section
      className="contact min-h-screen w-full flex items-center justify-center pt-8 md:pt-10"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-10">
        <SectionTitle title="Contato Comercial" id="contact-title" />

        <Reveal delay={0.4} direction="up">
          <address className="not-italic">
            <ContactCard />
          </address>
        </Reveal>

        <div className="flex justify-between items-center w-full py-20">

          <Reveal delay={0.2} direction="right" className="flex w-[45%] justify-center items-start gap-10 flex-col">
            <h3 className="text-4xl text-start font-semibold">
              Vamos conversar sobre a gestão{" "}
              <span className="text-[rgb(var(--brand-secondary))]">da sua empresa</span>
            </h3>
            <p className="text-start text-[rgb(var(--text-secondary)/0.5)] w-[83%]">
              Entenda como a CHP Smart pode ajudar você a ter mais clareza, organização e segurança nas decisões do dia a dia.
            </p>
            <div className="flex justify-center items-start flex-col">
              <h4 className="text-start text-[rgb(var(--text-secondary)/0.5)]">Email:</h4>
              <p>exemplo@gmail.com</p>
            </div>
            <div className="flex justify-center items-start flex-col">
              <h4 className="text-start text-[rgb(var(--text-secondary)/0.5)]">Telefone:</h4>
              <p>+55 (11) 9 9999-9999</p>
            </div>
            <a className="bg-black text-white p-3 pl-6 flex justify-center items-center gap-5 rounded-full" href="https://wa.me/5511911021278" target="_blank" rel="noopener noreferrer">
              Falar com a CHP Smart
              <div className="flex justify-center items-center bg-white text-black p-3 rounded-full">
                <ArrowUpRight />
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.4} direction="up" className="w-[42%]">
            <div className="rounded-2xl p-10 flex flex-col gap-6 shadow-md">
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="name" className="text-sm font-medium text-black">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Como eu posso te chamar?"
                  className="w-full h-12 rounded-lg border border-black/30 bg-white px-4 text-sm outline-none focus:border-black transition"
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="email" className="text-sm font-medium text-black">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Por onde eu te respondo?"
                  className="w-full h-12 rounded-lg border border-black/30 bg-white px-4 text-sm outline-none focus:border-black transition"
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="message" className="text-sm font-medium text-black">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Qual é o principal desafio da sua empresa hoje?"
                  className="w-full h-36 resize-none rounded-lg border border-black/30 bg-white px-4 py-3 text-sm outline-none focus:border-black transition"
                />
              </div>

              <div className="w-full flex justify-end pt-2">
                <button className="bg-black text-white p-3 pl-6 flex justify-center items-center gap-5 rounded-full">
                  Quero Conversar
                  <div className="flex justify-center items-center bg-white text-black p-3 rounded-full">
                    <ArrowUpRight />
                  </div>
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}