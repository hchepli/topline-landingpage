import {
  Droplet, Flame, Gauge, Settings, Wrench, Waves,
} from "lucide-react"

import ivmitaly from "../assets/img/logo/ivmitaly.png"
import forthy from "../assets/img/logo/forthy.png"
import brv from "../assets/img/logo/brv.png"
import roddex from "../assets/img/logo/roddex.png"
import bermad from "../assets/img/logo/Layer_11.svg"

import brvGasEsferaAngular from "../assets/img/products/brv/gas/esfera-angular.jpg"
import brvGasPassagemTotal from "../assets/img/products/brv/gas/passagem-total.jpg"
import brvIndustrialEsfera3Vias from "../assets/img/products/brv/industrial/esfera-3-vias.jpg"
import brvIndustrialRegistroGaveta from "../assets/img/products/brv/industrial/registro-gaveta.jpg"
import brvPressaoRedutoraPressao from "../assets/img/products/brv/pressao/redutora-pressao.jpg"
import brvSaneamentoRegistroGaveta from "../assets/img/products/brv/saneamento/registro-gaveta.jpg"
import brvSaneamentoValvulaPead from "../assets/img/products/brv/saneamento/valvula-pead.jpg"

import ivmGasValvulaAngular from "../assets/img/products/ivm/gas/valvula-angular.png"
import ivmGasValvulaEsfera from "../assets/img/products/ivm/gas/valvula-esfera.jpg"
import ivmIndustrialValvulaY from "../assets/img/products/ivm/industrial/valvula-y.jpg"
import ivmIndustrialValvulaEliminadoraDeAr from "../assets/img/products/ivm/industrial/valvula-eliminadora-de-ar.jpg"
import ivmIndustrialValvulaEsfera3ViasFemeaIndustrial from "../assets/img/products/ivm/industrial/valvula-esfera-3-vias-femea-industrial.jpg"
import ivmSaneamentoRegistroGaveta from "../assets/img/products/ivm/saneamento/registro-gaveta.jpg"
import ivmSaneamentoValvulaEsferaPead from "../assets/img/products/ivm/saneamento/valvula-esfera-macho-x-adaptador-p-tubo-pead-saneamento.jpg"
import ivmFluxoValvulaRetencao from "../assets/img/products/ivm/fluxo/valvula-retencao-horizontal-portinhola.jpg"

import roddexChuveiroChuveiroComDucha from "../assets/img/products/roddexx/chuveiro/chuveiro-com-duxa.png"
import roddexChuveiroDesviador from "../assets/img/products/roddexx/chuveiro/desviador.png"
import roddexChuveiroDuchaHigienica from "../assets/img/products/roddexx/chuveiro/ducha-higienica.png"
import roddexCozinhaTorneiraMonocamada from "../assets/img/products/roddexx/cozinha/torneira-monocamada.png"
import roddexCozinhaValvulaAmericana from "../assets/img/products/roddexx/cozinha/valvula-americana.png"
import roddexHotelCabide from "../assets/img/products/roddexx/hotel/cabide.png"
import roddexHotelPortaMalas from "../assets/img/products/roddexx/hotel/porta-malas.png"
import roddexHotelSacoHigienico from "../assets/img/products/roddexx/hotel/saco-higienico.png"
import roddexBanheiroLavatorioValvula from "../assets/img/products/roddexx/banheiro/lavatorio-valvula.png"
import roddexBanheiroMictorio from "../assets/img/products/roddexx/banheiro/mictorio.png"
import roddexBanheiroTorneira from "../assets/img/products/roddexx/banheiro/torneira.png"

import forthyKitCavaleteDN25 from "../assets/img/products/forthy/kit-cavaletes/Kit-Cavalete-Simples-DN25-1-V6.jpg"
import forthyKitCavaleteDN80 from "../assets/img/products/forthy/kit-cavaletes/Site-Kit-Cavalete-Simples-DN80-3-com-filtro-V6.jpg"
import forthyKitReducaoDN25XDN20 from "../assets/img/products/forthy/kit-com-reducao/DN25XDN20.jpg"
import forthyKitReducaoDN40XDN25 from "../assets/img/products/forthy/kit-com-reducao/Site-Kit-Cavalete-Simples-Red-DN40-X-DN25-1-e-meia-X-1-V6.jpg"
import forthyKitReducaoDN80XDN50 from "../assets/img/products/forthy/kit-com-reducao/Site-Kit-Cavalete-Simples-Red-DN80-X-DN50-3-X-2-com-filtro-V6.jpg"
import forthyBuchaReducao from "../assets/img/products/forthy/conexao/Bucha-de-Reducao.jpg"
import forthyCotovelo90Femea from "../assets/img/products/forthy/conexao/Cotovelo-90-Femea.jpg"
import forthyFlangeSextavado from "../assets/img/products/forthy/conexao/Flange-com-Sextavado.jpg"
import forthyLuvaFemea from "../assets/img/products/forthy/conexao2/Luva-Femea-1.jpg"
import forthyNipleDuplo from "../assets/img/products/forthy/conexao2/Niple-Duplo.jpg"
import forthyUniaoAssentoPlano from "../assets/img/products/forthy/conexao2/Uniao-Assento-Plano.jpg"

