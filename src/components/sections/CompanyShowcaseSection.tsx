import { SectionHeader } from "../ui/layout/SectionHeader"
import { CompanyBlock } from "../ui/layout/CompanyBlock"
import {
  Droplet,
  Wind,
  Flame,
  Fuel,
  Grid2x2,
  Grid3x3,
  Sliders,
  Gauge,
  ArrowLeftRight,
  Settings,
  Wrench,
  Waves,
  Cloud,
} from "lucide-react"

import topfusion from "../../assets/img/logo/topfusion.png"
import topfiber from "../../assets/img/logo/topfiber.png"
import topflux from "../../assets/img/logo/topflux.png"
import joelhoTopFire from "../../assets/img/products/fire/joelho.png"
import teTopFire from "../../assets/img/products/fire/te.png"
import tuboTopFire from "../../assets/img/products/fire/tubo.png"
import adaptadorTopGas from "../../assets/img/products/gas/adaptador.png"
import multicamadaTopGas from "../../assets/img/products/gas/multicamada-gas.png"
import altavazaoTopFlux from "../../assets/img/products/valvula/altavazao.png"
import ajustavelTopFlux from "../../assets/img/products/valvula/ajustavel.png"
import pressaoTopFlux from "../../assets/img/products/valvula/pressao.png"

