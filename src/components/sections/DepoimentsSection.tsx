"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "../ui/layout/SectionHeader";
import { DiagnosticCta } from "../ui/cta/DiagnosticCta";
import { TestimonialCard } from "../ui/cards/TestimonialCard";
import { Reveal } from "../animations/Reveal";
import { testimonials } from "../../data/chpsmart";

export function DepoimentsSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Garante que current não fique fora dos limites ao trocar o visible
  const maxIndex = testimonials.length - visible;
  const safeCurrent = Math.min(current, maxIndex);

  return (
    <div className="min-h-[90dvh] depoiments-title flex flex-col justify-center gap-5 mx-auto max-w-7xl px-4 sm:px-6">
      <SectionHeader
        title="Resultados reais de empresas que confiam na CHP Smart"
        id="depoiments-title"
      />

      <div className="overflow-hidden mt-4">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${safeCurrent} * (100% / ${visible} + ${16 / visible}px)))`,
          }}
        >
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={0.1 + i * 0.1}
              direction="up"
              className="shrink-0"
              style={{ width: `calc((100% - ${(visible - 1) * 16}px) / ${visible})` }}
            >
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Dots — mostra só os índices navegáveis */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === safeCurrent ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <Reveal delay={0.2} direction="right">
          <DiagnosticCta
            text="Quer alcançar esse nível de gestão na sua empresa?"
            buttonLabel="Quero gestão profissional"
            href="#diagnostico"
          />
        </Reveal>
      </div>
    </div>
  );
}