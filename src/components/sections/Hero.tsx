import { Reveal } from "../animations/Reveal"
import { NavCTA } from "../ui/buttons/NavCTA"
import { PrimaryCTA } from "../ui/buttons/PrimaryCTA"
import visual_1 from "../../assets/img/logo/visual_1.png"
import visual_2 from "../../assets/img/logo/visual_2.png"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full hero flex justify-center overflow-hidden pb-10 lg:pb-0 mb-10 lg:mb-0"
    >
      {/* BACKGROUND – ALTURA CONTROLADA */}
      <div
        aria-hidden
        className="
          absolute
          top-0
          h-[110vh]
          lg:h-[100vh]
          xl:h-[90vh]
          w-[100%]
          bg-[#0F2240]
          rounded-bl-[48px] md:rounded-bl-[96px] lg:rounded-bl-[300px]
          z-0
        "
      />

      {/* CONTAINER CENTRAL */}
      <div
        className="
          relative
          z-10
          min-h-screen
          max-w-7xl
          mx-auto
          flex
          flex-col-reverse
          items-center
          gap-16
          px-4
          min-[1100px]:flex-row
          max-[1100px]:justify-center
          xl:justify-between
          lg:px-6
        "
      >
        {/* TEXTO */}
        <div className="flex w-full max-w-xl flex-col gap-5 min-[1100px]:w-[45%] lg:max-w-none">
          <Reveal delay={0.3} direction="right">
            <h1
              id="hero-title"
              className="font-black text-white text-2xl leading-snug tracking-[.08rem] md:text-3xl lg:text-4xl"
            >
              <span className="block min-[400px]:inline min-[1100px]:block">
                TOPLINE: UMA{" "}
              </span>

              <span className="block min-[400px]:inline min-[1100px]:block">
                CONEXÃO FORTE
              </span>

              <span className="block text-[rgb(var(--brand-secondary))]">
                COM VOCÊ
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.4} direction="right">
            <p className="font-medium text-lg lg:w-[90%] leading-snug tracking-[.08rem] text-[rgb(var(--color-white)/50%)] md:text-xl lg:text-2xl">
              TopLine gestão empresarial, grupo TF
            </p>
          </Reveal>

          <Reveal delay={0.6} direction="right" className="w-full">
            <nav
              aria-label="Ações principais"
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <PrimaryCTA />
              <NavCTA
                title="Conhecer o Grupo"
                scrollTarget="grupo"
                variant="inverted"
                delay={700}
              />
            </nav>
          </Reveal>
        </div>

        {/* VISUAIS */}
        <div className="flex mt-10 lg:mt-0 items-center w-full lg:w-2/3 justify-center">
          <div
            className="
              relative
              origin-top-center
              scale-[0.8]
              md:scale-[0.9]
              lg:scale-[1]
            "
          >
            <Reveal delay={0.3} direction="left">
              <figure>
                <img
                  src={visual_1}
                  alt="Visual TopLine 1"
                  className="relative z-10 w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[550px] animate-float"
                />
              </figure>
            </Reveal>

            <figure>
              <img
                src={visual_2}
                alt="Visual TopLine 2"
                className="absolute bottom-[-20px] right-[-30px] z-20 w-[150px] 2xl:w-[200px] animate-floatSlow"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
