import { Mail, Phone } from "lucide-react"

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-2 text-sm items-start text-[rgb(var(--text-secondary)/50%)]">
      <div className="flex items-center gap-2 justify-center">
        <Mail size={16} />
        <a
          href="mailto:chepli@toplinesp.com.br"
          className="hover:underline"
        >
          chepli@toplinesp.com.br
        </a>
      </div>

      <div className="flex items-center gap-2 justify-center">
        <Phone size={16} />
        <a
          href="tel:+5511911021278"
          className="hover:underline"
        >
          (+55) 11 91102-1278
        </a>
      </div>
    </div>
  )
}
