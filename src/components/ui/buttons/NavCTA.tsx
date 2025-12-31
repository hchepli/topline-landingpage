import { ArrowUpRight } from "lucide-react"

export function NavCTA() {
  return (
    <button
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
      {/* fundo animado */}
      <span
        className="
          absolute inset-y-0 left-0
          w-0 bg-[rgb(var(--color-black))]
          transition-all duration-300 ease-out
          group-hover:w-full
          z-0
        "
      />

      {/* conteúdo */}
      <span
        className="
          relative z-10
          flex items-center gap-2.5
          transition-colors duration-300
          group-hover:text-white
        "
      >
        Sobre o Grupo

        {/* ícone animado */}
        <span
          className="
            transition-transform duration-300 ease-out
            group-hover:translate-x-[3px]
          "
        >
          <ArrowUpRight size={20} />
        </span>
      </span>
    </button>
  )
}
