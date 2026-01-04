import { ArrowUpRight } from "lucide-react"
import { scrollToSection } from "../../../lib/scroll"

type NavCtaProps = {
  title: string
  scrollTarget?: string
  href?: string
  delay?: number
}

export function NavCTA({
  title,
  scrollTarget,
  href,
  delay,
}: NavCtaProps) {
  function handleClick() {
    if (scrollTarget) {
      scrollToSection(scrollTarget)
    }

    if (href) {
      setTimeout(() => {
        window.open(href, "_blank")
      }, delay)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        relative overflow-hidden
        flex flex-1 items-center justify-center gap-2.5
        rounded-md border border-[rgb(var(--color-black))]
        p-4 text-base
        text-[rgb(var(--color-black))]
        transition-colors duration-300
        group
      "
    >
      <span
        className="
          absolute inset-y-0 left-0
          w-0 bg-[rgb(var(--color-black))]
          transition-all duration-300 ease-out
          group-hover:w-full
          z-0
        "
      />

      <span
        className="
          relative z-10
          flex items-center gap-2.5 text-sm
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {title}
        <span className="transition-transform duration-300 group-hover:translate-x-[3px]">
          <ArrowUpRight size={20} />
        </span>
      </span>
    </button>
  )
}
