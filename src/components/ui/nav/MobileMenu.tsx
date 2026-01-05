import { Logo } from "../layout/Logo"
import { Nav } from "./Nav"
import { HeaderCTA } from "../buttons/HeaderCTA"
import { X } from "lucide-react"

type Props = {
  open: boolean
  onNavigate?: () => void
}

export function MobileMenu({ open, onNavigate }: Props) {
  return (
    <div
      className={`
        fixed inset-0 z-[60]
        flex flex-col items-center justify-center gap-10
        bg-white
        transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <button
        onClick={onNavigate}
        className="absolute top-6 right-6 z-[70] rounded-full p-2 hover:bg-neutral-100"
        aria-label="Fechar menu"
      >
        <X className="h-auto w-10" />
      </button>

      {/* Logo */}
      <div
        className={`transition-all duration-500 ${
          open ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <Logo />
      </div>

      {/* Nav móvel */}
      <Nav variant="mobile" onNavigate={onNavigate} />

      <HeaderCTA />
    </div>
  )
}
