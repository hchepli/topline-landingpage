import { SectionHeader } from "../ui/layout/SectionHeader";
import { ServiceCard } from "../ui/cards/ServiceCard"
import { Reveal } from "../animations/Reveal";
import { DiagnosticCta } from "../ui/cta/DiagnosticCta";
import { WhatsAppCta } from "../ui/cta/WhatsAppCta";
import {
  GitMerge,
  TrendingUp,
  ShieldCheck,
  Users,
  Cpu,
  BarChart2,
} from "lucide-react";

const about = [
  {
    icon: GitMerge,
    title: "Handover Comercial Estruturado",
    description:
      "Organizamos a transição entre vendas e operação para que cada negócio entre pronto para execução — sem retrabalho, sem custo escondido.",
    variant: "blue" as const,
    order: "sm:order-1",
  },
  {
    icon: TrendingUp,
    title: "Gestão Comercial Integrada",
    description:
      "Conectamos estratégia de vendas à engenharia de aplicação, do mapeamento de oportunidades ao mix ideal de soluções.",
    variant: "none" as const,
    order: "sm:order-2",
  },
  {
    icon: ShieldCheck,
    title: "Validação Técnica na Venda",
    description:
      "Venda sem validação técnica vira retrabalho. Garantimos alinhamento entre vendas, engenharia e operação antes de qualquer proposta.",
    variant: "yellow" as const,
    order: "sm:order-4",
  },
  {
    icon: Users,
    title: "Liderança de Equipes Comerciais",
    description:
      "Gerenciamento de representantes e supervisores para ampliar a presença da marca em todo território nacional com eficiência.",
    variant: "none" as const,
    order: "sm:order-3",
  },
  {
    icon: Cpu,
    title: "Engenharia de Aplicação",
    description:
      "Atuação técnica em sistemas hidráulicos e pneumáticos com foco em performance comercial e segurança na entrega.",
    variant: "green" as const,
    order: "sm:order-5",
  },
  {
    icon: BarChart2,
    title: "Expansão de Receita e Mix",
    description:
      "Desenvolvimento de mercado com grandes clientes — redes, distribuidores, construtoras e empresas de engenharia.",
    variant: "none" as const,
    order: "sm:order-6",
  },
];

export function ServicesSection() {
  return (
    <div className="services flex flex-col justify-center min-h-[80dvh] gap-10 mx-auto max-w-7xl px-6">
      <SectionHeader title="Um Pouco Mais Sobre Nós" id="about-title" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {about.map((item, i) => (
    <Reveal
      key={item.title}
      delay={0.2 + i * 0.15}
      direction="up"
      className={item.order}
    >
      <ServiceCard
        icon={item.icon}
        title={item.title}
        description={item.description}
        variant={item.variant}
      />
    </Reveal>
  ))}
      </div>
            <div className="mt-10 flex flex-col items-stretch gap-3 lg:flex-row">
        <Reveal delay={0.2} direction="right">
          <DiagnosticCta
            text="Alguma dúvida? Nos mande uma mensagem!"
            buttonLabel="Fale Conosco"
            target="diagnostico"
          />
        </Reveal>

        <Reveal delay={0.35} direction="left" className="flex">
          <WhatsAppCta
            label="Entrar em Contato"
            href="https://wa.me/5511911021278"
          />
        </Reveal>
      </div>
    </div>
  );
}