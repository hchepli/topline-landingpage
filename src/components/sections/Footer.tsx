import { Logo } from "../ui/layout/Logo"
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react"
import { scrollToSection } from "../../lib/scroll"

const NAV_ITEMS = [
  { label: "Home", target: "hero" },
  { label: "O Grupo", target: "grupo" },
  { label: "Empresas", target: "empresas" },
  { label: "Contato", target: "contact" },
]

export function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* HEADER */}
        <div className="flex flex-col gap-4 md:gap-6">
          <Logo />
          <p className="max-w-xl text-sm text-[rgb(var(--text-secondary)/60%)]">
            Gestão que sustenta decisões. Estratégia que sustenta crescimento.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Empresas */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-neutral-900">Empresas</h4>
            <ul className="flex flex-col gap-2 text-sm text-[rgb(var(--text-secondary)/60%)]">
              <li><a href="https://www.topfusion.com.br" target="__blank">TopFusion</a></li>
              <li><a href="https://www.topfiber.ind.br/" target="__blank">TopFiber</a></li>
              <li><a href="https://www.topflux.com.br" target="__blank">TopFlux</a></li>
            </ul>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-neutral-900">Navegação</h4>
            <ul className="flex flex-col gap-2 text-sm text-[rgb(var(--text-secondary)/60%)]">
              {NAV_ITEMS.map((item) => (
                <li key={item.target}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    className="text-left transition-colors hover:text-[rgb(var(--text-primary))]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatos */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-neutral-900">Contatos</h4>
            <ul className="flex flex-col gap-2 text-sm text-[rgb(var(--text-secondary)/60%)]">
              <li className="flex items-center gap-2">
                <Mail size={16} /> chepli@toplinesp.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +55 (11) 91102-1278
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3 md:items-start lg:items-end">
            <h4 className="text-sm font-semibold text-neutral-900">Social</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/topfusion_topflux_topfiber/" target="__blank" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/vallchepli" target="__blank" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Facebook size={16} />
              </a>
              <a href="https://www.linkedin.com/in/chepli-topfusion-topfiber/" target="__blank" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Linkedin size={16} />
              </a>
              <a href="https://www.youtube.com/@TopFusion-TopLine-TopFiber" target="__blank" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-12 pt-6">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-[rgb(var(--text-secondary)/60%)] md:items-start md:text-left">
            <span className="leading-relaxed">
              © 2025 TopLine Non Stop.
              <br className="md:hidden" />
              Todos os direitos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
