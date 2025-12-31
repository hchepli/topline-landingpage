import { Reveal } from "../animations/Reveal"
  import { NavCTA } from "../ui/buttons/NavCTA"
import { PrimaryCTA } from "../ui/buttons/PrimaryCTA"
import visual_1 from "../../assets/img/logo/visual_1.png"
import visual_2 from "../../assets/img/logo/visual_2.png"

export function Hero() {
  return (
    <div className="hero flex min-h-screen w-full flex-col-reverse items-center justify-center gap-16 px-4 lg:flex-row lg:justify-between lg:px-0">

      {/* Esquerda — Conteúdo */}
      <div className="flex w-full max-w-xl flex-col gap-5 lg:w-[40%] lg:max-w-none">
        <Reveal delay={0.4} direction="right">
          <h1 className="font-black text-3xl leading-snug tracking-[.08rem] md:text-4xl lg:text-5xl">
            TopLine: uma conexão forte{" "}
            <span className="text-[rgb(var(--brand-secondary))]">
              com você
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.6} direction="right">
          <p className="font-medium text-lg leading-snug tracking-[.08rem] text-[rgb(var(--text-muted)/50%)] md:text-xl lg:text-2xl">
            TopLine Non Stop, conectamos você a processos, indicadores e decisões
            mais inteligentes.
          </p>
        </Reveal>

        <Reveal delay={0.9} direction="right" className="w-full">
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <PrimaryCTA />
            <NavCTA />
          </div>
        </Reveal>
      </div>

      {/* Direita — Visual */}
     <div className="relative flex w-full items-center justify-start lg:h-full lg:w-[720px] overflow-hidden">
  {/* Wrapper que mantém a composição */}
  <div
    className="
      relative
      origin-top-left
      scale-[0.7]
      sm:scale-[0.8]
      md:scale-[0.9]
      lg:scale-[1]
    "
  >
    <Reveal delay={0.6} direction="left">
      <img
        src={visual_1}
        alt="Visual TopLine 1"
        className="relative z-20 w-[640px] animate-float"
      />
    </Reveal>

    <Reveal direction="left">
      <img
        src={visual_2}
        alt="Visual TopLine 2"
        className="absolute bottom-[-50px] right-[-140px] z-10 w-[520px] animate-floatSlow"
      />
    </Reveal>
  </div>
</div>

    </div>
  )
}