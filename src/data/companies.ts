import {
  Droplet, Flame, Gauge, Settings, Wrench, Waves, Home,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

/* ------------------------------ LOGOS ------------------------------ */
import ivmitaly from "../assets/img/logo/ivmitaly.webp"
import forthy from "../assets/img/logo/forthy.webp"
import brv from "../assets/img/logo/brv.webp"
import roddex from "../assets/img/logo/roddex.webp"
import bermad from "../assets/img/logo/Layer_11.svg"
import hidrosmartLogo from "../assets/img/logo/images.jpg"
// TODO: adicionar os logos quando tiver os arquivos
import tecnofluidosLogo from "../assets/img/logo/tecnofluidos.png"
import conceittoLogo from "../assets/img/logo/conceitto.svg"

/* ------------------------------ BRV ------------------------------ */
import brvGasEsferaAngular from "../assets/img/products/brv/gas/esfera-angular.webp"
import brvGasPassagemTotal from "../assets/img/products/brv/gas/passagem-total.webp"
import brvIndustrialEsfera3Vias from "../assets/img/products/brv/industrial/esfera-3-vias.webp"
import brvIndustrialRegistroGaveta from "../assets/img/products/brv/industrial/registro-gaveta.webp"
import brvPressaoRedutoraPressao from "../assets/img/products/brv/pressao/redutora-pressao.webp"
import brvSaneamentoRegistroGaveta from "../assets/img/products/brv/saneamento/registro-gaveta.webp"
import brvSaneamentoValvulaPead from "../assets/img/products/brv/saneamento/valvula-pead.webp"

/* ------------------------------ IVM ------------------------------ */
import ivmGasValvulaAngular from "../assets/img/products/ivm/gas/valvula-angular.webp"
import ivmGasValvulaEsfera from "../assets/img/products/ivm/gas/valvula-esfera.webp"
import ivmIndustrialValvulaY from "../assets/img/products/ivm/industrial/valvula-y.webp"
import ivmIndustrialValvulaEliminadoraDeAr from "../assets/img/products/ivm/industrial/valvula-eliminadora-de-ar.webp"
import ivmIndustrialValvulaEsfera3ViasFemeaIndustrial from "../assets/img/products/ivm/industrial/valvula-esfera-3-vias-femea-industrial.webp"
import ivmSaneamentoRegistroGaveta from "../assets/img/products/ivm/saneamento/registro-gaveta.webp"
import ivmSaneamentoValvulaEsferaPead from "../assets/img/products/ivm/saneamento/valvula-esfera-macho-x-adaptador-p-tubo-pead-saneamento.webp"
import ivmFluxoValvulaRetencao from "../assets/img/products/ivm/fluxo/valvula-retencao-horizontal-portinhola.webp"

/* ------------------------------ RODDEX ------------------------------ */
import roddexChuveiroChuveiroComDucha from "../assets/img/products/roddexx/chuveiro/chuveiro-com-duxa.webp"
import roddexChuveiroDesviador from "../assets/img/products/roddexx/chuveiro/desviador.webp"
import roddexChuveiroDuchaHigienica from "../assets/img/products/roddexx/chuveiro/ducha-higienica.webp"
import roddexCozinhaTorneiraMonocamada from "../assets/img/products/roddexx/cozinha/torneira-monocamada.webp"
import roddexCozinhaValvulaAmericana from "../assets/img/products/roddexx/cozinha/valvula-americana.webp"
import roddexHotelCabide from "../assets/img/products/roddexx/hotel/cabide.webp"
import roddexHotelPortaMalas from "../assets/img/products/roddexx/hotel/porta-malas.webp"
import roddexHotelSacoHigienico from "../assets/img/products/roddexx/hotel/saco-higienico.webp"
import roddexBanheiroLavatorioValvula from "../assets/img/products/roddexx/banheiro/lavatorio-valvula.webp"
import roddexBanheiroMictorio from "../assets/img/products/roddexx/banheiro/mictorio.webp"
import roddexBanheiroTorneira from "../assets/img/products/roddexx/banheiro/torneira.webp"

/* ------------------------------ FORTHY ------------------------------ */
import forthyKitCavaleteDN25 from "../assets/img/products/forthy/kit-cavaletes/Kit-Cavalete-Simples-DN25-1-V6.webp"
import forthyKitCavaleteDN80 from "../assets/img/products/forthy/kit-cavaletes/Site-Kit-Cavalete-Simples-DN80-3-com-filtro-V6.webp"
import forthyKitReducaoDN25XDN20 from "../assets/img/products/forthy/kit-com-reducao/DN25XDN20.jpg"
import forthyKitReducaoDN40XDN25 from "../assets/img/products/forthy/kit-com-reducao/Site-Kit-Cavalete-Simples-Red-DN40-X-DN25-1-e-meia-X-1-V6.webp"
import forthyKitReducaoDN80XDN50 from "../assets/img/products/forthy/kit-com-reducao/Site-Kit-Cavalete-Simples-Red-DN80-X-DN50-3-X-2-com-filtro-V6.webp"
import forthyBuchaReducao from "../assets/img/products/forthy/conexao/Bucha-de-Reducao.webp"
import forthyCotovelo90Femea from "../assets/img/products/forthy/conexao/Cotovelo-90-Femea.webp"
import forthyFlangeSextavado from "../assets/img/products/forthy/conexao/Flange-com-Sextavado.webp"
import forthyLuvaFemea from "../assets/img/products/forthy/conexao2/Luva-Femea-1.webp"
import forthyNipleDuplo from "../assets/img/products/forthy/conexao2/Niple-Duplo.webp"
import forthyUniaoAssentoPlano from "../assets/img/products/forthy/conexao2/Uniao-Assento-Plano.webp"

/* ------------------------------ BERMAD ------------------------------ */
import bermad720RedutoraPressao from "../assets/img/products/bermad/720-valvularedutoradepressao.webp"
import bermad700Sigma from "../assets/img/products/bermad/modelo-700.webp"
import bermad730AlivioPressao from "../assets/img/products/bermad/modelo-730.webp"
import bermad735M from "../assets/img/products/bermad/modelo-735-m.webp"
import bermad75065 from "../assets/img/products/bermad/modelo-750-65.webp"
import bermad75066 from "../assets/img/products/bermad/modelo-750-66.webp"
import bermad757 from "../assets/img/products/bermad/modelo-757.webp"
import bermadIR12055 from "../assets/img/products/bermad/modelo-IR-120-55.webp"
import bermadIR420 from "../assets/img/products/bermad/modelo-IR-420.webp"
import bermadIR900M0 from "../assets/img/products/bermad/modelo-IR-900-M0.webp"
import bermad735 from "../assets/img/products/bermad/modelo735.webp"

/* ------------------------------ TYPES ------------------------------ */

/** Quem representa / distribui a empresa. */
export type Channel = "conceitto" | "hidrosmart"

/**
 * brand        -> marca/fabricante (IVM, Forthy, BRV, Roddex, Bermad, TecnoFluidos)
 * distributor  -> HidroSmart
 * sales-force  -> Conceitto
 */
export type CompanyKind = "brand" | "distributor" | "sales-force"

/** Grupos corporativos. Hoje só existe o Grupo Italy. */
export type Group = "italy"

export type Product = {
  image?: string
  title: string
  description: string
}

export type CompanyCard = {
  title: string
  description?: string
  icon: LucideIcon
  featured?: boolean
  products: Product[]
}

export type Company = {
  target: string
  name: string
  kind: CompanyKind

  /** Grupo ao qual a empresa pertence (ex.: "italy"). Vazio = parceira. */
  group?: Group
  image: string
  description: string
  /** Título de destaque da página da empresa (opcional) */
  headline?: string
  /** Parágrafos de texto institucional (opcional) */
  about?: string[]
  buttonLabel: string
  href: string
  /** Quem representa esta marca. Ex.: ["conceitto"] */
  representation: Channel[]
  /** Quem distribui esta marca. Ex.: ["hidrosmart"] */
  distribution: Channel[]
  cards: CompanyCard[]
}

/* ------------------------------ DATA ------------------------------ */

export const companies: Company[] = [
  /* ============================ HIDROSMART ============================ */
  {
    target: "hidrosmart",
    name: "HidroSmart",
    kind: "distributor",
    image: hidrosmartLogo,
    description:
      "A HidroSmart é a distribuidora dos produtos do ecossistema CHP Smart. Reúne em um só lugar válvulas, kits cavalete, metais sanitários e soluções de controle hidráulico das marcas parceiras, para atender revendas, construtoras e obras de infraestrutura.",
    buttonLabel: "Ver produtos HidroSmart",
    href: "#catalogo",
    representation: [],
    distribution: [],
    cards: [
      {
        title: "Saneamento e Cavaletes",
        description: "Kits e registros para ligação e distribuição de água.",
        icon: Droplet,
        featured: true,
        products: [
          {
            image: forthyKitCavaleteDN25,
            title: "Kit Cavalete Simples DN25 1″ V6",
            description: "Forthy. Ligação de água em instalações residenciais.",
          },
          {
            image: forthyKitReducaoDN40XDN25,
            title: "Kit Cavalete com Redução DN40 x DN25",
            description: "Forthy. Adequação entre diferentes bitolas.",
          },
          {
            image: ivmSaneamentoRegistroGaveta,
            title: "Registro de Gaveta",
            description: "IVM Italy. Controle e isolamento de trechos da rede.",
          },
        ],
      },
      {
        title: "Gás e Indústria",
        description: "Válvulas para condução de gás e aplicações industriais.",
        icon: Flame,
        products: [
          {
            image: ivmGasValvulaEsfera,
            title: "Válvula Esfera para Gás",
            description: "IVM Italy. Vedação confiável para redes de gás.",
          },
          {
            image: brvGasEsferaAngular,
            title: "Válvula Angular para Gás",
            description: "BRV. Instalações residenciais e comerciais.",
          },
          {
            image: brvIndustrialEsfera3Vias,
            title: "Válvula Esfera 3 Vias",
            description: "BRV. Controle e direcionamento de fluxo.",
          },
        ],
      },
      {
        title: "Controle de Pressão",
        description: "Proteção e estabilidade para redes hidráulicas.",
        icon: Gauge,
        products: [
          {
            image: bermad720RedutoraPressao,
            title: "Modelo 720 - Válvula Redutora de Pressão",
            description: "Bermad. Mantém a pressão de saída constante.",
          },
          {
            image: bermad730AlivioPressao,
            title: "Modelo 730 - Válvula de Alívio de Pressão",
            description: "Bermad. Protege tubulações contra sobrepressão.",
          },
          {
            image: brvPressaoRedutoraPressao,
            title: "Válvula Redutora de Pressão",
            description: "BRV. Regulagem e estabilização da pressão.",
          },
        ],
      },
      {
        title: "Metais e Hotelaria",
        description: "Acabamento moderno para banheiros e hotéis.",
        icon: Home,
        products: [
          {
            image: roddexBanheiroTorneira,
            title: "Torneira Sensorizada",
            description: "Roddex. Higiene e economia de água.",
          },
          {
            image: roddexChuveiroDuchaHigienica,
            title: "Ducha Higiênica com Registro",
            description: "Roddex. Kit completo para instalação.",
          },
          {
            image: roddexHotelCabide,
            title: "Cabide para Roupas",
            description: "Roddex. Acessório resistente para hotelaria.",
          },
        ],
      },
    ],
  },

  /* ============================ CONCEITTO ============================ */
  {
    target: "conceitto",
    name: "Conceitto",
    kind: "sales-force",
    image: conceittoLogo, // TODO: logo da Conceitto
    description:
      "Força de vendas do ecossistema CHP Smart, representando marcas líderes em soluções hidráulicas e de controle de fluidos.",
    buttonLabel: "Conhecer a Conceitto",
    href: "#",
    representation: [],
    distribution: [],
    cards: [],
  },

  /* ============================ IVM ITALY ============================ */
  {
    target: "italy",
    name: "IVM Italy",
    kind: "brand",
    group: "italy",
    image: ivmitaly,
    description:
      "A IVM Italy desenvolve válvulas, registros e soluções hidráulicas para saneamento, gás e aplicações industriais, combinando tecnologia de forjamento, alta resistência e rigoroso controle de qualidade.",
    headline: "Engenharia, precisão e confiabilidade",
    about: [
      "Soluções hidráulicas e gás para projetos que exigem desempenho. A IVM Italy representa a tradição e a tecnologia italiana aplicadas ao desenvolvimento de soluções para sistemas hidráulicos.",
      "Voltada às necessidades de profissionais de engenharia, instaladores, construtoras e distribuidores, a marca pode integrar projetos que buscam qualidade, precisão e confiabilidade na especificação de componentes hidráulicos.",
      "Os componentes hidráulicos devem atender às exigências de cada aplicação, considerando pressão de trabalho, temperatura, materiais e condições de instalação. A seleção correta contribui para o desempenho, a durabilidade e a segurança operacional dos sistemas.",
      "Em projetos hidráulicos, cada componente tem uma função importante. A qualidade dos materiais, a precisão construtiva e a compatibilidade com a instalação são fatores essenciais para alcançar resultados consistentes.",
    ],
    buttonLabel: "Conhecer Linha Industrial e Saneamento",
    href: "https://italy.com.br",
    representation: ["conceitto"],
    distribution: ["hidrosmart"],
    cards: [
      {
        title: "Linha Industrial",
        description: "Válvulas e componentes para aplicações industriais de alta exigência.",
        icon: Settings,
        products: [
          {
            image: ivmIndustrialValvulaEsfera3ViasFemeaIndustrial,
            title: "Válvula Esfera 3 Vias",
            description: "Controle e direcionamento de fluxo para sistemas industriais.",
          },
          {
            image: ivmIndustrialValvulaEliminadoraDeAr,
            title: "Válvula Eliminadora de Ar",
            description: "Elimina bolsas de ar em sistemas pressurizados.",
          },
          {
            image: ivmIndustrialValvulaY,
            title: "Filtro Y Industrial",
            description: "Proteção de equipamentos contra partículas e impurezas.",
          },
        ],
      },
      {
        title: "Linha Gás",
        description: "Segurança e vedação para instalações de gás.",
        icon: Flame,
        featured: true,
        products: [
          {
            image: ivmGasValvulaEsfera,
            title: "Válvula Esfera para Gás",
            description: "Vedação confiável para redes residenciais e industriais.",
          },
          {
            image: ivmGasValvulaAngular,
            title: "Válvula Angular para Gás",
            description: "Instalação prática em pontos de derivação.",
          },
          {
            image: "",
            title: "Registro para Gás",
            description: "Controle seguro do fornecimento.",
          },
        ],
      },
      {
        title: "Saneamento",
        description: "Produtos homologados para redes públicas de água.",
        icon: Droplet,
        products: [
          {
            image: ivmSaneamentoValvulaEsferaPead,
            title: "Válvula Esfera PEAD",
            description: "Aplicação em sistemas de abastecimento e distribuição.",
          },
          {
            image: "",
            title: "Cavalete para Hidrômetro",
            description: "Solução para medição e distribuição de água.",
          },
          {
            image: ivmSaneamentoRegistroGaveta,
            title: "Registro de Gaveta",
            description: "Controle e isolamento de trechos da rede.",
          },
        ],
      },
      {
        title: "Controle de Fluxo",
        description: "Soluções para regulagem e direcionamento de fluidos.",
        icon: Gauge,
        products: [
          {
            image: ivmFluxoValvulaRetencao,
            title: "Válvula Retenção",
            description: "Impede o retorno do fluxo na tubulação.",
          },
          {
            image: "",
            title: "Válvula Controladora",
            description: "Regulagem eficiente para diferentes aplicações.",
          },
          {
            image: "",
            title: "Válvula de Alívio",
            description: "Proteção contra sobrepressão.",
          },
        ],
      },
    ],
  },

  /* ============================ FORTHY ============================ */
  {
    target: "forthy",
    name: "Forthy",
    kind: "brand",
    group: "italy",
    image: forthy,
    description:
      "A Forthy desenvolve kits cavalete, conjuntos hidráulicos e soluções para saneamento, atendendo concessionárias, construtoras e obras de infraestrutura em todo o Brasil.",
    headline: "Praticidade e confiabilidade para ligações de água",
    about: [
      "A FORTHY apresenta soluções em cavaletes hidráulicos destinadas a aplicações em sistemas de ligação de água, atendendo às necessidades de obras, instalações prediais e projetos de saneamento, conforme as especificações de cada produto.",
      "Desenvolvidos para compor conjuntos de medição e ligação de água, os cavaletes são componentes importantes na organização da instalação hidráulica e na integração entre a rede de abastecimento e o imóvel.",
      "A escolha do cavalete deve considerar o padrão exigido pela concessionária, o diâmetro nominal, os materiais, as conexões e a compatibilidade com o hidrômetro e os demais componentes da instalação. A correta especificação contribui para uma montagem organizada e para a confiabilidade do conjunto hidráulico.",
    ],
    buttonLabel: "Ver Kits Cavalete e Soluções",
    href: "https://www.forthy.com.br",
    representation: ["conceitto"],
    distribution: ["hidrosmart"],
    cards: [
      {
        title: "Kits Cavalete",
        description: "Kits completos para ligação de água conforme normas técnicas.",
        icon: Droplet,
        featured: true,
        products: [
          {
            image: forthyKitCavaleteDN25,
            title: "Kit Cavalete Simples DN25 1″ V6",
            description: "Kit para ligação de água em instalações residenciais.",
          },
          {
            image: "",
            title: "Kit Cavalete Simples DN40 1.1/2″ V6",
            description: "Modelo para redes de maior vazão.",
          },
          {
            image: forthyKitCavaleteDN80,
            title: "Kit Cavalete Simples DN80 3″ com Filtro V6",
            description: "Kit completo para aplicações de maior porte.",
          },
        ],
      },
      {
        title: "Kits com Redução",
        description: "Modelos com redução para diferentes diâmetros de tubulação.",
        icon: Settings,
        products: [
          {
            // TODO: DN25XDN20.jpg está importado mas não usado; trocar "" por forthyKitReducaoDN25XDN20 se quiser exibir
            image: "",
            title: "Kit Cavalete Simples com Redução DN25 x DN20 1″ x 3/4″ V6",
            description: "Ideal para adaptações em ligações de água.",
          },
          {
            image: forthyKitReducaoDN40XDN25,
            title: "Kit Cavalete Simples com Redução DN40 x DN25 1.1/2″ x 1″ V6",
            description: "Permite adequação entre diferentes bitolas.",
          },
          {
            image: forthyKitReducaoDN80XDN50,
            title: "Kit Cavalete Simples com Redução DN80 x DN50 3″ x 2″ com Filtro V6",
            description: "Solução para instalações de alta capacidade.",
          },
        ],
      },
      {
        title: "Conexões",
        description: "Componentes para montagem de sistemas hidráulicos.",
        icon: Wrench,
        products: [
          {
            image: forthyBuchaReducao,
            title: "Bucha de Redução",
            description: "Adaptação entre diferentes diâmetros de tubulação.",
          },
          {
            image: forthyCotovelo90Femea,
            title: "Cotovelo 90º Fêmea x Fêmea",
            description: "Mudança de direção com vedação segura.",
          },
          {
            image: forthyFlangeSextavado,
            title: "Flange com Sextavado",
            description: "Fixação e montagem em sistemas hidráulicos.",
          },
        ],
      },
      {
        title: "Conexões Especiais",
        description: "Peças para complementação e montagem de instalações.",
        icon: Waves,
        products: [
          {
            image: forthyLuvaFemea,
            title: "Luva Fêmea",
            description: "Conexão para união de tubulações.",
          },
          {
            image: forthyNipleDuplo,
            title: "Niple Duplo",
            description: "Peça para interligação entre conexões roscáveis.",
          },
          {
            image: forthyUniaoAssentoPlano,
            title: "União Assento Plano",
            description: "Facilita a montagem e manutenção de sistemas hidráulicos.",
          },
        ],
      },
    ],
  },

  /* ============================ BRV ============================ */
  {
    target: "brv",
    name: "BRV",
    kind: "brand",
    group: "italy",
    image: brv,
    description:
      "A BRV desenvolve válvulas, registros e soluções para saneamento, gás e aplicações industriais, com foco em desempenho, resistência e confiabilidade operacional.",
    buttonLabel: "Explorar Catálogo BRV",
    href: "https://www.brvvalvulas.com.br",
    representation: [],
    distribution: ["hidrosmart"],
    cards: [
      {
        title: "Linha Industrial",
        description: "Produtos para controle e proteção de sistemas.",
        icon: Settings,
        products: [
          {
            image: brvIndustrialRegistroGaveta,
            title: "Registro Gaveta Industrial",
            description: "Isolamento seguro de linhas hidráulicas.",
          },
          {
            image: "",
            title: "Válvula Eliminadora de Ar",
            description: "Eficiência operacional em redes pressurizadas.",
          },
          {
            image: brvIndustrialEsfera3Vias,
            title: "Válvula Esfera 3 Vias",
            description: "Controle e direcionamento de fluxo.",
          },
        ],
      },
      {
        title: "Linha Gás",
        description: "Soluções certificadas para condução de gás.",
        icon: Flame,
        featured: true,
        products: [
          {
            image: brvGasEsferaAngular,
            title: "Válvula Angular para Gás",
            description: "Instalações residenciais e comerciais.",
          },
          {
            image: brvGasPassagemTotal,
            title: "Válvula Passagem Total",
            description: "Maior vazão e menor perda de carga.",
          },
          {
            image: "",
            title: "Registro para Gás",
            description: "Controle seguro da distribuição.",
          },
        ],
      },
      {
        title: "Controle de Pressão",
        description: "Proteção e estabilidade para sistemas hidráulicos.",
        icon: Gauge,
        products: [
          {
            image: brvPressaoRedutoraPressao,
            title: "Válvula Redutora de Pressão",
            description: "Regulagem e estabilização da pressão da rede.",
          },
          {
            image: "",
            title: "Redutora Industrial",
            description: "Aplicações de maior porte.",
          },
          {
            image: "",
            title: "Conjunto Regulador",
            description: "Controle hidráulico de precisão.",
          },
        ],
      },
      {
        title: "Saneamento",
        description: "Produtos voltados para abastecimento e distribuição de água.",
        icon: Droplet,
        products: [
          {
            image: brvSaneamentoRegistroGaveta,
            title: "Registro Gaveta para Rede",
            description: "Controle operacional em sistemas de saneamento.",
          },
          {
            image: brvSaneamentoValvulaPead,
            title: "Válvula PEAD",
            description: "Aplicação em redes de distribuição.",
          },
          {
            image: "",
            title: "Conjunto de Manobra",
            description: "Operação segura de trechos da rede.",
          },
        ],
      },
    ],
  },

  /* ============================ RODDEX ============================ */
  {
    target: "roddex",
    name: "Roddex",
    kind: "brand",
    group: "italy",
    image: roddex,
    description:
      "A Roddex desenvolve metais sanitários, acessórios para banheiro, cozinha e soluções para hotelaria, combinando design moderno, durabilidade e tecnologia para ambientes residenciais e corporativos.",
    buttonLabel: "Conhecer Linhas para Banheiro e Hotelaria",
    href: "https://www.roddex.com.br",
    representation: [],
    distribution: ["hidrosmart"],
    cards: [
      {
        title: "Linha Hotelaria",
        description:
          "Produtos desenvolvidos para hotéis, pousadas e empreendimentos de alto padrão.",
        icon: Settings,
        featured: true,
        products: [
          {
            image: roddexHotelCabide,
            title: "Cabide para Roupas",
            description: "Acessório resistente e elegante para ambientes hoteleiros.",
          },
          {
            image: roddexHotelSacoHigienico,
            title: "Suporte para Saco Higiênico",
            description: "Acabamento discreto e funcional para banheiros corporativos.",
          },
          {
            image: roddexHotelPortaMalas,
            title: "Porta Malas para Hotel",
            description: "Solução prática para acomodação e conforto dos hóspedes.",
          },
        ],
      },
      {
        title: "Metais para Banheiro",
        description: "Torneiras, válvulas e acessórios com acabamento premium.",
        icon: Droplet,
        products: [
          {
            image: roddexBanheiroLavatorioValvula,
            title: "Válvula para Lavatório Click",
            description: "Sistema de acionamento moderno com excelente vedação.",
          },
          {
            image: roddexBanheiroTorneira,
            title: "Torneira Sensorizada",
            description: "Maior higiene e economia de água para ambientes de alto fluxo.",
          },
          {
            image: roddexBanheiroMictorio,
            title: "Válvula para Mictório Sensorizada",
            description: "Acionamento automático para uso comercial e corporativo.",
          },
        ],
      },
      {
        title: "Chuveiros e Duchas",
        description: "Soluções para conforto, praticidade e design.",
        icon: Waves,
        products: [
          {
            image: roddexChuveiroChuveiroComDucha,
            title: "Chuveiro Tipo Ducha com Braço",
            description: "Design sofisticado e distribuição uniforme da água.",
          },
          {
            image: roddexChuveiroDuchaHigienica,
            title: "Ducha Higiênica com Registro",
            description: "Kit completo para instalação residencial ou corporativa.",
          },
          {
            image: roddexChuveiroDesviador,
            title: "Desviador para Chuveiro",
            description: "Controle eficiente entre diferentes pontos de saída.",
          },
        ],
      },
      {
        title: "Cozinha",
        description: "Misturadores, torneiras e acessórios para cozinhas modernas.",
        icon: Flame,
        products: [
          {
            image: roddexCozinhaTorneiraMonocamada,
            title: "Misturador Monocomando Gourmet",
            description: "Controle preciso de temperatura e vazão.",
          },
          {
            image: "",
            title: "Torneira Gourmet Flexível",
            description: "Maior alcance e praticidade no dia a dia.",
          },
          {
            image: roddexCozinhaValvulaAmericana,
            title: "Válvula Americana para Pia",
            description: "Resistência e acabamento para cubas de cozinha.",
          },
        ],
      },
    ],
  },

  /* ============================ BERMAD ============================ */
  {
    target: "bermad",
    name: "BERMAD",
    kind: "brand",
    image: bermad,
    description:
      "A BERMAD é referência mundial em válvulas hidráulicas de controle, oferecendo soluções inteligentes para abastecimento de água, irrigação, combate a incêndio e aplicações industriais, com foco em eficiência, confiabilidade e automação.",
    headline: "Tecnologia e precisão para o controle hidráulico",
    about: [
      "Soluções inteligentes para saneamento, infraestrutura e gestão da água. A BERMAD é referência internacional em válvulas de controle hidráulico, oferecendo soluções para sistemas de abastecimento de água, saneamento, irrigação e instalações industriais.",
      "Com tecnologia aplicada ao controle de pressão, vazão e nível, suas soluções contribuem para a eficiência operacional, a proteção das redes e a confiabilidade dos sistemas hidráulicos.",
      "A escolha adequada das válvulas de controle é fundamental para o desempenho dos sistemas hidráulicos. A especificação deve considerar as condições de operação, a pressão disponível, a vazão requerida e as características de cada projeto.",
    ],
    buttonLabel: "Conhecer Soluções BERMAD",
    href: "https://bermad.com.br/",
    representation: ["conceitto"],
    distribution: ["hidrosmart"],
    cards: [
      {
        title: "Abastecimento de Água",
        description:
          "Soluções para controle, redução e gerenciamento de pressão em redes de distribuição.",
        icon: Droplet,
        featured: true,
        products: [
          {
            image: bermad720RedutoraPressao,
            title: "Modelo 720 - Válvula Redutora de Pressão",
            description: "Mantém a pressão de saída constante em sistemas de abastecimento.",
          },
          {
            image: bermad735,
            title: "Modelo 735 - Válvula Sustentadora de Pressão",
            description: "Protege a rede mantendo a pressão mínima a montante.",
          },
          {
            image: bermad700Sigma,
            title: "Modelo 700 SIGMA EN/ES",
            description: "Válvula hidráulica de controle para diversas aplicações em redes de água.",
          },
        ],
      },
      {
        title: "Controle de Nível",
        description: "Válvulas automáticas para reservatórios e tanques.",
        icon: Waves,
        products: [
          {
            image: bermad75066,
            title: "Modelo 750-66 - Válvula de Controle de Nível",
            description: "Controle automático do nível de reservatórios.",
          },
          {
            image: bermad75065,
            title: "Modelo 750-65",
            description: "Controle hidráulico preciso para enchimento de tanques.",
          },
          {
            image: bermad757,
            title: "Modelo 757",
            description: "Controle modular para reservatórios de grande porte.",
          },
        ],
      },
      {
        title: "Proteção da Rede",
        description:
          "Equipamentos para segurança operacional e prevenção de danos hidráulicos.",
        icon: Gauge,
        products: [
          {
            image: bermad730AlivioPressao,
            title: "Modelo 730 - Válvula de Alívio de Pressão",
            description: "Protege tubulações contra sobrepressão.",
          },
          {
            image: bermad735M,
            title: "Modelo 735-M",
            description: "Válvula combinada para sustentação e alívio de pressão.",
          },
          {
            image: "",
            title: "Modelo 790",
            description: "Válvula de controle multifuncional para proteção hidráulica.",
          },
        ],
      },
      {
        title: "Irrigação",
        description: "Soluções para automação e controle em sistemas de irrigação agrícola.",
        icon: Settings,
        products: [
          {
            image: bermadIR12055,
            title: "Modelo IR-120-55",
            description: "Válvula hidráulica para sistemas de irrigação.",
          },
          {
            image: bermadIR420,
            title: "Modelo IR-420",
            description: "Controle automático de setores de irrigação.",
          },
          {
            image: bermadIR900M0,
            title: "Modelo IR-900-M0",
            description: "Válvula de controle para aplicações agrícolas de alta eficiência.",
          },
        ],
      },
    ],
  },

  /* ============================ TECNOFLUIDOS ============================ */
  {
    target: "tecnofluidos",
    name: "TecnoFluidos",
    kind: "brand",
    image: tecnofluidosLogo, // TODO: logo da TecnoFluidos
    description:
      "A TecnoFluidos oferece sistemas para condução de água quente e fria, gás, esgoto, drenagem, águas pluviais e calefação. Seu portfólio reúne tubos, conexões e soluções integradas para instalações prediais e projetos de construção civil.",
    headline: "Tecnologia e confiabilidade para instalações hidráulicas e de gás",
    about: [
      "A TecnoFluidos oferece soluções em tubos e conexões para projetos de engenharia, construção civil e instalações prediais, por meio das linhas Acqua System PPR e SIGAS Termofusão.",
      "Com as linhas Acqua System PPR e SIGAS, a TecnoFluidos oferece alternativas para projetos residenciais, comerciais e empreendimentos de engenharia.",
      "Conheça as soluções e consulte os catálogos técnicos para selecionar o sistema adequado ao seu projeto.",
    ],
    buttonLabel: "Conhecer Sistemas de Condução",
    href: "http://tecnofluidos.com.br/",
    representation: ["conceitto"],
    distribution: [],
    cards: [
      {
        title: "Acqua System PPR",
        description:
          "Tubos e conexões em PP-R para instalações prediais de água quente e fria.",
        icon: Droplet,
        featured: true,
        products: [
          {
            image: "",
            title: "União por Termofusão",
            description: "Junções homogêneas para redes de água quente e fria.",
          },
          {
            image: "",
            title: "Resistência à Corrosão",
            description: "Superfície interna lisa e maior durabilidade da rede.",
          },
          {
            image: "",
            title: "Conexões e Acessórios",
            description: "Variedade de peças para diferentes projetos.",
          },
        ],
      },
      {
        title: "SIGAS Termofusão",
        description:
          "Tubos e conexões para condução de GN e GLP, conforme projeto e normas aplicáveis.",
        icon: Flame,
        products: [
          {
            image: "",
            title: "Tubos para Gás",
            description: "Tecnologia de união por termofusão para instalações de gás.",
          },
          {
            image: "",
            title: "Conexões para Gás",
            description: "Proteção contra corrosão em instalações prediais.",
          },
          {
            image: "",
            title: "Soluções Prediais",
            description: "Segurança e confiabilidade quando corretamente especificado e instalado.",
          },
        ],
      },
    ],
  },

  /* ============================ ACQUA SYSTEM ============================ */
  {
    target: "acquasystem",
    name: "Acqua System",
    kind: "brand",
    image: "", // TODO: logo da Acqua System
    description:
      "A Acqua System PPR é um sistema de tubos e conexões em polipropileno copolímero random (PP-R), desenvolvido para instalações hidráulicas prediais de água quente e fria, com união por termofusão.",
    headline: "Acqua System PPR: água quente e fria",
    about: [
      "Sistema de tubos e conexões em polipropileno copolímero random (PP-R), desenvolvido para instalações hidráulicas prediais.",
      "Com união por termofusão, resistência à corrosão e superfície interna lisa, é indicado para redes de água quente e fria em projetos residenciais, comerciais e empreendimentos de engenharia.",
      "Conheça as soluções e consulte os catálogos técnicos para selecionar o sistema adequado ao seu projeto.",
    ],
    buttonLabel: "Conhecer Acqua System PPR",
    href: "http://tecnofluidos.com.br/", // TODO: trocar pelo link específico da Acqua System, se existir
    representation: ["conceitto"],
    distribution: [],
    cards: [
      {
        title: "Água Quente e Fria",
        description:
          "Tubos e conexões em PP-R para instalações hidráulicas prediais.",
        icon: Droplet,
        featured: true,
        products: [
          {
            image: "",
            title: "Tubos PP-R",
            description: "Superfície interna lisa e resistência à corrosão.",
          },
          {
            image: "",
            title: "Conexões e Acessórios",
            description: "Variedade de peças para diferentes projetos.",
          },
          {
            image: "",
            title: "União por Termofusão",
            description: "Junções seguras para redes de água quente e fria.",
          },
        ],
      },
    ],
  },
]

/* ------------------------------ HELPERS ------------------------------ */

/** Apenas marcas/fabricantes (o que a página /empresas deve listar). */
export const brands = companies.filter((c) => c.kind === "brand")

/* Seções da página /empresas */

/** "Grupo Italy": marcas do grupo */
export const italyGroup = companies.filter((c) => c.group === "italy")

/** "Nossa Distribuição": HidroSmart */
export const distributionCompanies = companies.filter((c) => c.kind === "distributor")

/** "Nossa Representação": Conceitto */
export const representationCompanies = companies.filter((c) => c.kind === "sales-force")

/** "Outras empresas parceiras": marcas que não são do Grupo Italy */
export const partnerBrands = companies.filter((c) => c.kind === "brand" && !c.group)

/** Marcas representadas por um canal. Ex.: getRepresentedBy("conceitto") */
export const getRepresentedBy = (channel: Channel) =>
  companies.filter((c) => c.representation.includes(channel))

/** Marcas distribuídas por um canal. Ex.: getDistributedBy("hidrosmart") */
export const getDistributedBy = (channel: Channel) =>
  companies.filter((c) => c.distribution.includes(channel))

export const getCompany = (target: string) =>
  companies.find((c) => c.target === target)

/* Atalhos que substituem os antigos arquivos conceitto.ts / hidrosmart.ts */
export const conceittoCompany = getCompany("conceitto")!
export const hidrosmartCompany = getCompany("hidrosmart")!
export const conceittoRepresentations = getRepresentedBy("conceitto")
export const hidrosmartDistribution = getDistributedBy("hidrosmart")
