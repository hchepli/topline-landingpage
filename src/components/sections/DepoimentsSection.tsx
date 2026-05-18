// components/sections/DepoimentsSection.tsx

"use client";

import { useState } from "react";
import { SectionHeader } from "../ui/layout/SectionHeader";
import { DiagnosticCta } from "../ui/cta/DiagnosticCta";
import { TestimonialCard } from "../ui/cards/TestimonialCard";

const testimonials = [
  {
    quote: "A TopLine trouxe clareza para processos que antes eram confusos. Em poucos meses, conseguimos organizar a gestão financeira e tomar decisões com muito mais segurança.",
    clientSince: "Cliente desde 2023",
    name: "Ricardo Almeida",
    role: "Diretor Administrativo e Financeiro",
    company: "Da Grupo Vértice Logística",
  },
  {
    quote: "A TopLine trouxe clareza para processos que antes eram confusos. Em poucos meses, conseguimos organizar a gestão financeira e tomar decisões com muito mais segurança.",
    clientSince: "Cliente desde 2023",
    name: "Ricardo Almeida",
    role: "Diretor Administrativo e Financeiro",
    company: "Da Grupo Vértice Logística",
  },
  {
    quote: "A TopLine trouxe clareza para processos que antes eram confusos. Em poucos meses, conseguimos organizar a gestão financeira e tomar decisões com muito mais segurança.",
    clientSince: "Cliente desde 2023",
    name: "Ricardo Almeida",
    role: "Diretor Administrativo e Financeiro",
    company: "Da Grupo Vértice Logística",
  },
  {
    quote: "A TopLine trouxe clareza para processos que antes eram confusos. Em poucos meses, conseguimos organizar a gestão financeira e tomar decisões com muito mais segurança.",
    clientSince: "Cliente desde 2023",
    name: "Ricardo Almeida",
    role: "Diretor Administrativo e Financeiro",
    company: "Da Grupo Vértice Logística",
  },
  {
    quote: "A TopLine trouxe clareza para processos que antes eram confusos. Em poucos meses, conseguimos organizar a gestão financeira e tomar decisões com muito mais segurança.",
    clientSince: "Cliente desde 2023",
    name: "Ricardo Almeida",
    role: "Diretor Administrativo e Financeiro",
    company: "Da Grupo Vértice Logística",
  },
];

const VISIBLE = 3;

export function DepoimentsSection() {
  const [current, setCurrent] = useState(0);


  return (
    <div className="h-[85dvh] depoiments-title flex flex-col justify-center gap-5 mx-auto max-w-7xl px-6">
      <SectionHeader
        title="Resultados reais de empresas que confiam na TopLine"
        id="depoiments-title"
      />

      <div className=" overflow-hidden mt-4">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 16px / ${VISIBLE})))` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full shrink-0" style={{ width: `calc((100% - ${(VISIBLE - 1) * 16}px) / ${VISIBLE})` }}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className=" flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <DiagnosticCta
          text="Quer alcançar esse nível de gestão na sua empresa?"
          buttonLabel="Quero gestão profissional"
          href="#diagnostico"
        />
      </div>
    </div>
  );
}