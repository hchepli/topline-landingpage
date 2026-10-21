import logo from "../../../assets/img/logo/logo-chp.svg"

export function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-1 bg-white pr-2 rounded-full"
      aria-label="Ir para a página inicial"
    >
      <img
        src={logo}
        alt="CHP Smart"
        className="w-7 md:w-[190px] h-auto"
      />
    </a>
  )
}
