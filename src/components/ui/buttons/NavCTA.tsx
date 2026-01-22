import { ArrowUpRight } from "lucide-react"
import { scrollToSection } from "../../../lib/scroll"

type NavCtaVariant = "default" | "inverted"

type NavCtaProps = {
  title: string
  scrollTarget?: string
  href?: string
  delay?: number
  variant?: NavCtaVariant
}

const variants = {
  default: {
    border: "border-[rgb(var(--color-black))]",
    text: "text-[rgb(var(--color-black))]",
    bgHover: "bg-[rgb(var(--color-black))]",
    textHover: "group-hover:text-white",
  },
  inverted: {
    border: "border-white",
    text: "text-white",
    bgHover: "bg-white",
    textHover: "group-hover:text-[rgb(var(--color-black))]",
  },
}

export function NavCTA({
  title,
  scrollTarget,
  href,
  delay = 0,
  variant = "default",
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

  const styles = variants[variant]

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        relative overflow-hidden
        flex flex-1 items-center justify-center gap-2.5
        rounded-md border
        p-4 text-base
        transition-colors duration-300
        group
        ${styles.border}
        ${styles.text}
      `}
    >
      {/* background hover */}
      <span
        className={`
          absolute inset-y-0 left-0
          w-0
          transition-all duration-300 ease-out
          group-hover:w-full
          z-0
          ${styles.bgHover}
        `}
      />

      {/* content */}
      <span
        className={`
          relative z-10
          flex items-center gap-2.5 text-sm
          transition-colors duration-300
          ${styles.textHover}
        `}
      >
        {title}
        <span className="transition-transform duration-300 group-hover:translate-x-[3px]">
          <ArrowUpRight size={20} />
        </span>
      </span>
    </button>
  )
}
