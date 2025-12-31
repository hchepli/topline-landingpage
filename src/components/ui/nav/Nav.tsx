import { scrollToSection } from '../../../lib/scroll'

type NavProps = {
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

const NAV_ITEMS = [
  { label: 'Home', target: 'mainPrincipal' },
  { label: 'O Grupo', target: 'grupo' },
  { label: 'Empresas', target: 'empresas' },
  { label: 'Contato', target: 'mainContato' },
]

export function Nav({ variant = 'desktop', onNavigate }: NavProps) {
  const baseLink = `
    relative text-sm font-medium cursor-pointer
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
    <nav className={variant === 'desktop' ? 'hidden md:flex items-center gap-8' : 'flex flex-col items-center gap-10'}>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => {
            scrollToSection(item.target)
            onNavigate?.() // fecha o menu mobile ao clicar
          }}
          className={`
            ${baseLink}
            ${
              variant === 'desktop'
                ? `text-[rgb(var(--gray-700))] hover:text-[rgb(var(--gray-900))] after:bg-[rgb(var(--gray-900))] hover:after:w-full`
                : `text-lg text-[rgb(var(--gray-900))] after:bg-[rgb(var(--gray-900))] hover:after:w-full`
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
