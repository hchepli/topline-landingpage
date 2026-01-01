const companies = [
  {
    name: "TopFusion",
    description:
      "A TopFusion é uma indústria brasileira especializada em sistemas técnicos para aplicações hidráulicas e industriais, com foco em desempenho, confiabilidade e durabilidade.",
    buttonLabel: "Conhecer Sistemas e Aplicações",
    cards: [
      {
        title: "Vácuo e Rede PEAD",
        description: "Aplicações técnicas para ambientes industriais e especiais.",
        icon: Droplet,
      },
      {
        title: "Água Quente e Fria",
        description: "Soluções em PP-R para instalações hidráulicas de alta durabilidade.",
        icon: Droplet,
      },
      {
        title: "Ar Comprimido",
        description: "Sistemas seguros e eficientes para redes industriais.",
        icon: Droplet,
      },
      {
        title: "Sistemas Hidráulicos Preventivos",
        description: "Tecnologia para combate e prevenção em redes pressurizadas.",
        icon: Droplet,
        featured: true,
      },
    ],
  },
    {
    name: "TopFiber",
    description:
      "A TopFiber desenvolve soluções em fibra de vidro para reforço estrutural, atendendo obras que exigem resistência, durabilidade e alto desempenho técnico.",
    buttonLabel: "Ver Soluções em Fibra Estrutural",
    cards: [
      {
        title: "Vergalhões de Fibra de Vidro",
        description: "Reforço estrutural avançado com leveza e alta resistência.",
        icon: Droplet,
      },
      {
        title: "Telas de Fibra para Concreto",
        description: "Distribui cargas e controla fissuras em pisos e lajes.",
        icon: Droplet,
      },
      {
        title: "Suporte Técnico & Logística",
        description: "Projetado para resistir corrosão em obras expostas e industriais.",
        icon: Droplet,
      },
      {
        title: "Soluções para Ambientes Agressivos",
        description: "Consultoria especializada + entregas ágeis em todo o Brasil.",
        icon: Droplet,
        featured: true,
      },
    ],
  },
      {
    name: "TopFlux",
    description:
      "A TopFlux desenvolve válvulas e soluções de controle de fluxo hidráulico, garantindo precisão, segurança e eficiência em sistemas de água e infraestrutura.",
    buttonLabel: "Ver Soluções em Controle de Fluxo",
    cards: [
      {
        title: "Válvulas Redutoras de Pressão",
        description: "Controle preciso e proteção do sistema hidráulico.",
        icon: Droplet,
      },
      {
        title: "Válvulas de Controle de Nível",
        description: "Automação segura para reservatórios e tanques.",
        icon: Droplet,
      },
      {
        title: "Válvulas de Controle e Seção",
        description: "Direcionamento e interrupção do fluxo com eficiência.",
        icon: Droplet,
      },
      {
        title: "Soluções Hidráulicas Sob Medida",
        description: "Projetos personalizados com suporte técnico.",
        icon: Droplet,
        featured: true,
      },
    ],
  },
]

import { Reveal } from "../animations/Reveal"
import { ArrowUpRight, Droplet } from "lucide-react"

export function CompaniesSection() {
  return (
    <section className="empresas flex w-full flex-col gap-24 px-4 pt-20 lg:min-h-screen lg:gap-32 lg:px-0 lg:pt-24">

      {/* Header */}
      <Reveal direction="left" delay={0.1}>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl font-semibold lg:text-3xl">Grupo TF</h2>
          <p className="text-sm text-neutral-500 lg:text-base">
            Conheça as empresas que fazem parte do nosso ecossistema.
          </p>
        </div>
      </Reveal>

      {/* Empresas */}
      {companies.map((company, companyIndex) => (
        <div
          key={company.name}
          className="
            flex w-full flex-col gap-12
            lg:flex-row lg:items-start lg:justify-between lg:gap-20
          "
        >
          {/* Left */}
          <Reveal direction="left" delay={0.2 + companyIndex * 0.2}>
            <div className="flex w-full flex-col items-start gap-3 lg:gap-4">
              <h3 className="text-xl font-semibold border-b-2 border-[rgb(var(--brand-secondary))] lg:text-2xl">
                {company.name}
              </h3>

              <p className="max-w-md text-sm text-neutral-500 lg:text-base">
                {company.description}
              </p>

              <button
                className="
                  relative overflow-hidden
                  flex items-center gap-2
                  rounded-md border border-[rgb(var(--brand-secondary))]
                  px-4 py-2.5 text-sm
                  text-[rgb(var(--brand-secondary))]
                  group
                  lg:px-4 lg:py-3 lg:text-base
                "
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[rgb(var(--brand-secondary))] transition-all duration-300 group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  {company.buttonLabel}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 lg:size-5"
                  />
                </span>
              </button>
            </div>
          </Reveal>

          {/* Right - Cards */}
          <div
            className="
              flex w-full flex-wrap justify-center gap-4
              lg:w-1/2 lg:justify-end lg:gap-6
            "
          >
            {company.cards.map((card, cardIndex) => {
              const Icon = card.icon
              const delay = 0.3 + cardIndex * 0.08

              return (
                <Reveal key={card.title} direction="up" delay={delay}>
                  <div
                    className={`
                      flex flex-col gap-2 rounded-xl p-3 text-sm
                      ${card.featured
                        ? "bg-[rgb(var(--brand-secondary))] text-white max-w-[260px]"
                        : "border border-neutral-200 bg-white max-w-[220px]"
                      }
                      lg:p-4 lg:text-base
                      ${card.featured ? "lg:max-w-[300px]" : "lg:max-w-[250px]"}
                    `}
                  >
                    <div
                      className={`
                        flex h-9 w-9 items-center justify-center rounded-md
                        lg:h-10 lg:w-10
                        ${card.featured
                          ? "bg-white/20"
                          : "bg-[rgb(var(--brand-secondary))]/10"
                        }
                      `}
                    >
                      <Icon
                        size={18}
                        className={
                          card.featured
                            ? "text-white"
                            : "text-[rgb(var(--brand-secondary))]"
                        }
                      />
                    </div>

                    <div>
                      <h4 className="font-medium">{card.title}</h4>
                      <p
                        className={`mt-1 text-xs lg:mt-2 lg:text-sm
                          ${card.featured
                            ? "text-white/80"
                            : "text-neutral-500"
                          }
                        `}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
