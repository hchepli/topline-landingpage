import { Reveal } from "../../animations/Reveal"

type Props = {
  open: boolean
  onToggle: () => void
}

export function MenuToggle({ open, onToggle }: Props) {
  return (
    <Reveal
      onClick={onToggle}
      delay={0.7}
      direction="right"
      className="relative z-[70] flex h-8 w-8 items-center justify-start md:hidden"
    >
      {/* Linha 1 */}
      <span
        className={`
          absolute h-1 bg-black transition-all duration-300
          ${open
            ? 'w-8 rotate-45'
            : 'w-8 -translate-y-1.5'}
        `}
      />

      {/* Linha 2 */}
      <span
        className={`
          absolute h-1 bg-black transition-all duration-300
          ${open
            ? 'w-8 -rotate-45'
            : 'w-[60%] translate-y-1.5'}
        `}
      />
    </Reveal>
  )
}