export const companies = [
  {
  image: ivmitaly,
  name: "IVM Italy",
  description:
    "A IVM Italy desenvolve válvulas, registros e soluções hidráulicas para saneamento, gás e aplicações industriais, combinando tecnologia de forjamento, alta resistência e rigoroso controle de qualidade.",
  buttonLabel: "Conhecer Linha Industrial e Saneamento",
  href: "https://italy.com.br",
  target: "italy",
  cards: [
    {
      title: "Linha Industrial",
      description: "Válvulas e componentes para aplicações industriais de alta exigência.",
      icon: Settings,
      products: [
        {
          image: ivmIndustrialValvulaEsfera3ViasFemeaIndustrial,
          title: "Válvula Esfera 3 Vias",
          description: "Controle e direcionamento de fluxo para sistemas industriais."
        },
        {
          image: ivmIndustrialValvulaEliminadoraDeAr,
          title: "Válvula Eliminadora de Ar",
          description: "Elimina bolsas de ar em sistemas pressurizados."
        },
        {
          image: ivmIndustrialValvulaY,
          title: "Filtro Y Industrial",
          description: "Proteção de equipamentos contra partículas e impurezas."
        }
      ]
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
          description: "Vedação confiável para redes residenciais e industriais."
        },
        {
          image: ivmGasValvulaAngular,
          title: "Válvula Angular para Gás",
          description: "Instalação prática em pontos de derivação."
        },
        {
          image: "",
          title: "Registro para Gás",
          description: "Controle seguro do fornecimento."
        }
      ]
    },
    {
      title: "Saneamento",
      description: "Produtos homologados para redes públicas de água.",
      icon: Droplet,
      products: [
        {
          image: ivmSaneamentoValvulaEsferaPead,
          title: "Válvula Esfera PEAD",
          description: "Aplicação em sistemas de abastecimento e distribuição."
        },
        {
          image: "",
          title: "Cavalete para Hidrômetro",
          description: "Solução para medição e distribuição de água."
        },
        {
          image: ivmSaneamentoRegistroGaveta,
          title: "Registro de Gaveta",
          description: "Controle e isolamento de trechos da rede."
        }
      ]
    },
    {
  title: "Controle de Fluxo",
  description: "Soluções para regulagem e direcionamento de fluidos.",
  icon: Gauge,
  products: [
    {
      image: ivmFluxoValvulaRetencao,
      title: "Válvula Retenção",
      description: "Impede o retorno do fluxo na tubulação."
    },
    {
      image: "",
      title: "Válvula Controladora",
      description: "Regulagem eficiente para diferentes aplicações."
    },
    {
      image: "",
      title: "Válvula de Alívio",
      description: "Proteção contra sobrepressão."
    }
  ]
}
  ]
},
{
  image: forthy,
  name: "Forthy",
  description:
    "A Forthy desenvolve kits cavalete, conjuntos hidráulicos e soluções para saneamento, atendendo concessionárias, construtoras e obras de infraestrutura em todo o Brasil.",
  buttonLabel: "Ver Kits Cavalete e Soluções",
  href: "https://www.forthy.com.br",
  target: "forthy",
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
        description: "Kit para ligação de água em instalações residenciais."
      },
      {
        image: "",
        title: "Kit Cavalete Simples DN40 1.1/2″ V6",
        description: "Modelo para redes de maior vazão."
      },
      {
        image: forthyKitCavaleteDN80,
        title: "Kit Cavalete Simples DN80 3″ com Filtro V6",
        description: "Kit completo para aplicações de maior porte."
      }
    ]
  },

  {
    title: "Kits com Redução",
    description: "Modelos com redução para diferentes diâmetros de tubulação.",
    icon: Settings,
    products: [
      {
        image: forthyKitReducaoDN25XDN20,
        title: "Kit Cavalete Simples com Redução DN25 x DN20 1″ x 3/4″ V6",
        description: "Ideal para adaptações em ligações de água."
      },
      {
        image: forthyKitReducaoDN40XDN25,
        title: "Kit Cavalete Simples com Redução DN40 x DN25 1.1/2″ x 1″ V6",
        description: "Permite adequação entre diferentes bitolas."
      },
      {
        image: forthyKitReducaoDN80XDN50,
        title: "Kit Cavalete Simples com Redução DN80 x DN50 3″ x 2″ com Filtro V6",
        description: "Solução para instalações de alta capacidade."
      }
    ]
  },

  {
    title: "Conexões",
    description: "Componentes para montagem de sistemas hidráulicos.",
    icon: Wrench,
    products: [
      {
        image: forthyBuchaReducao,
        title: "Bucha de Redução",
        description: "Adaptação entre diferentes diâmetros de tubulação."
      },
      {
        image: forthyCotovelo90Femea,
        title: "Cotovelo 90º Fêmea x Fêmea",
        description: "Mudança de direção com vedação segura."
      },
      {
        image: forthyFlangeSextavado,
        title: "Flange com Sextavado",
        description: "Fixação e montagem em sistemas hidráulicos."
      }
    ]
  },

  {
    title: "Conexões Especiais",
    description: "Peças para complementação e montagem de instalações.",
    icon: Waves,
    products: [
      {
        image: forthyLuvaFemea,
        title: "Luva Fêmea",
        description: "Conexão para união de tubulações."
      },
      {
        image: forthyNipleDuplo,
        title: "Niple Duplo",
        description: "Peça para interligação entre conexões roscáveis."
      },
      {
        image: forthyUniaoAssentoPlano,
        title: "União Assento Plano",
        description: "Facilita a montagem e manutenção de sistemas hidráulicos."
      }
    ]
  }
]
},
{
  image: brv,
  name: "BRV",
  description:
    "A BRV desenvolve válvulas, registros e soluções para saneamento, gás e aplicações industriais, com foco em desempenho, resistência e confiabilidade operacional.",
  buttonLabel: "Explorar Catálogo BRV",
  href: "https://www.brvvalvulas.com.br",
  target: "brv",
  cards: [
    {
      title: "Linha Industrial",
      description: "Produtos para controle e proteção de sistemas.",
      icon: Settings,
      products: [
        {
          image: brvIndustrialRegistroGaveta,
          title: "Registro Gaveta Industrial",
          description: "Isolamento seguro de linhas hidráulicas."
        },
        {
          image: "",
          title: "Válvula Eliminadora de Ar",
          description: "Eficiência operacional em redes pressurizadas."
        },
        {
          image: brvIndustrialEsfera3Vias,
          title: "Válvula Esfera 3 Vias",
          description: "Controle e direcionamento de fluxo."
        }
      ]
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
          description: "Instalações residenciais e comerciais."
        },
        {
          image: brvGasPassagemTotal,
          title: "Válvula Passagem Total",
          description: "Maior vazão e menor perda de carga."
        },
        {
          image: "",
          title: "Registro para Gás",
          description: "Controle seguro da distribuição."
        }
      ]
    },
    {
      title: "Controle de Pressão",
      description: "Proteção e estabilidade para sistemas hidráulicos.",
      icon: Gauge,
      products: [
        {
          image: brvPressaoRedutoraPressao,
          title: "Válvula Redutora de Pressão",
          description: "Regulagem e estabilização da pressão da rede."
        },
        {
          image: "",
          title: "Redutora Industrial",
          description: "Aplicações de maior porte."
        },
        {
          image: "",
          title: "Conjunto Regulador",
          description: "Controle hidráulico de precisão."
        }
      ]
    },
    {
  title: "Saneamento",
  description: "Produtos voltados para abastecimento e distribuição de água.",
  icon: Droplet,
  products: [
    {
      image: brvSaneamentoRegistroGaveta,
      title: "Registro Gaveta para Rede",
      description: "Controle operacional em sistemas de saneamento."
    },
    {
      image: brvSaneamentoValvulaPead,
      title: "Válvula PEAD",
      description: "Aplicação em redes de distribuição."
    },
    {
      image: "",
      title: "Conjunto de Manobra",
      description: "Operação segura de trechos da rede."
    }
  ]
},
  ]
},
{
  image: roddex,
  name: "Roddex",
  description:
    "A Roddex desenvolve metais sanitários, acessórios para banheiro, cozinha e soluções para hotelaria, combinando design moderno, durabilidade e tecnologia para ambientes residenciais e corporativos.",
  buttonLabel: "Conhecer Linhas para Banheiro e Hotelaria",
  href: "https://www.roddex.com.br",
  target: "roddex",
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
          description:
            "Acessório resistente e elegante para ambientes hoteleiros."
        },
        {
          image: roddexHotelSacoHigienico,
          title: "Suporte para Saco Higiênico",
          description:
            "Acabamento discreto e funcional para banheiros corporativos."
        },
        {
          image: roddexHotelPortaMalas,
          title: "Porta Malas para Hotel",
          description:
            "Solução prática para acomodação e conforto dos hóspedes."
        }
      ]
    },

    {
      title: "Metais para Banheiro",
      description:
        "Torneiras, válvulas e acessórios com acabamento premium.",
      icon: Droplet,
      products: [
        {
          image: roddexBanheiroLavatorioValvula,
          title: "Válvula para Lavatório Click",
          description:
            "Sistema de acionamento moderno com excelente vedação."
        },
        {
          image: roddexBanheiroTorneira,
          title: "Torneira Sensorizada",
          description:
            "Maior higiene e economia de água para ambientes de alto fluxo."
        },
        {
          image: roddexBanheiroMictorio,
          title: "Válvula para Mictório Sensorizada",
          description:
            "Acionamento automático para uso comercial e corporativo."
        }
      ]
    },

    {
      title: "Chuveiros e Duchas",
      description:
        "Soluções para conforto, praticidade e design.",
      icon: Waves,
      products: [
        {
          image: roddexChuveiroChuveiroComDucha,
          title: "Chuveiro Tipo Ducha com Braço",
          description:
            "Design sofisticado e distribuição uniforme da água."
        },
        {
          image: roddexChuveiroDuchaHigienica,
          title: "Ducha Higiênica com Registro",
          description:
            "Kit completo para instalação residencial ou corporativa."
        },
        {
          image: roddexChuveiroDesviador,
          title: "Desviador para Chuveiro",
          description:
            "Controle eficiente entre diferentes pontos de saída."
        }
      ]
    },
    {
      title: "Cozinha",
      description:
        "Misturadores, torneiras e acessórios para cozinhas modernas.",
      icon: Flame,
      products: [
        {
          image: roddexCozinhaTorneiraMonocamada,
          title: "Misturador Monocomando Gourmet",
          description:
            "Controle preciso de temperatura e vazão."
        },
        {
          image: "",
          title: "Torneira Gourmet Flexível",
          description:
            "Maior alcance e praticidade no dia a dia."
        },
        {
          image: roddexCozinhaValvulaAmericana,
          title: "Válvula Americana para Pia",
          description:
            "Resistência e acabamento para cubas de cozinha."
        }
      ]
    },
  ]
},
{
  image: bermad,
  name: "Bermad",
  description:
    "A Bermad é referência mundial em válvulas hidráulicas de controle, oferecendo soluções inteligentes para abastecimento de água, irrigação, combate a incêndio e aplicações industriais, com foco em eficiência, confiabilidade e automação.",
  buttonLabel: "Conhecer Soluções Bermad",
  href: "https://www.bermad.com/pt-br/",
  target: "bermad",
  cards: [
    {
      title: "Abastecimento de Água",
      description:
        "Soluções para controle, redução e gerenciamento de pressão em redes de distribuição.",
      icon: Droplet,
      featured: true,
      products: [
        {
          image: "",
          title: "Modelo 720 - Válvula Redutora de Pressão",
          description:
            "Mantém a pressão de saída constante em sistemas de abastecimento."
        },
        {
          image: "",
          title: "Modelo 735 - Válvula Sustentadora de Pressão",
          description:
            "Protege a rede mantendo a pressão mínima a montante."
        },
        {
          image: "",
          title: "Modelo 700 SIGMA EN/ES",
          description:
            "Válvula hidráulica de controle para diversas aplicações em redes de água."
        }
      ]
    },

    {
      title: "Controle de Nível",
      description:
        "Válvulas automáticas para reservatórios e tanques.",
      icon: Waves,
      products: [
        {
          image: "",
          title: "Modelo 750-66 - Válvula de Controle de Nível",
          description:
            "Controle automático do nível de reservatórios."
        },
        {
          image: "",
          title: "Modelo 750-65",
          description:
            "Controle hidráulico preciso para enchimento de tanques."
        },
        {
          image: "",
          title: "Modelo 757",
          description:
            "Controle modular para reservatórios de grande porte."
        }
      ]
    },

    {
      title: "Proteção da Rede",
      description:
        "Equipamentos para segurança operacional e prevenção de danos hidráulicos.",
      icon: Gauge,
      products: [
        {
          image: "",
          title: "Modelo 730 - Válvula de Alívio de Pressão",
          description:
            "Protege tubulações contra sobrepressão."
        },
        {
          image: "",
          title: "Modelo 735-M",
          description:
            "Válvula combinada para sustentação e alívio de pressão."
        },
        {
          image: "",
          title: "Modelo 790",
          description:
            "Válvula de controle multifuncional para proteção hidráulica."
        }
      ]
    },

    {
      title: "Irrigação",
      description:
        "Soluções para automação e controle em sistemas de irrigação agrícola.",
      icon: Settings,
      products: [
        {
          image: "",
          title: "Modelo IR-120-55",
          description:
            "Válvula hidráulica para sistemas de irrigação."
        },
        {
          image: "",
          title: "Modelo IR-420",
          description:
            "Controle automático de setores de irrigação."
        },
        {
          image: "",
          title: "Modelo IR-900-M0",
          description:
            "Válvula de controle para aplicações agrícolas de alta eficiência."
        }
      ]
    }
  ]
},
]