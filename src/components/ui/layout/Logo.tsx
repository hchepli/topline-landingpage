import logo from "../../../assets/img/logo/topline.png"

export function Logo() {
  return (
    <div className="flex items-center gap-1 bg-white pr-2
    rounded-full">
      <img
        src={logo}
        alt="TopLine Logo"
        className="w-7 md:w-10 h-auto"
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
