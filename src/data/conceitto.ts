// src/data/conceitto.ts
// TODO: ajustar os caminhos dos imports conforme a estrutura do projeto
import ivmitaly from "../assets/img/logo/ivmitaly.webp"
import bermad from "../assets/img/logo/Layer_11.svg"
// import tecnofluidosLogo from "../assets/brands/tecnofluidos.png"
// import conceittoLogo from "../assets/brands/conceitto.png"

export type Representation = {
  target: string
  name: string
  image: string
  description: string
  buttonLabel: string
  url: string
}

export const conceittoCompany = {
  target: "conceitto",
  name: "Conceitto",
  image: "#",
  description:
    "Força de vendas do ecossistema CHP Smart, representando marcas líderes em soluções hidráulicas e de controle de fluidos.",
}

export const conceittoRepresentations: Representation[] = [
  {
    target: "italy",
    name: "IVM Italy",
    image: ivmitaly,
    description:
      "A IVM Italy fabrica válvulas e registros para saneamento, gás e aplicações industriais, com foco em resistência mecânica, rastreabilidade e controle de qualidade. Seu portfólio inclui componentes em latão forjado para instalações hidráulicas e sistemas de condução de fluidos.",
    buttonLabel: "Conhecer Linha Industrial e Saneamento",
    url: "https://italy.com.br",
  },
  {
    target: "bermad",
    name: "BERMAD",
    image: bermad,
    description:
      "A BERMAD desenvolve válvulas hidráulicas de controle e soluções para gerenciamento de pressão, vazão e nível. Seu portfólio atende redes de abastecimento de água, irrigação, instalações prediais, proteção contra incêndio e aplicações industriais.",
    buttonLabel: "Conhecer Soluções BERMAD",
    url: "https://bermad.com.br/",
  },
  {
    target: "tecnofluidos",
    name: "TecnoFluidos",
    image: "#",
    description:
      "A TecnoFluidos oferece sistemas para condução de água quente e fria, gás, esgoto, drenagem, águas pluviais e calefação. Seu portfólio reúne tubos, conexões e soluções integradas para instalações prediais e projetos de construção civil.",
    buttonLabel: "Conhecer Sistemas de Condução",
    url: "http://tecnofluidos.com.br/",
  },
]
