import logo from "../../../assets/img/logo/topline.png"

export function Logo() {
  return (
    <div className="flex items-center gap-1">
      <img
        src={logo}
        alt="TopLine Logo"
        className="w-8 md:w-10 h-auto"
      />
      <span
        className="
          text-xl md:text-2xl
          font-extrabold
          text-[rgb(var(--gray-900))]
        "
      >
        TopLine
      </span>
    </div>
  )
}
