import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpRight,
  Building2,
  Facebook,
  Globe,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Users,
  Youtube,
  type LucideIcon,
} from "lucide-react"
import logo from "../assets/img/logo/logo-chp.svg"
import ivmLogo from "../assets/img/logo/ivmitaly.webp"
import forthyLogo from "../assets/img/logo/forthy.webp"
import brvLogo from "../assets/img/logo/brv.webp"
import roddexLogo from "../assets/img/logo/roddex.webp"
import { Reveal } from "../components/animations/Reveal"

const WHATSAPP_URL = "https://wa.me/5511911021278"
const EMAIL = "chepli@chpsmart.com.br"

const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "E-mail", href: `mailto:${EMAIL}`, icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chp-smart/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/chp_smart/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/topline.chp.si", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@chpsmart", icon: Youtube },
]

const shortcuts: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Site Oficial", href: "/", icon: Globe },
  { label: "Empresas do Grupo", href: "/empresas", icon: Building2 },
]

const brands = [
  { label: "IVM Italy", href: "https://www.italy.com.br", logo: ivmLogo },
  { label: "Forthy", href: "https://www.forthy.com.br/", logo: forthyLogo },
  { label: "BRV Válvulas", href: "https://www.brvvalvulas.com.br", logo: brvLogo },
  { label: "Roddex", href: "https://www.roddex.com.br", logo: roddexLogo },
]

type SmartLinkProps = {
  href: string
  className?: string
  ariaLabel?: string
  children: ReactNode
}

/** Rota interna usa <Link>; links externos abrem em nova aba. */
function SmartLink({ href, className, ariaLabel, children }: SmartLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  const isWeb = href.startsWith("http")

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

export function Links() {
  return (
    <div className="flex min-h-screen justify-center bg-[rgb(var(--gray-100))] px-4 py-8 sm:py-12">
      <div className="w-full max-w-md self-start rounded-[2rem] border border-black/5 bg-white p-5 shadow-xl sm:p-7">
        {/* Barra superior */}
        <Reveal delay={0.1} direction="down">
          <div className="flex items-center justify-between">
            <SmartLink
              href="/"
              ariaLabel="Ir para o site oficial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[rgb(var(--gray-900))] transition hover:bg-slate-200"
            >
              <Home size={18} />
            </SmartLink>

            <SmartLink
              href={WHATSAPP_URL}
              className="flex items-center gap-2 rounded-full bg-[rgb(var(--gray-900))] px-4 py-2 text-xs font-medium text-white transition hover:opacity-80"
            >
              <MessageCircle size={14} />
              Fale conosco
            </SmartLink>
          </div>
        </Reveal>

        {/* Perfil */}
        <Reveal delay={0.2} direction="up">
          <header className="mt-6 flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Logo da CHP Smart"
              className="h-auto w-48 rounded-full border border-black/10 bg-white object-contain p-3 shadow-md"
            />
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-[rgb(var(--text-secondary)/60%)]">
              Inteligência que conecta negócios. Conectamos gestão estratégica e tecnologia para
              impulsionar empresas parceiras.
            </p>

            <ul className="mt-4 flex items-center gap-1" aria-label="Redes sociais">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <SmartLink
                    href={href}
                    ariaLabel={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[rgb(var(--gray-900))] transition hover:bg-slate-100 hover:text-[rgb(var(--brand-secondary))]"
                  >
                    <Icon size={17} />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </header>
        </Reveal>

        {/* Atalhos em cartões */}
        <Reveal delay={0.3} direction="up">
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {shortcuts.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <SmartLink
                  href={href}
                  className="group flex h-28 flex-col justify-between rounded-2xl border border-black/10 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex items-start justify-between text-[rgb(var(--brand-secondary))]">
                    <Icon size={18} />
                    <ArrowUpRight
                      size={16}
                      className="text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="text-sm font-medium leading-tight text-[rgb(var(--gray-900))]">
                    {label}
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Destaque: WhatsApp */}
        <Reveal delay={0.4} direction="up">
          <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-black/20 p-4">
            <div>
              <p className="text-sm font-semibold text-[rgb(var(--gray-900))]">Fale com o time</p>
              <p className="text-xs text-[rgb(var(--text-secondary)/60%)]">
                Atendimento direto pelo WhatsApp
              </p>
            </div>
            <SmartLink
              href={WHATSAPP_URL}
              className="rounded-full bg-[rgb(var(--gray-900))] px-4 py-2 text-xs font-medium text-white transition hover:opacity-80"
            >
              Chamar
            </SmartLink>
          </div>
        </Reveal>

        {/* CTA principal */}
        <Reveal delay={0.5} direction="up">
          <SmartLink
            href="/sobre"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[rgb(var(--gray-900))] px-6 py-3 text-xs font-medium text-white transition hover:opacity-80"
          >
            <Users size={15} />
            Conheça a CHP Smart
          </SmartLink>
        </Reveal>

        {/* Marcas do grupo */}
        <Reveal delay={0.6} direction="up">
          <section aria-labelledby="brands-title" className="mt-6">
            <h2
              id="brands-title"
              className="text-center text-[11px] font-bold uppercase tracking-widest text-[rgb(var(--gray-900))]"
            >
              Marcas do grupo
            </h2>

            <ul className="mt-3 flex flex-col gap-3">
              {brands.map(({ label, href, logo: brandLogo }) => (
                <li key={label}>
                  <SmartLink
                    href={href}
                    className="group flex items-center gap-3 rounded-xl bg-[rgb(var(--gray-900))] px-4 py-3 text-white transition hover:opacity-80"
                  >
                    <img
                      src={brandLogo}
                      alt=""
                      aria-hidden
                      className="h-7 w-7 rounded-md bg-white object-contain p-0.5"
                    />
                    <span className="flex-1 text-center text-xs font-medium">{label}</span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Rodapé */}
        <footer className="mt-8 flex flex-col items-center gap-1 text-center text-xs text-[rgb(var(--text-secondary)/60%)]">
          <small>&copy; 2026 CHP Smart. Todos os direitos reservados.</small>
          <SmartLink
            href="/politica-de-privacidade"
            className="underline underline-offset-2 transition-colors hover:text-[rgb(var(--text-primary))]"
          >
            Política de Privacidade
          </SmartLink>
        </footer>
      </div>
    </div>
  )
}
