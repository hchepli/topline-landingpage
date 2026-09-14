import { scrollToSection } from '../../../lib/scroll'

type NavProps = {
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

const NAV_ITEMS = [
  { label: 'Home', href: '/', type: 'page' },
  { label: 'Serviços', target: 'services', type: 'section' },
  { label: 'Empresas', href: '/empresas', type: 'page' },
  { label: 'Sobre Nós', href: '/sobre', type: 'page' },
  { label: 'Contato', target: 'contact', type: 'section' },
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
    <ul
      className={
        variant === 'desktop'
          ? 'hidden md:flex items-center gap-8'
          : 'flex flex-col items-center gap-10'
      }
    >
      {NAV_ITEMS.map((item) => (
        <li key={item.label}>
          <a
            href={item.type === 'page' ? item.href : `#${item.target}`}
            onClick={(e) => {
              if (item.type === 'section') {
                e.preventDefault()
                scrollToSection(item.target!)
              }

              onNavigate?.()
            }}
            className={`
        ${baseLink}
        ${variant === 'desktop'
                ? 'text-[rgb(var(--gray-700))] hover:text-[rgb(var(--gray-900))] after:bg-[rgb(var(--gray-900))] hover:after:w-full'
                : 'text-lg text-[rgb(var(--gray-900))] after:bg-[rgb(var(--gray-900))] hover:after:w-full'
              }
      `}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
