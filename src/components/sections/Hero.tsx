import { Reveal } from "../animations/Reveal"
import { ArrowUpRight } from "lucide-react"
import visual_1 from "../../assets/img/logo/visual_1.png"
import visual_2 from "../../assets/img/logo/visual_2.png"

export function Hero() {
  return (
    <div className="hero flex min-h-screen w-full items-center justify-between">

      {/* Esquerda — Conteúdo */}
      <div className="flex w-[40%] flex-col gap-5">
        <Reveal delay={0.4} direction="right">
          <h1 className="font-black text-5xl leading-snug tracking-[.08rem]">
            TopLine: uma conexão forte{" "}
            <span className="text-[rgb(var(--brand-secondary))]">
              com você
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.6} direction="right">
          <p className="font-medium text-2xl leading-snug tracking-[.08rem] text-[rgb(var(--text-muted)/50%)]">
            Através da TopLine, conectamos você a processos, indicadores e decisões
            mais inteligentes.
          </p>
        </Reveal>

        <Reveal delay={0.9} direction="right" className="w-full">
          <div className="flex w-full gap-2.5">
            <button className="flex-1 rounded-md bg-[rgb(var(--brand-primary))] p-4 text-base text-[rgb(var(--color-white))]">
              Conhecer as Empresas
            </button>

            <button className="flex flex-1 items-center justify-center gap-2.5 rounded-md border border-[rgb(var(--color-black))] p-4 text-base text-[rgb(var(--color-black))]">
              Sobre o Grupo <ArrowUpRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>

<div className="relative flex h-full w-[720px] items-center">
  <Reveal delay={0.6} direction="left">
    <img src={visual_1} alt="Visual TopLine 1" className="relatve z-20 w-[640px] animate-float"/>
  </Reveal>
  <Reveal direction="left">
    <img src={visual_2} alt="Visual TopLine 2" className="absolute bottom-[-50px] right-[-140px] z-10 w-[520px] animate-floatSlow"/>
  </Reveal>
</div>
    </div>
  )
}
