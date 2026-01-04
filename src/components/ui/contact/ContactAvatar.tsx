import avatar from "../../../assets/img/avatar.png"

export function ContactAvatar() {
  return (
    <img
      src={avatar}
      alt="Contato comercial"
      className="h-auto w-40 rounded-full object-cover border border-neutral-200"
    />
  )
}
