import { Reveal } from "../animations/Reveal"
import { Logo } from "../ui/layout/Logo"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-6 py-12">

                {/* Top */}
                <Reveal delay={0.1} direction="up">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <Logo />
                        <p className="text-sm text-[rgb(var(--text-secondary)/60%)]">
                            Gestão que sustenta decisões. Estratégia que sustenta crescimento.
                        </p>
                    </div>
                </Reveal>

                {/* Grid principal */}
                <Reveal delay={0.2} direction="up">
                    <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4">

                        {/* Empresas */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-sm font-semibold text-neutral-900">Empresas</h4>
                            <ul className="flex flex-col gap-2 text-sm text-[rgb(var(--text-secondary)/60%)]">
                                <li>TopFusion</li>
                                <li>TopFiber</li>
                                <li>TopFlux</li>
                            </ul>
                        </div>

                        {/* Navegação */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-sm font-semibold text-neutral-900">Navegação</h4>
                            <ul className="flex flex-col gap-2 text-sm text-[rgb(var(--text-secondary)/60%)]">
                                <li>Home</li>
                                <li>O Grupo</li>
                                <li>Empresas</li>
                                <li>Contato</li>
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
                        <div className="flex flex-col gap-3 md:items-end">
                            <h4 className="text-sm font-semibold text-neutral-900">Social</h4>
                            <div className="flex gap-3">
                                {[1, 2, 3, 4].map((_, i) => (
                                    <button
                                        key={i}
                                        className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--brand-secondary))] text-white transition hover:opacity-80"
                                    >
                                        <Instagram size={16} />
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </Reveal>

                {/* Bottom */}
                {/* Bottom */}
                <Reveal delay={0.3} direction="up">
                    <div className="mt-12 pt-6">

                        <div className="flex flex-col items-center gap-4 text-center text-sm text-[rgb(var(--text-secondary)/60%)] md:flex-row md:justify-between md:text-left">

                            {/* Direitos */}
                            <span className="leading-relaxed">
                                © 2025 TopLine Non Stop. <br className="md:hidden" />
                                Todos os direitos reservados
                            </span>

                            {/* Links legais */}
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
                                <span className="cursor-pointer hover:text-[rgb(var(--brand-secondary))] transition">
                                    Termos e Condições
                                </span>
                                <span className="cursor-pointer hover:text-[rgb(var(--brand-secondary))] transition">
                                    Política de privacidade
                                </span>
                                <span className="cursor-pointer hover:text-[rgb(var(--brand-secondary))] transition">
                                    Cookies
                                </span>
                            </div>

                        </div>

                    </div>
                </Reveal>


            </div>
        </footer>
    )
}
