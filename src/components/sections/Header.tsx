import { useState } from 'react'
import { Logo } from '../ui/layout/Logo'
import { Nav } from '../ui/nav/Nav'
import { HeaderCTA } from '../ui/buttons/HeaderCTA'
import { MenuToggle } from '../ui/buttons/MenuToggle'
import { MobileMenu } from '../ui/nav/MobileMenu'
import { Reveal } from '../animations/Reveal'

export function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false) // função para fechar o menu

  return (
    <header className="absolute top-6 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between bg-white p-4 md:rounded-full md:shadow-md">
        
        {/* Logo */}
        <Reveal delay={0.7} direction="left">
          <Logo />
        </Reveal>

        <Reveal delay={0.7} direction='up'>
          <Nav />
        </Reveal>

        <Reveal className="hidden md:flex items-center gap-8" delay={0.7} direction='right'>
          <HeaderCTA />
        </Reveal>

        {/* Mobile Toggle */}
        <MenuToggle open={open} onToggle={() => setOpen(!open)} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} onNavigate={closeMenu} />
    </header>
  )
}
