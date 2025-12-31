import { Reveal } from "../animations/Reveal"
import { Mail, Phone, ArrowUpRight } from "lucide-react"
import avatar from "../../assets/img/avatar.png"

export function Contact() {
  return (
    <section className="contact min-h-screen w-full flex items-center justify-center pt-8 md:pt-10">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-10">

        {/* Título (já está correto) */}
        <Reveal delay={0.3} direction="up">
          <h1 className="text-[2.6rem] md:text-[3.3rem] font-bold text-[rgb(var(--text-black))]">
            Contatos Comerciais
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-[60%] rounded-full bg-[rgb(var(--brand-secondary))]" />
        </Reveal>

        {/* Card */}
        <Reveal delay={0.5} direction="up">
          <div className="w-full max-w-sm rounded-2xl py-10 px-12 shadow-lg flex flex-col items-center gap-5">

            {/* Avatar */}
            <img
              src={avatar}
              alt="Contato comercial"
              className="h-auto w-40 rounded-full object-cover border border-neutral-200"
            />

            {/* Nome */}
            <h3 className="text-lg font-semibold text-neutral-900">
              Valdenilson Chepli
            </h3>

            {/* Infos */}
            <div className="flex flex-col gap-2 text-sm items-start text-[rgb(var(--text-secondary)/50%)]">
              <div className="flex items-center gap-2 justify-center">
                <Mail size={16} />
                <span>chepli@toplinesp.com.br</span>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <Phone size={16} />
                <span>(+55) 11 91102-1278</span>
              </div>
            </div>

            {/* Botão */}
            <button className="mt-4 flex items-center gap-2 rounded-lg border border-[rgb(var(--brand-secondary))] px-5 py-2 text-sm font-medium text-[rgb(var(--brand-secondary))] transition hover:bg-[rgb(var(--brand-secondary))] hover:text-white">
              Entrar em contato
              <ArrowUpRight size={20} />
            </button>

          </div>
        </Reveal>

      </div>
    </section>
  )
}
