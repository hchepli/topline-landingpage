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
        <header className="flex flex-col gap-4 md:gap-6">
          <Logo />
          <p className="max-w-xl text-sm text-[rgb(var(--text-secondary)/60%)]">
            Gestão que sustenta decisões. Estratégia que sustenta crescimento.
          </p>
        </header>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Empresas */}
          <section className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-neutral-900">Empresas</h4>
            <ul className="flex flex-col gap-2 text-sm text-[rgb(var(--text-secondary)/60%)]">
              <li>
                <a href="https://www.topfusion.com.br" target="_blank" rel="noopener noreferrer">
                  TopFusion
                </a>
              </li>
              <li>
                <a href="https://www.topfiber.ind.br/" target="_blank" rel="noopener noreferrer">
                  TopFiber
                </a>
              </li>
              <li>
                <a href="https://www.topflux.com.br" target="_blank" rel="noopener noreferrer">
                  TopFlux
                </a>
              </li>
            </ul>
          </section>

          {/* Navegação */}
          <nav className="flex flex-col gap-3" aria-label="Navegação do rodapé">
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
          </nav>

          {/* Contatos */}
          <address className="flex flex-col gap-3 not-italic">
            <h4 className="text-sm font-semibold text-neutral-900">Contatos</h4>
            <ul className="flex flex-col gap-2 text-sm text-[rgb(var(--text-secondary)/60%)]">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>chepli@toplinesp.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+55 (11) 91102-1278</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </address>

          {/* Social */}
          <section className="flex flex-col gap-3 md:items-start lg:items-end">
            <h4 className="text-sm font-semibold text-neutral-900">Social</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/topfusion_topflux_topfiber/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100070448310668" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Facebook size={16} />
              </a>
              <a href="https://www.linkedin.com/in/chepli-topfusion-topfiber/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Linkedin size={16} />
              </a>
              <a href="https://www.youtube.com/@TopFusion-TopLine-TopFiber" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80">
                <Youtube size={16} />
              </a>
            </div>
          </section>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-12 pt-6">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-[rgb(var(--text-secondary)/60%)] md:items-start md:text-left">
            <small className="leading-relaxed">
              © 2025 TopLine Non Stop.
              <br className="md:hidden" />
              Todos os direitos reservados
            </small>
          </div>
        </div>

      </div>
    </footer>
  )
}
