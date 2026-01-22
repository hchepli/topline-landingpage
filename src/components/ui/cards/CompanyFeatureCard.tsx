import { Reveal } from "../../animations/Reveal"

export function CompanyFeatureCard({
  card,
  index,
}: {
  card: any
  index: number
}) {
  const Icon = card.icon
  const delay = 0.3 + index * 0.08

  return (
    <Reveal direction="up" delay={delay}>
      <article
        className={`
    group
    flex flex-col items-center text-center gap-2 rounded-xl p-3 text-sm
    transition-transform duration-300 ease-out
    hover:translate-x-[2px] hover:-translate-y-[2px]

    lg:items-start lg:text-left

    md:scale-[0.9]
    lg:scale-[0.9]
    xl:scale-[0.9]
    2xl:scale-[1]

${card.featured
            ? `
      bg-[rgb(var(--brand-secondary))] text-white
      w-[110px] lg:w-full
    `
            : `
      border border-neutral-200 bg-white
      w-[100px] lg:w-full
    `
          }


    lg:p-4 lg:text-base
  `}
      >



        <div
          className={`
            flex h-9 w-9 items-center justify-center rounded-md
            transition-transform duration-300 ease-out
            group-hover:translate-x-[1px] group-hover:-translate-y-[1px]
            lg:h-10 lg:w-10
            ${card.featured
              ? "bg-white/20"
              : "bg-[rgb(var(--brand-secondary))]/10"
            }
          `}
        >
          <Icon
            size={18}
            className={
              card.featured
                ? "text-white"
                : "text-[rgb(var(--brand-secondary))]"
            }
          />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-medium">{card.title}</h4>

          <p
            className={`
      mt-1 text-xs lg:mt-2 lg:text-sm
      hidden lg:block
      ${card.featured ? "text-white/80" : "text-neutral-500"}
    `}
          >
            {card.description}
          </p>
        </div>

      </article>
    </Reveal>
  )
}
