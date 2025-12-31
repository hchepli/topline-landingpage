type Props = {
  open: boolean
}
import { Logo } from "../ui/layout/Logo"
import { Nav } from "../ui/nav/Nav"
import { HeaderCTA } from "../ui/buttons/HeaderCTA"

export function MobileMenu({ open }: Props) {
  return (
    <div
      className={`
        fixed inset-0 z-[60]
        flex flex-col items-center justify-center gap-10
        bg-white
        transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* Logo central */}
      <div
        className={`
          transition-all duration-500
          ${open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        `}
      >
        <Logo />
      </div>

      <Nav variant="mobile" />
      <HeaderCTA />
    </div>
  )
}
