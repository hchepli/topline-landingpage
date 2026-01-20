import logo from "../../../assets/img/logo/topline.png"

export function Logo() {
  return (
    <a
      href="#hero"
      className="flex items-center gap-1 bg-white pr-2 rounded-full"
      aria-label="Ir para a página inicial"
    >
      <img
        src={logo}
        alt="TopLine"
        className="w-7 md:w-10 h-auto"
      />

      <strong
        className="
          text-xl md:text-2xl
          font-extrabold
          text-[rgb(var(--gray-900))]
        "
      >
        TopLine
      </strong>
    </a>
  )
}
