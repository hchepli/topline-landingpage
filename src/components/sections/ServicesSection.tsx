// components/sections/ServicesSection.tsx

import { BarChart2, Target, Settings2, Users } from "lucide-react";
import { SectionHeader } from "../ui/layout/SectionHeader";
import { ServiceCard } from "../ui/cards/ServiceCard";
import { DiagnosticCta } from "../ui/cta/DiagnosticCta";
import { WhatsAppCta } from "../ui/cta/WhatsAppCta";

const services = [
  {
    icon: BarChart2,
    title: "Gestão Financeira",
    description: "Tenha controle total do fluxo de caixa, custos e resultados para decidir com segurança.",
    highlight: true,
  },
  {
    icon: Target,
    title: "Gestão Estratégica",
    description: "Planejamento, metas e indicadores claros para sua empresa crescer com direção.",
    highlight: false,
  },
  {
    icon: Settings2,
    title: "Gestão de Processos",
    description: "Organização das rotinas e processos para ganhar eficiência e reduzir desperdícios.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Apoio à Gestão de Pessoas",
    description: "Estruturação da equipe e apoio à liderança para um time mais produtivo.",
    highlight: false,
  },
];

export function ServicesSection() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeader title="Oque a TopLine pode fazer por você?" id="services-title" />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            highlight={service.highlight}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <DiagnosticCta
          text="Quer saber qual destes pontos mais travam sua empresa hoje?"
          buttonLabel="Solicitar diagnóstico"
          href="#diagnostico"
        />
        <WhatsAppCta
          label="Falar Agora"
          href="https://wa.me/SEUNUMERO"
        />
      </div>
    </div>
  );
}