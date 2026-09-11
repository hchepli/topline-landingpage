import { Target, ShieldCheck, TrendingUp, Handshake } from "lucide-react"
import chepliLogo from "../assets/img/logo/chepli.svg"
import escritorioLogo from "../assets/img/logo/escritorio.svg"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { ContactSection } from "../components/sections/ContactSection"
import { Reveal } from "../components/animations/Reveal"

const colorStyles = {
  default: {
    card: "border-gray-100 bg-white",
    iconWrapper: "bg-primary/10",
    icon: "text-primary",
    title: "text-gray-900",
    description: "text-gray-600",
  },
  blue: {
    card: "border-blue-600 bg-blue-600",
    iconWrapper: "bg-white/15",
    icon: "text-white",
    title: "text-white",
    description: "text-blue-100",
  },
  yellow: {
    card: "border-yellow-500 bg-yellow-500",
    iconWrapper: "bg-white/15",
    icon: "text-white",
    title: "text-white",
    description: "text-yellow-50",
  },
  green: {
    card: "border-green-600 bg-green-600",
    iconWrapper: "bg-white/15",
    icon: "text-white",
    title: "text-white",
    description: "text-green-100",
  },
} as const

const pillars = [
  {
    icon: Target,
    title: "Gestão Comercial Integrada",
    description:
      "Conectamos estratégia de vendas e engenharia de aplicação, do primeiro contato ao handover técnico.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Segurança na Entrega",
    description:
      "Cada venda entra validada tecnicamente, evitando retrabalho, custo escondido e cliente insatisfeito.",
    color: "default",
  },
  {
    icon: TrendingUp,
    title: "Performance Comercial",
    description:
      "Foco em expansão de mercado, aumento de receita e melhoria contínua do mix de soluções.",
    color: "yellow",
  },
  {
    icon: Handshake,
    title: "Relacionamento Nacional",
    description:
      "Gestão de representantes e supervisores para ampliar a presença da marca em todo o território nacional.",
    color: "green",
  },
] as const

export function AboutUs() {
  return (
    <>
    <Header />
    <LayoutContainer>
    <section className="w-full bg-white py-20 mt-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
          <Reveal direction="up" delay={0.1} className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre Nós
            </span>
            <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              CHP Smart
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Se o HUB comercial não é estruturado, não há controle da operação — e isso é
              risco. Venda sem validação técnica vira retrabalho, custo escondido e cliente
              insatisfeito. Organizamos essa transição para que cada venda já entre pronta
              para execução, protegendo margem e evitando erro.
            </p>
        </Reveal>

        {/* Logos */}
          <Reveal direction="up" delay={0.2} className="mt-14 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
            <img
              src={chepliLogo}
              alt="CHP Smart"
              className="h-18 w-auto object-contain sm:h-24"
            />
            <div className="h-10 w-px bg-gray-200 sm:h-16" />
            <img
              src={escritorioLogo}
              alt="Escritório CHP Smart"
              className="h-56 w-auto rounded-md object-contain sm:h-96"
            />
        </Reveal>

        {/* Quem somos */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="up" delay={0.1}>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Quem somos</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                A CHP Smart é responsável pela gestão estratégica da área comercial, atuando
                no desenvolvimento de mercado e na oferta de soluções técnicas integradas.
                Conduzimos processos comerciais completos — da prospecção ao handover
                técnico — garantindo alinhamento entre vendas, engenharia e operação, com
                forte atuação em sistemas hidráulicos e pneumáticos.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Com mais de 18 anos de dedicação, a CHP Smart liderou equipes
                comerciais de referências nacionais em soluções para a construção civil.
                Nossa missão é inovar constantemente em práticas de atendimento e gestão,
                elevando a eficiência e a agilidade no mercado.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Especializamo-nos na introdução e no fortalecimento da marca em grandes
                clientes — redes de lojas, distribuidores, construtoras e empresas de
                engenharia — expandindo nossa participação no cenário nacional e
                internacional através de homologação e acompanhamento comercial criterioso.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-900">Nossa missão</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Estruturar e potencializar a área comercial, conectando estratégia de vendas
                à engenharia de aplicação — da identificação de oportunidades à definição do
                melhor mix de soluções — garantindo competitividade técnica, ganho de margem
                e segurança na entrega através de um processo estruturado.
              </p>
              <h3 className="mt-8 text-xl font-bold text-gray-900">Nossa visão</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Ser reconhecida pela excelência em toda a sua estrutura, contribuindo para
                que o grupo se destaque através de liderança organizacional e abordagem
                focada em engenharia de projetos.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pilares */}
        <div className="mt-20">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-center text-2xl font-bold text-gray-900">
              O que nos move?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const styles = colorStyles[pillar.color]
              const delay = 0.2 + index * 0.08
              return (
                <Reveal direction="up" delay={delay} key={pillar.title}>
                  <div
                    className={`rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md ${styles.card}`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${styles.iconWrapper}`}
                    >
                      <pillar.icon className={`h-6 w-6 ${styles.icon}`} />
                    </div>
                    <h3 className={`mt-4 font-semibold ${styles.title}`}>{pillar.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${styles.description}`}>
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Números */}
        <Reveal direction="up" delay={0.1}>
          <div className="mt-20 grid grid-cols-1 gap-8 p-10 text-center sm:grid-cols-3">
            <div>
              <p className="text-4xl font-bold text-[#23609A]">18+</p>
              <p className="mt-2 text-sm text-black">Anos de experiência</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#23609A]">Nacional</p>
              <p className="mt-2 text-sm text-black">Presença em todo o território</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#23609A]">Integrada</p>
              <p className="mt-2 text-sm text-black">Gestão comercial e técnica</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
            <ContactSection />
          </LayoutContainer>
          <Footer />
    </>
  )
}
