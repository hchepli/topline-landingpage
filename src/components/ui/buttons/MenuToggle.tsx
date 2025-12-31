import { Reveal } from "../../animations/Reveal"

type Props = {
  open: boolean
  onToggle: () => void
}

export function MenuToggle({ open, onToggle }: Props) {
  return (
    <Reveal onClick={onToggle} delay={0.7} direction="right" className="relative z-[70] flex h-8 w-8 flex-col justify-center md:hidden">
      <span
        className={`absolute h-0.5 w-8 bg-black transition-transform duration-300
        ${open ? 'rotate-45' : '-translate-y-2'}`}
      />
      <span
        className={`absolute h-0.5 w-8 bg-black transition-opacity duration-300
        ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute h-0.5 w-8 bg-black transition-transform duration-300
        ${open ? '-rotate-45' : 'translate-y-2'}`}
      />
    </Reveal>
  )
}
