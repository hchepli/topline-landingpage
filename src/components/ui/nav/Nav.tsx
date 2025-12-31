type NavProps = {
  variant?: 'desktop' | 'mobile'
}

export function Nav({ variant = 'desktop' }: NavProps) {
  const baseLink = `
    relative text-sm font-medium
    transition-colors duration-200
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:origin-left
    after:transition-[width]
    after:duration-300
  `

  return (
    <nav
      className={
        variant === 'desktop'
          ? 'hidden md:flex items-center gap-8'
          : 'flex flex-col items-center gap-10'
      }
    >
      {["Home", "O Grupo", "Empresas", "Contato"].map((item) => (
        <a
          key={item}
          href="#"
          className={`
            ${baseLink}
            ${
              variant === 'desktop'
                ? `
                  text-[rgb(var(--gray-700))]
                  hover:text-[rgb(var(--gray-900))]
                  after:bg-[rgb(var(--gray-900))]
                  hover:after:w-full
                `
                : `
                  text-lg
                  text-[rgb(var(--gray-900))]
                  after:bg-[rgb(var(--gray-900))]
                  hover:after:w-full
                `
            }
          `}
        >
          {item}
        </a>
      ))}
    </nav>
  )
}
