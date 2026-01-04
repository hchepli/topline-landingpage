import { ContactAvatar } from "../contact/ContactAvatar"
import { ContactIdentity } from "../contact/ContactIdenty"
import { ContactDetails } from "../contact/ContactDetails"
import { OutboundCTA } from "../buttons/OutboundCTA"

export function ContactCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl py-10 px-12 shadow-lg flex flex-col items-center gap-5">
      <ContactAvatar />
      <ContactIdentity />
      <ContactDetails />
      <OutboundCTA
        href="https://wa.me/5511911021278"
        label="Entrar em Contato"
      />
    </div>
  )
}
