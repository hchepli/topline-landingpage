import { Logo } from '../ui/layout/Logo'
import { Nav } from '../ui/nav/Nav'
import { HeaderCTA } from '../ui/buttons/HeaderCTA'
import { MenuToggle } from '../ui/buttons/MenuToggle'
import { MobileMenu } from '../ui/nav/MobileMenu'
import { Reveal } from '../animations/Reveal'
import { useEffect, useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY

      // ignora pequenos movimentos (micro scroll)
      if (Math.abs(currentScrollY - lastScrollY) < 10) return

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // descendo
        setHidden(true)
      } else {
        // subindo
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY])

  const closeMenu = () => setOpen(false)

  return (
<header
  className={`
    fixed
    left-0
    top-5
    z-50
    w-full
    mx-auto
    transition-transform
    duration-300
    ease-out
    md:translate-y-0
    ${
      hidden
        ? "-translate-y-[calc(100%+20px)] md:translate-y-0"
        : "translate-y-0"
    }
  `}
>


      <div
        className="
          mx-auto 
          flex 
          w-3/4
          items-center 
          justify-between 
          rounded-full 
          bg-white 
          px-4 
          py-3 
          shadow-md
          md:px-6
          md:max-w-6xl
        "
      >
        <Reveal delay={0.3} direction="left">
          <Logo />
        </Reveal>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <Reveal delay={0.3} direction="up">
            <Nav />
          </Reveal>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-8">
          <Reveal delay={0.3} direction="right">
            <HeaderCTA />
          </Reveal>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <MenuToggle open={open} onToggle={() => setOpen(!open)} />
        </div>
      </div>

      <MobileMenu open={open} onNavigate={closeMenu} />
    </header>
  )
}
