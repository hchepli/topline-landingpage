import { Link } from "react-router-dom"
import { Reveal } from "../../animations/Reveal"
import { NavCTA } from "../buttons/NavCTA"
import { PrimaryCTA } from "../buttons/PrimaryCTA"
import { companies } from "../../../data/companies"

type IntroBrand = {
  target: string
  name: string
  image: string
  url?: string
}

type DistributionIntroProps = {
  company: {
    image: string
    name: string
    description: string
  }
  brands?: IntroBrand[]
  badge?: string
  headline?: [string, string]
  subtitle?: string
  brandsCaption?: string
  ctaTitle?: string
  ctaTarget?: string
}

const brandLinkClassName =
  "flex h-24 items-center justify-center rounded-2xl bg-white p-5 shadow-lg shadow-black/10 ring-1 ring-black/5 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2240] lg:h-28"

/* Repete a lista até ter itens suficientes para cobrir a largura sem abrir buraco */
const MIN_ITEMS = 8

function buildBase<T>(items: T[]): T[] {
  if (items.length === 0) return items
  const out: T[] = []
  while (out.length < MIN_ITEMS) out.push(...items)
  return out
}

export function DistributionIntro({
  company,
  brands = companies,
  badge = "Distribuidor oficial",
  headline = ["Do fabricante", "direto à obra."],
  subtitle = `A ${company.name} distribui as marcas oficiais do ecossistema CHP Smart.`,
  brandsCaption = `Marcas distribuídas pela ${company.name}`,
  ctaTitle = "Ver produtos",
  ctaTarget = "catalogo",
}: DistributionIntroProps) {
  const base = buildBase(brands)
  const duplicated = [...base, ...base]

  const renderBrand = (brand: IntroBrand, isClone: boolean) => {
    const content = (
      <img
        src={brand.image}
        alt={brand.name}
        className="max-h-full max-w-full object-contain"
      />
    )

    return brand.url ? (
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visitar o site da ${brand.name}`}
        tabIndex={isClone ? -1 : undefined}
        className={brandLinkClassName}
      >
        {content}
      </a>
    ) : (
      <Link
        to={`/${brand.target}`}
        aria-label={`Conhecer ${brand.name}`}
        tabIndex={isClone ? -1 : undefined}
        className={brandLinkClassName}
      >
        {content}
      </Link>
    )
  }

  return (
    <section
      aria-labelledby="distribuicao-title"
      className="relative w-full hero pb-10 lg:pb-12"
    >
      {/* BLOCO AZUL – mesma cor e curva da Hero, conteúdo centralizado na vertical */}
      <div
        className="
          relative
          z-0
          flex
          min-h-[100vh]
          flex-col
          bg-[#0F2240]
          rounded-bl-0 md:rounded-bl-[96px] lg:rounded-bl-[300px]
          lg:min-h-[max(90vh,800px)]
        "
      >
        <div
          className="
            mx-auto
            my-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-14
            px-4
            pb-8
            pt-40
            lg:grid-cols-2
            lg:gap-10
            lg:px-6
            lg:pt-52
          "
        >
          {/* TEXTO */}
          <div className="flex max-w-lg flex-col gap-5">
            <Reveal delay={0.3} direction="right">
              <h1
                id="distribuicao-title"
                className="font-black uppercase text-white text-3xl leading-snug tracking-[.09rem] lg:text-4xl xl:text-5xl"
              >
                <span className="block">{headline[0]}</span>
                <span className="block text-[rgb(var(--brand-primary))]">
                  {headline[1]}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.4} direction="right">
              <p className="max-w-md font-medium text-lg leading-snug tracking-[.08rem] text-[rgb(var(--color-white)/50%)]">
                {subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.6} direction="right" className="w-full">
              <nav
                aria-label="Ações principais"
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
                <PrimaryCTA />
                <NavCTA
                  title={ctaTitle}
                  scrollTarget={ctaTarget}
                  variant="inverted"
                  delay={700}
                />
              </nav>
            </Reveal>
          </div>

          {/* DISTRIBUIDOR EM DESTAQUE */}
          <Reveal
            delay={0.3}
            direction="left"
            className="flex justify-center lg:justify-end"
          >
            <figure className="relative w-full max-w-md animate-float motion-reduce:animate-none">
              <span className="absolute -top-4 left-8 z-10 rounded-full bg-[rgb(var(--brand-primary))] px-4 py-1.5 text-sm font-semibold text-white">
                {badge}
              </span>

              <div className="flex h-56 items-center justify-center rounded-[2rem] bg-white px-10 shadow-2xl shadow-black/30 sm:h-64">
                <img
                  src={company.image}
                  alt={company.name}
                  className="max-h-24 w-full object-contain sm:max-h-28"
                />
              </div>
            </figure>
          </Reveal>
        </div>

        {/* LEGENDA DAS MARCAS – dentro do azul, logo acima dos logos */}
        <div className="mx-auto flex w-full max-w-3xl items-center gap-4 px-4 pb-[4.5rem] lg:pb-20">
          <span aria-hidden className="h-px flex-1 bg-white/15" />
          <p className="shrink-0 text-center text-sm font-medium text-white/60">
            {brandsCaption}
          </p>
          <span aria-hidden className="h-px flex-1 bg-white/15" />
        </div>
      </div>

      {/* MARCAS – carrossel com limite de largura, metade no azul, metade no branco */}
      <div className="relative z-20 mx-auto -mt-[4.5rem] w-full max-w-7xl px-4 lg:-mt-20 lg:px-6">
        <style>{`
          @keyframes brands-enter {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes brands-marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .brands-enter {
            animation: brands-enter 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
          }
          .brands-marquee-track {
            animation: brands-marquee 30s linear infinite;
          }
          .brands-marquee-track:hover,
          .brands-marquee-track:focus-within {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .brands-enter { animation: none; }
            .brands-marquee-track { animation: none; }
          }
        `}</style>

        {/* Entrada: a esteira inteira sobe de uma vez (sem animar card por card) */}
        <div className="brands-enter">
          {/* Padding dá espaço para a sombra e o hover não serem cortados pela máscara */}
          <div
            className="w-full pb-10 pt-6"
            style={{
              overflowX: "clip",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            }}
          >
            <ul
              className="brands-marquee-track flex w-max items-stretch gap-3"
              aria-label={brandsCaption}
            >
              {duplicated.map((brand, i) => {
                const isClone = i >= base.length
                return (
                  <li
                    key={`${brand.target}-${i}`}
                    aria-hidden={isClone || undefined}
                    className="w-44 shrink-0 sm:w-52 lg:w-56"
                  >
                    {renderBrand(brand, isClone)}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}