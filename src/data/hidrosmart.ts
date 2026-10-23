import { Droplet, Flame, Gauge, Home } from "lucide-react"

// TODO: coloque o logo da HidroSmart nesse caminho (ou ajuste o import)
import hidrosmartLogo from "../assets/img/logo/images.jpg"

import forthyKitCavaleteDN25 from "../assets/img/products/forthy/kit-cavaletes/Kit-Cavalete-Simples-DN25-1-V6.webp"
import forthyKitReducaoDN40XDN25 from "../assets/img/products/forthy/kit-com-reducao/Site-Kit-Cavalete-Simples-Red-DN40-X-DN25-1-e-meia-X-1-V6.webp"
import ivmSaneamentoRegistroGaveta from "../assets/img/products/ivm/saneamento/registro-gaveta.webp"
import ivmGasValvulaEsfera from "../assets/img/products/ivm/gas/valvula-esfera.webp"
import brvGasEsferaAngular from "../assets/img/products/brv/gas/esfera-angular.webp"
import brvIndustrialEsfera3Vias from "../assets/img/products/brv/industrial/esfera-3-vias.webp"
import bermad720RedutoraPressao from "../assets/img/products/bermad/720-valvularedutoradepressao.webp"
import bermad730AlivioPressao from "../assets/img/products/bermad/modelo-730.webp"
import brvPressaoRedutoraPressao from "../assets/img/products/brv/pressao/redutora-pressao.webp"
import roddexBanheiroTorneira from "../assets/img/products/roddexx/banheiro/torneira.webp"
import roddexChuveiroDuchaHigienica from "../assets/img/products/roddexx/chuveiro/ducha-higienica.webp"
import roddexHotelCabide from "../assets/img/products/roddexx/hotel/cabide.webp"

export const hidrosmartCompany = {
  image: hidrosmartLogo,
  name: "HidroSmart",
  description:
    "A HidroSmart é a distribuidora dos produtos do ecossistema CHP Smart. Reúne em um só lugar válvulas, kits cavalete, metais sanitários e soluções de controle hidráulico das marcas parceiras, para atender revendas, construtoras e obras de infraestrutura.",
  buttonLabel: "Ver produtos HidroSmart",
  href: "#catalogo",
  target: "hidrosmart",
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
}
