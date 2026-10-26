import { Link } from "react-router-dom"
import { scrollToSection } from "../../../lib/scroll"

type PrimaryCTAProps = {
  label?: string
  /** Rota interna. Se informada, navega para a página em vez de rolar. */
  to?: string
  /** Id ou classe da seção para rolar. Padrão: "empresas". */
  scrollTarget?: string
}

const className = `
  flex flex-1 items-center justify-center
  rounded-md
  bg-[rgb(var(--brand-primary))]
  p-4
  text-center
  text-sm
  text-[rgb(var(--color-white))]
  transition-opacity
  hover:opacity-90
`

export function PrimaryCTA({
  label = "Conhecer as Empresas",
  to,
  scrollTarget = "empresas",
}: PrimaryCTAProps) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={() => scrollToSection(scrollTarget)}
      className={className}
    >
      {label}
    </button>
  )
}