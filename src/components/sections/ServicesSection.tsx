import { SectionHeader } from "../ui/layout/SectionHeader";
import { ServiceCard } from "../ui/cards/ServiceCard";
import { DiagnosticCta } from "../ui/cta/DiagnosticCta";
import { WhatsAppCta } from "../ui/cta/WhatsAppCta";
import { services } from "../../data/chpsmart"
import { Reveal } from "../animations/Reveal";

export function ServicesSection() {
  return (
    <div className="services flex flex-col justify-center min-h-[80dvh] gap-10 mx-auto max-w-7xl px-6">
      <SectionHeader title="Oque a CHP Smart pode fazer por você?" id="services-title" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.2 + i * 0.15} direction="up">
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              highlight={service.highlight}
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-stretch gap-3 lg:flex-row">
        <Reveal delay={0.2} direction="right">
          <DiagnosticCta
            text="Quer alcançar esse nível de gestão na sua empresa?"
            buttonLabel="Quero gestão profissional"
            target="diagnostico"
          />
        </Reveal>

        <Reveal delay={0.35} direction="left" className="flex">
          <WhatsAppCta
            label="Falar Agora"
            href="https://wa.me/5511911021278"
          />
        </Reveal>
      </div>
    </div>
  );
}