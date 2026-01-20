import { useEffect, useState } from "react"
import { Logo } from "../ui/layout/Logo"
import { Nav } from "../ui/nav/Nav"
import { HeaderCTA } from "../ui/buttons/HeaderCTA"
import { MenuToggle } from "../ui/buttons/MenuToggle"
import { MobileMenu } from "../ui/nav/MobileMenu"
import { Reveal } from "../animations/Reveal"

export function Header() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (open) return

    const onScroll = () => {
      const currentScrollY = window.scrollY

      if (Math.abs(currentScrollY - lastScrollY) < 10) return

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY, open])

  // 🔹 Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          pt-5
          transition-transform
          duration-300
          ease-out
          md:pt-6
          md:translate-y-0
          ${
            open
              ? "translate-y-0"
              : hidden
                ? "-translate-y-full md:translate-y-0"
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
            md:w-full
            md:max-w-6xl
            md:px-6
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

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <MenuToggle open={open} onToggle={() => setOpen(!open)} />
          </div>
        </div>
      </header>

      <MobileMenu open={open} onNavigate={closeMenu} />
    </>
  )
}
