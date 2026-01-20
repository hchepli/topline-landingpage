import { SquareArrowOutUpRight } from "lucide-react"
import { OutboundCTA } from "../buttons/OutboundCTA"
import { scrollToSection } from "../../../lib/scroll"

type BrandCardProps = {
  img: string
  name: string
  url: string
  target: string
}

export function BrandCard({ img, name, url, target }: BrandCardProps) {
  return (
    <a
      href={`#${target}`}
      onClick={(e) => {
        e.preventDefault()
        scrollToSection(target)
      }}
      className="
        relative cursor-pointer block
        rounded-2xl bg-white
        border border-[rgb(var(--brand-secondary))]
        shadow-sm hover:shadow-lg
        transition-all
        px-5 md:px-7
      "
    >
      <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 rounded-lg bg-[rgb(var(--brand-secondary))] p-1.5 md:p-2">
        <SquareArrowOutUpRight size={18} className="text-white md:hidden" />
        <SquareArrowOutUpRight size={22} className="text-white hidden md:block" />
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-5 p-5 md:p-7">
        <img
          src={img}
          alt={`Logotipo da ${name}`}
          className="h-20 w-20 md:h-24 md:w-24 object-contain"
        />

        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg md:text-xl font-semibold text-[#1f2937]">
            {name}
          </h3>
          <div className="h-[2px] w-14 md:w-16 rounded-full bg-[rgb(var(--brand-secondary))]" />
        </div>

        {/* CTA externo mantém comportamento */}
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <OutboundCTA href={url} label="Visitar site" />
        </div>
      </div>
    </a>
  )
}
