import logo from "../../../assets/img/logo/logo-chp.svg"

export function Logo() {
  return (
    <a
      href="/"
      className="flex shrink-0 items-center rounded-full"
      aria-label="Ir para a página inicial"
    >
      <img
        src={logo}
        alt="CHP Smart"
        className="h-auto w-[130px] shrink-0 lg:w-[140px] xl:w-[190px]"
      />
    </a>
  )
}