export const companies = [
  {
  image: topfusion,
  name: "TopFusion",
  description:
    "A TopFusion é uma indústria brasileira especializada em sistemas técnicos para aplicações hidráulicas e industriais, com foco em desempenho, confiabilidade e durabilidade.",
  buttonLabel: "Conhecer Sistemas e Aplicações",
  href: "https://topfusion.com.br",
  target: "topfusion",
  cards: [
    {
      title: "Top Gás",
      description: "Soluções seguras para condução de gás em aplicações técnicas e industriais.",
      icon: Fuel,
      products: [
        {
          image: multicamadaTopGas, // inserir URL se disponível
          title: "Tubo Multicamadas para Gás",
          description:
            "Tubo TOPGAS PE/AL/PE com conexões em latão, ideal para sistemas de gás até 5 bar de pressão.", // linha Topfusion para gás
        },
        {
          image: "",
          title: "Conexão em Latão para Gás",
          description:
            "Conexão de latão para sistemas de gás, garantindo estanqueidade e durabilidade.", 
        },
        {
          image: adaptadorTopGas,
          title: "Adaptador para Rede de Gás",
          description:
            "Adaptador para conexão entre diferentes diâmetros em rede de gás TOPGAS.",
        },
      ],
    },
    {
      title: "Top Hidro",
      description: "Sistemas em PP-R para água quente e fria em instalações hidráulicas.",
      icon: Droplet,
      products: [
        {
          image: "",
          title: "Tubo Água Fria TopHidro",
          description:
            "Tubo PP-R para água fria PN-12,5 disponível em vários diâmetros (20–160 mm).", // linha Tophidro
        },
        {
          image: "",
          title: "Tubo Água Quente TopHidro",
          description:
            "Tubo PP-R para água quente com alta resistência térmica e durabilidade.",
        },
        {
          image: "",
          title: "União PP-R TopHidro",
          description:
            "Conexão união para sistemas hidráulicos PP-R, garantindo junta estanque.",
        },
      ],
    },
    {
      title: "Top Air",
      description: "Soluções em PP-R para redes de ar comprimido industriais.",
      icon: Wind,
      products: [
        {
          image: "",
          title: "Joelho 45° TopAir",
          description:
            "Joelho em PPR para redes de ar comprimido, projetado para mudança de direção com baixa perda de carga.", // joelho TopAir
        },
        {
          image: "",
          title: "CAP 160 mm TopAir",
          description:
            "Tampa PP-R para fechamento seguro de tubulações de ar comprimido.",
        },
        {
          image: "",
          title: "Tubo em PPR 50 mm TopAir",
          description:
            "Tubo PP-R para ar comprimido em variadas bitolas até 160 mm.",
        },
      ],
    },
    {
      title: "Top Fire",
      description: "Tubulações para sistemas de combate e prevenção a incêndio.",
      icon: Flame,
      featured: true,
      products: [
        {
          image: tuboTopFire,
          title: "Tubo TopFire PP-R",
          description:
            "Tubo em PP-R classe 2 para redes hidráulicas de combate a incêndio conforme normas.",
        },
        {
          image: joelhoTopFire,
          title: "Joelho 90° TopFire",
          description:
            "Conexão joelho para desvio em redes de incêndio com alta resistência térmica.",
        },
        {
          image: teTopFire,
          title: "Tê PP-R TopFire",
          description:
            "Tê em PP-R para ramificações em rede de combate a incêndio.",
        },
      ],
    },
    {
      title: "Top Vacuum",
      description: "Sistemas para condução a vácuo em aplicações industriais.",
      icon: Cloud,
      products: [
        {
          image: "",
          title: "Tubo TopVacuum PP-R",
          description:
            "Tubo em PP-R para condução a vácuo, resistente até cerca de 12 kgf/cm².", // info TopVacuum
        },
        {
          image: "",
          title: "Curva sobrepasso TopVacuum",
          description:
            "Curva especializada para transposição de linhas de vácuo sem interferência.",
        },
        {
          image: "",
          title: "Conexão T TopVacuum",
          description:
            "Conector em T para redes a vácuo, garantindo vedação por termofusão.",
        },
      ],
    },
    {
      title: "Top Water",
      description: "Tubulações em PEAD para água potável, adução e saneamento.",
      icon: Waves,
      products: [
        {
          image: "",
          title: "Tubo PEAD TopWater",
          description:
            "Tubo em polietileno de alta densidade para redes de água potável.", // TopWater
        },
        {
          image: "",
          title: "Tubo PEAD 110 mm",
          description:
            "Tubo PEAD em diâmetro 110 mm para adução e saneamento.",
        },
        {
          image: "",
          title: "Conexão PEAD TopWater",
          description:
            "Conexão PEAD para redes de água/ esgoto, resistente a impactos.",
        },
      ],
    },
    {
      title: "Top Oil",
      description: "Soluções para condução de óleos e fluídos hidráulicos.",
      icon: Sliders,
      products: [
        {
          image: "",
          title: "Tubo TopOil PE-RT",
          description:
            "Tubo para condução de óleos e fluídos hidráulicos (vegetais, minerais e sintéticos).",
        },
        {
          image: "",
          title: "Conexão para TopOil",
          description:
            "Conexões específicas para sistemas de óleo hidráulico.",
        },
        {
          image: "",
          title: "Adaptador TopOil",
          description:
            "Adaptador para transição de diâmetros em sistemas de óleo.",
        },
      ],
    },
    {
      title: "Ferramentas & Acessórios",
      description: "Ferramentas de termofusão e acessórios para instalação.",
      icon: Wrench,
      products: [
        {
          image: "",
          title: "Termofusora 20–63 mm",
          description:
            "Termofusora elétrica 220 V para fusão de tubos e conexões PPR até 63 mm.",
        },
        {
          image: "",
          title: "Termofusora 75–110 mm",
          description:
            "Termofusora robusta para diâmetros médios até 110 mm.P",
        },
        {
          image: "",
          title: "Tesoura Corta Tubos",
          description:
            "Ferramenta de corte para tubos PP-R durante a instalação.",
        },
      ],
    },
  ],
},
{
  image: topfiber,
  name: "TopFiber",
  description:
    "A TopFiber desenvolve soluções em fibra de vidro para reforço estrutural, atendendo obras que exigem resistência, durabilidade e alto desempenho técnico.",
  buttonLabel: "Ver Soluções em Fibra Estrutural",
  href: "https://topfiber.ind.br",
  target: "topfiber",
  cards: [
    {
      title: "Vergalhões de Fibra de Vidro",
      description: "Reforço estrutural leve, resistente e anticorrosivo.",
      icon: Grid2x2,
      products: [
        {
          image: "",
          title: "Vergalhão GFRP 8 mm",
          description:
            "Vergalhão em fibra de vidro (GFRP) para substituição do aço em estruturas sujeitas à corrosão.",
        },
        {
          image: "",
          title: "Vergalhão GFRP 10 mm",
          description:
            "Alta resistência à tração, ideal para obras industriais e ambientes agressivos.",
        },
        {
          image: "",
          title: "Vergalhão GFRP 12 mm",
          description:
            "Solução estrutural leve, com longa vida útil e baixa manutenção.",
        },
      ],
    },
    {
      title: "Telas de Fibra de Vidro",
      description: "Distribuição de cargas e controle de fissuras.",
      icon: Grid3x3,
      featured: true,
      products: [
        {
          image: "",
          title: "Tela Estrutural GFRP",
          description:
            "Tela em fibra de vidro para reforço de lajes, pisos industriais e pavimentos.",
        },
        {
          image: "",
          title: "Tela para Revestimentos",
          description:
            "Controle de fissuras em argamassas, rebocos e fachadas.",
        },
        {
          image: "",
          title: "Tela Técnica Sob Medida",
          description:
            "Produção personalizada conforme projeto estrutural.",
        },
      ],
    },
  ],
},
 {
  image: topflux,
  name: "TopFlux",
  description:
    "A TopFlux desenvolve válvulas e soluções de controle de fluxo hidráulico, garantindo precisão, segurança e eficiência.",
  buttonLabel: "Ver Soluções em Controle de Fluxo",
  href: "https://topflux.com.br",
  target: "topflux",
  cards: [
    {
      title: "Válvulas Redutoras de Pressão",
      description: "Controle preciso e proteção do sistema hidráulico.",
      icon: Sliders,
      products: [
        {
          image: pressaoTopFlux,
          title: "Válvula Redutora de Pressão PRV",
          description:
            "Redução e estabilização da pressão em redes hidráulicas.",
        },
        {
          image: ajustavelTopFlux,
          title: "Válvula Redutora Ajustável",
          description:
            "Permite regulagem fina da pressão conforme necessidade do sistema.",
        },
        {
          image: altavazaoTopFlux,
          title: "PRV para Alta Vazão",
          description:
            "Indicada para sistemas industriais e grandes adutoras.",
        },
      ],
    },
    {
      title: "Válvulas de Controle de Nível",
      description: "Automação segura para reservatórios e tanques.",
      icon: Gauge,
      products: [
        {
          image: "",
          title: "Válvula de Boia Hidráulica",
          description:
            "Controle automático de nível sem necessidade de energia elétrica.",
        },
        {
          image: "",
          title: "Válvula de Nível Modulante",
          description:
            "Regulagem progressiva do fluxo conforme o nível do reservatório.",
        },
        {
          image: "",
          title: "Válvula de Nível Industrial",
          description:
            "Aplicações robustas em sistemas de grande porte.",
        },
      ],
    },
    {
      title: "Válvulas de Controle e Seção",
      description: "Direcionamento e interrupção eficiente do fluxo.",
      icon: ArrowLeftRight,
      products: [
        {
          image: "",
          title: "Válvula Gaveta",
          description:
            "Isolamento total do fluxo em redes hidráulicas.",
        },
        {
          image: "",
          title: "Válvula Borboleta",
          description:
            "Controle rápido e eficiente de abertura e fechamento.",
        },
        {
          image: "",
          title: "Válvula de Seccionamento",
          description:
            "Manutenção segura de trechos da rede.",
        },
      ],
    },
    {
      title: "Soluções Sob Medida",
      description: "Projetos personalizados com suporte técnico especializado.",
      icon: Settings,
      featured: true,
      products: [
        {
          image: "",
          title: "Válvula Especial Customizada",
          description:
            "Projeto sob demanda conforme especificações do cliente.",
        },
        {
          image: "",
          title: "Conjunto Hidráulico Integrado",
          description:
            "Solução completa para controle e proteção do sistema.",
        },
        {
          image: "",
          title: "Consultoria Técnica TopFlux",
          description:
            "Engenharia aplicada para dimensionamento e escolha da válvula ideal.",
        },
      ],
    },
  ],
},
]


export function CompanyShowcaseSection() {
  return (
    <section aria-labelledby="empresas-title" className="empresas flex mx-auto max-w-7xl px-6 flex-col gap-24 pt-20 lg:min-h-screen lg:gap-32 lg:pt-24">
      <SectionHeader
      id="empresas-title"
        title="Grupo TF"
        description="Conheça as empresas que fazem parte do nosso ecossistema."
      />

      <ul className="flex flex-col gap-24 lg:gap-32">
  {companies.map((company, index) => (
    <li key={company.name}>
      <CompanyBlock company={company} index={index} />
    </li>
  ))}
</ul>

    </section>
  )
}
