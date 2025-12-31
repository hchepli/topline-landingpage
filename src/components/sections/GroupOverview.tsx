import { Reveal } from "../animations/Reveal"
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react"
import topfusion from "../../assets/img/logo/topfusion.png"
import topfiber from "../../assets/img/logo/topfiber.png"
import topflux from "../../assets/img/logo/topflux.png"

export function GroupOverview() {
  return (
    <section className="grupo min-h-screen w-full bg-[#f6f9fc] flex items-center justify-center pt-8 md:pt-10">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-6 md:gap-8">

        {/* Título */}
        <Reveal delay={0.3} direction="up">
          <h1 className="text-[2.6rem] md:text-[3.3rem] font-bold text-[rgb(var(--text-black))]">
            Grupo TF
          </h1>
          <div className="mx-auto mt-3 md:mt-4 h-[3px] w-24 md:w-30 rounded-full bg-[rgb(var(--brand-secondary))]" />
        </Reveal>

        {/* Descrição */}
        <Reveal delay={0.4} direction="up">
          <p className="max-w-4xl text-sm md:text-base text-[#6b7280] leading-relaxed">
            O Grupo TF reúne empresas estratégicas que atuam de forma integrada para acelerar crescimento, estrutura e performance de negócios. Cada empresa resolve uma parte do problema — juntas, entregam o todo.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          {[
            { img: topfusion, name: "TopFusion", url: "https://topfusion.com.br/" },
            { img: topfiber, name: "TopFiber", url: "https://www.topfiber.ind.br/" },
            { img: topflux, name: "TopFlux", url: "https://www.topflux.com.br/" },
          ].map((item, i) => (
            <Reveal key={item.name} delay={0.5 + i * 0.2} direction="up">
              <div className="relative rounded-2xl bg-white border border-[rgb(var(--brand-secondary))] shadow-sm hover:shadow-lg transition-all px-5 md:px-7">

                {/* Ícone canto */}
                <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 rounded-lg bg-[rgb(var(--brand-secondary))] p-1.5 md:p-2">
                  <SquareArrowOutUpRight size={18} className="text-white md:hidden" />
                  <SquareArrowOutUpRight size={22} className="text-white hidden md:block" />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col items-center gap-4 md:gap-5 p-5 md:p-7">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-20 w-20 md:h-24 md:w-24 object-contain"
                  />

                  {/* Nome + borda */}
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-[#1f2937]">
                      {item.name}
                    </h3>
                    <div className="h-[2px] w-14 md:w-16 rounded-full bg-[rgb(var(--brand-secondary))]" />
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 md:mt-3 flex items-center gap-2 rounded-lg border border-[rgb(var(--brand-secondary))] px-5 md:px-6 py-1.5 md:py-2 text-sm hover:bg-[rgb(var(--brand-secondary))] hover:text-white transition"
                  >
                    Visitar site
                    <ArrowUpRight size={16} className="md:hidden" />
                    <ArrowUpRight size={18} className="hidden md:block" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
