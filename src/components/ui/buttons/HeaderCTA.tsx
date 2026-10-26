import { ArrowUpRight } from "lucide-react"

export function HeaderCTA() {
  return (
    <a
      href="https://www.linkedin.com/in/chepli-topfusion-topfiber/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[rgb(var(--brand-dark)/10%)] px-4 py-2 text-sm font-medium text-[rgb(var(--gray-900))] hover:opacity-80"
    >
      Conhecer a CHP Smart
      <ArrowUpRight className="h-4 w-4 shrink-0" />
    </a>
  )
}