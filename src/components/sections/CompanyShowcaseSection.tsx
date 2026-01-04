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
} from "lucide-react"

const companies = [{ name: "TopFusion", description: "A TopFusion é uma indústria brasileira especializada em sistemas técnicos para aplicações hidráulicas e industriais, com foco em desempenho, confiabilidade e durabilidade.", buttonLabel: "Conhecer Sistemas e Aplicações", cards: [{ title: "Top Gás", description: "Soluções em gás para aplicações técnicas", icon: Fuel, }, { title: "Top Hidro", description: "Soluções em PP-R para instalações hidráulicas de alta durabilidade.", icon: Droplet, }, { title: "Top Air", description: "Sistemas seguros e eficientes para redes industriais.", icon: Wind, }, { title: "Top Fire", description: "Tecnologia para combate e prevenção em redes pressurizadas.", icon: Flame, featured: true, },], href: "https://topfusion.com.br", target:"topfusion" }, { name: "TopFiber", description: "A TopFiber desenvolve soluções em fibra de vidro para reforço estrutural, atendendo obras que exigem resistência, durabilidade e alto desempenho técnico.", buttonLabel: "Ver Soluções em Fibra Estrutural", cards: [{ title: "Vergalhões de Fibra de Vidro", description: "Reforço estrutural avançado com leveza e alta resistência.", icon: Grid2x2, }, { title: "Telas de Fibra de Vidro", description: "Distribui cargas e controla fissuras em pisos e lajes.", icon: Grid3x3, featured: true, },], href: "https://topfiber.ind.br", target: "topfiber" }, { name: "TopFlux", description: "A TopFlux desenvolve válvulas e soluções de controle de fluxo hidráulico, garantindo precisão, segurança e eficiência em sistemas de água e infraestrutura.", buttonLabel: "Ver Soluções em Controle de Fluxo", cards: [{ title: "Válvulas Redutoras de Pressão", description: "Controle preciso e proteção do sistema hidráulico.", icon: Sliders, }, { title: "Válvulas de Controle de Nível", description:"Automação segura para reservatórios e tanques.", icon:Gauge}, { title:"Válvulas de Controle e Seção" ,description:"Direcionamento e interrupção do fluxo com eficiência." ,icon:ArrowLeftRight}, {title:"Soluções Hidráulicas Sob Medida" ,description:"Projetos personalizados com suporte técnico." ,icon:Settings ,featured:true}], href:"https://topflux.com.br" ,target:"topflux"},]

export function CompanyShowcaseSection() {
  return (
    <section className="empresas flex w-full flex-col gap-24 px-4 pt-20 lg:min-h-screen lg:gap-32 lg:px-0 lg:pt-24">
      <SectionHeader
        title="Grupo TF"
        description="Conheça as empresas que fazem parte do nosso ecossistema."
      />

      {companies.map((company, index) => (
        <CompanyBlock key={company.name} company={company} index={index} />
      ))}
    </section>
  )
}
