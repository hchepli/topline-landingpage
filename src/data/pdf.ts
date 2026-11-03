export interface PdfItem {
  id: string
  title: string
  description?: string
  /** Caminho do PDF (ex.: "/pdfs/forthy-catalogo-2025.pdf"). */
  href: string
  companyTarget: string
}

export const pdfs: PdfItem[] = [
  {
    id: "brv-valvulas-conexoes-inox",
    title: "Catálogo BRV: Válvulas e Conexões em Inox",
    description: "Soluções em válvulas e conexões de aço inoxidável.",
    href: "/pdfs/Brv-Válvulas-e-conexões-inox .pdf",
    companyTarget: "brv",
  },
  {
    id: "roddex-catalogo",
    title: "Catálogo Roddex",
    description: "Metais sanitários e acessórios para banheiro e cozinha.",
    href: "/pdfs/CATALOGO RODDEX.pdf",
    companyTarget: "roddex",
  },
  {
    id: "brv-metais-catalogo",
    title: "Catálogo BRV Metais",
    description: "Linha de metais sanitários e soluções para instalações.",
    href: "/pdfs/CATALOGO-BRV-METAIS.pdf",
    companyTarget: "brv",
  },
  {
    id: "forthy-gas-catalogo",
    title: "Catálogo Forthy Gás",
    description: "Soluções Forthy para instalações de gás.",
    href: "/pdfs/CATÁLALOGO-FOTHY GÁS.pdf",
    companyTarget: "forthy",
  },
  {
    id: "italy-catalogo-2025",
    title: "Catálogo IVM Italy 2025",
    description: "Válvulas, registros e soluções hidráulicas para saneamento e gás.",
    href: "/pdfs/CatalogoItaly2025.pdf",
    companyTarget: "italy",
  },
  {
    id: "forthy-gas-flyer",
    title: "Flyer Forthy Gás",
    description: "Apresentação das soluções Forthy para instalações de gás.",
    href: "/pdfs/FLYER - FORTHY GÁS.pdf",
    companyTarget: "forthy",
  },
  {
    id: "forthy-kit-cavaletes",
    title: "Kit Cavaletes Forthy",
    description: "Soluções Forthy para kits cavalete e instalações hidráulicas.",
    href: "/pdfs/KIT-CAVALETES-FORTHY.pdf",
    companyTarget: "forthy",
  },
  {
    id: "acqua-system-flex",
    title: "Manual Acqua System Flex",
    description: "Manual técnico do sistema Acqua System Flex.",
    href: "/pdfs/Manual-Acqua-System-Flex-15-09-2025 (1).pdf",
    companyTarget: "tecnofluidos",
  },
  {
    id: "acqua-system-termofusao",
    title: "Manual Acqua System Termofusão",
    description: "Manual técnico do sistema Acqua System para termofusão.",
    href: "/pdfs/Manual-Acqua-System-Termofusao-5_18-09-25.pdf",
    companyTarget: "tecnofluidos",
  },
  {
    id: "tecnofluidos-catalogo-geral",
    title: "Catálogo Geral TecnoFluidos",
    description: "Tubos, conexões e sistemas para instalações hidráulicas e de gás.",
    href: "/pdfs/Tecnofluidos Geral.pdf",
    companyTarget: "tecnofluidos",
  },
]

export function getPdfsByCompany(companyTarget: string): PdfItem[] {
  return pdfs.filter((pdf) => pdf.companyTarget === companyTarget)
}