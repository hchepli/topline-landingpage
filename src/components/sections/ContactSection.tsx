import { useState } from "react"
import { Reveal } from "../animations/Reveal"
import { SectionTitle } from "../ui/layout/SectionTitle"
import { ContactCard } from "../ui/cards/ContactCard"
import { ArrowUpRight } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      toast.warning("Preencha todos os campos.")
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString('pt-BR'),
        },
        EMAILJS_PUBLIC_KEY
      )
      toast.success("Mensagem enviada! Retornaremos em breve.")
      setForm({ name: "", email: "", message: "" })
    } catch (err: any) {
      toast.error("Ops, algo deu errado. Tente novamente ou fale pelo WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="contact min-h-screen w-full flex items-center justify-center pt-8 md:pt-10"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-10 px-4 sm:px-6">
        <SectionTitle title="Contato Comercial" id="contact-title" />

        <Reveal delay={0.4} direction="up">
          <address className="not-italic">
            <ContactCard />
          </address>
        </Reveal>

        <div className="diagnostico flex flex-col lg:flex-row justify-between items-start w-full py-10 md:py-20 gap-12 lg:gap-6">

          <Reveal delay={0.2} direction="right" className="flex w-full lg:w-[45%] justify-center items-start gap-8 flex-col">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-start font-semibold">
              Vamos conversar sobre a gestão{" "}
              <span className="text-[rgb(var(--brand-secondary))]">da sua empresa</span>
            </h3>
            <p className="text-start text-[rgb(var(--text-secondary)/0.5)] w-full sm:w-[83%]">
              Entenda como a CHP Smart pode ajudar você a ter mais clareza, organização e segurança nas decisões do dia a dia.
            </p>
            <div className="flex justify-center items-start flex-col">
              <h4 className="text-start text-[rgb(var(--text-secondary)/0.5)]">Email:</h4>
              <p>exemplo@gmail.com</p>
            </div>
            <div className="flex justify-center items-start flex-col">
              <h4 className="text-start text-[rgb(var(--text-secondary)/0.5)]">Telefone:</h4>
              <p>+55 (11) 91102-1278</p>
            </div>
            <a
              className="group relative overflow-hidden bg-black text-white border border-black p-3 pl-6 flex justify-center items-center gap-5 rounded-full transition-colors duration-300 hover:text-black"
              href="https://wa.me/5511911021278"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out rounded-full" aria-hidden="true" />
              <span className="relative z-10">Falar com a CHP Smart</span>
              <div className="relative z-10 flex justify-center items-center bg-white text-black p-3 rounded-full transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight />
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.4} direction="up" className="w-full lg:w-[42%]">
            <div className="rounded-2xl p-6 sm:p-10 flex flex-col gap-6 shadow-md">

              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="name" className="text-sm font-medium text-black">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
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
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Qual é o principal desafio da sua empresa hoje?"
                  className="w-full h-36 resize-none rounded-lg border border-black/30 bg-white px-4 py-3 text-sm outline-none focus:border-black transition"
                />
              </div>

              <div className="w-full flex justify-end pt-2">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="group relative overflow-hidden bg-black text-white border border-black p-3 pl-6 flex justify-center items-center gap-5 rounded-full transition-colors duration-300 hover:text-black disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out rounded-full" aria-hidden="true" />
                  <span className="relative z-10">
                    {loading ? "Enviando..." : "Quero Conversar"}
                  </span>
                  <div className="relative z-10 flex justify-center items-center bg-white text-black p-3 rounded-full transition-colors duration-300 group-hover:bg-black group-hover:text-white">
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