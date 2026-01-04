import { ArrowUpRight } from "lucide-react"

type OutboundCTAProps ={
    href: string;
    label: string;
}

export function OutboundCTA({ href,label,}: OutboundCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 md:mt-3 flex items-center gap-2 rounded-lg border border-[rgb(var(--brand-secondary))] px-4 md:px-6 py-1.5 md:py-2 text-sm hover:bg-[rgb(var(--brand-secondary))] hover:text-white transition"
    >
      {label}
      <ArrowUpRight size={16} className="md:hidden" />
      <ArrowUpRight size={18} className="hidden md:block" />
    </a>
  )
}
