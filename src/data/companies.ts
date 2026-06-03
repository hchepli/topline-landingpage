import {
  Droplet, Flame, Gauge, Settings, Wrench, Waves, Grid2x2
} from "lucide-react"

import ivmitaly from "../assets/img/logo/ivmitaly.png"
import forthy from "../assets/img/logo/forthy.png"
import brv from "../assets/img/logo/brv.png"
import roddex from "../assets/img/logo/roddex.png"
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
          image: "",
          title: "Válvula Esfera 3 Vias",
          description: "Controle e direcionamento de fluxo para sistemas industriais."
        },
        {
          image: "",
          title: "Válvula Eliminadora de Ar",
          description: "Elimina bolsas de ar em sistemas pressurizados."
        },
        {
          image: "",
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
          image: "",
          title: "Válvula Esfera para Gás",
          description: "Vedação confiável para redes residenciais e industriais."
        },
        {
          image: "",
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
          image: "",
          title: "Válvula Esfera PEAD",
          description: "Aplicação em sistemas de abastecimento e distribuição."
        },
        {
          image: "",
          title: "Cavalete para Hidrômetro",
          description: "Solução para medição e distribuição de água."
        },
        {
          image: "",
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
      image: "",
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
      title: "Kits Cavalete Residenciais",
      description: "Conjuntos completos para ligação de água.",
      icon: Droplet,
      featured: true,
      products: [
        {
          image: "",
          title: "Kit Cavalete Padrão SABESP",
          description: "Atende normas técnicas para instalações residenciais."
        },
        {
          image: "",
          title: "Kit Cavalete Compacto",
          description: "Instalação prática para pequenos empreendimentos."
        },
        {
          image: "",
          title: "Kit Cavalete Completo",
          description: "Conjunto pronto para medição e distribuição."
        }
      ]
    },
    {
      title: "Saneamento",
      description: "Soluções para redes públicas e privadas.",
      icon: Waves,
      products: [
        {
          image: "",
          title: "Conjunto de Medição",
          description: "Preparado para sistemas de abastecimento."
        },
        {
          image: "",
          title: "Tubulação Inox",
          description: "Alta durabilidade e resistência."
        },
        {
          image: "",
          title: "Conexões Técnicas",
          description: "Compatibilidade com diferentes projetos."
        }
      ]
    },
    {
      title: "Componentes Hidráulicos",
      description: "Itens para montagem e manutenção.",
      icon: Wrench,
      products: [
        {
          image: "",
          title: "Filtro Y",
          description: "Proteção contra partículas sólidas."
        },
        {
          image: "",
          title: "Válvula de Bloqueio",
          description: "Controle e interrupção de fluxo."
        },
        {
          image: "",
          title: "Registro de Manobra",
          description: "Operação simples e segura."
        }
      ]
    },
    {
  title: "Infraestrutura Urbana",
  description: "Soluções para obras públicas e concessionárias.",
  icon: Settings,
  products: [
    {
      image: "",
      title: "Abrigo para Hidrômetro",
      description: "Proteção para sistemas de medição."
    },
    {
      image: "",
      title: "Conjunto de Ligação",
      description: "Instalação segura em redes urbanas."
    },
    {
      image: "",
      title: "Kit Técnico para Concessionárias",
      description: "Atendimento aos padrões operacionais."
    }
  ]
},
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
          image: "",
          title: "Registro Gaveta Industrial",
          description: "Isolamento seguro de linhas hidráulicas."
        },
        {
          image: "",
          title: "Válvula Eliminadora de Ar",
          description: "Eficiência operacional em redes pressurizadas."
        },
        {
          image: "",
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
          image: "",
          title: "Válvula Angular para Gás",
          description: "Instalações residenciais e comerciais."
        },
        {
          image: "",
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
          image: "",
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
      image: "",
      title: "Registro Gaveta para Rede",
      description: "Controle operacional em sistemas de saneamento."
    },
    {
      image: "",
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
          image: "",
          title: "Cabide para Roupas",
          description:
            "Acessório resistente e elegante para ambientes hoteleiros."
        },
        {
          image: "",
          title: "Suporte para Saco Higiênico",
          description:
            "Acabamento discreto e funcional para banheiros corporativos."
        },
        {
          image: "",
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
          image: "",
          title: "Válvula para Lavatório Click",
          description:
            "Sistema de acionamento moderno com excelente vedação."
        },
        {
          image: "",
          title: "Torneira Sensorizada",
          description:
            "Maior higiene e economia de água para ambientes de alto fluxo."
        },
        {
          image: "",
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
          image: "",
          title: "Chuveiro Tipo Ducha com Braço",
          description:
            "Design sofisticado e distribuição uniforme da água."
        },
        {
          image: "",
          title: "Ducha Higiênica com Registro",
          description:
            "Kit completo para instalação residencial ou corporativa."
        },
        {
          image: "",
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
          image: "",
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
          image: "",
          title: "Válvula Americana para Pia",
          description:
            "Resistência e acabamento para cubas de cozinha."
        }
      ]
    },
  ]
},
]