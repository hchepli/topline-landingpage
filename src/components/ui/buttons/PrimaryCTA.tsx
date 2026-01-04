import { scrollToSection } from "../../../lib/scroll"

export function PrimaryCTA() {
  return (
    <button
      type="button"
      onClick={() => scrollToSection("empresas")}
      className="
        flex-1
        rounded-md
        bg-[rgb(var(--brand-primary))]
        p-4
        text-sm
        text-[rgb(var(--color-white))]
        transition-opacity
        hover:opacity-90
      "
    >
      Conhecer as Empresas
    </button>
  )
}
