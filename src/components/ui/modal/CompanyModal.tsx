import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Company } from "../../../types/company"
import { NavCTA } from "../buttons/NavCTA"

export function CompanyModal({
  company,
  onClose,
}: {
  company: Company
  onClose: () => void
}) {
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setVisible(true)
  }, [])

  function handleClose() {
    setVisible(false)
    setTimeout(onClose, 200)
  }

  const activeCard = company.cards[activeIndex]

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-h-[90vh] w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white transition-all duration-200 ${
          visible
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-black"
        >
          <X />
        </button>

        {/* Header */}
        <div className="border-b p-6 flex items-center gap-2">
          <img className="w-[75px] h-auto" src={company.image} alt={company.name} />
          <h2 className="text-2xl font-semibold">{company.name}</h2>
        </div>

        {/* Body */}
        <div className="flex h-[60vh] flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full border-b md:w-72 md:border-b-0 md:border-r">
           <nav className="p-2 md:p-4 md:gap-2 flex flex-row overflow-x-auto md:flex-col md:overflow-x-hidden">
              {company.cards.map((card, index) => (
<button
  key={card.title}
  onClick={() => setActiveIndex(index)}
  className={`
    relative flex min-w-[150px] md:min-w-0 items-center gap-3 px-4 py-3 text-left
    transition-all duration-200
    ${
      activeIndex === index
        ? "bg-muted font-medium text-primary md:border-l-4 md:border-[rgb(var(--brand-secondary))] translate-x-[5px]"
        : "hover:bg-muted/60 md:border-l-4 border-transparent"
    }
  `}
>
  <card.icon className="h-5 w-5 shrink-0" />
  <span className="text-sm transition-transform duration-200">
    {card.title}
  </span>
</button>

              ))}
            </nav>
          </aside>

          {/* Content (placeholder) */}
          <main className="flex flex-1 items-center justify-center p-6">
            <div className="text-center">
              <h3 className="text-lg font-medium">
                {activeCard.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Aqui você poderá exibir produtos, banners ou informações
                específicas desta categoria.
              </p>

              <div className="mt-6 h-40 w-full max-w-md rounded-xl border border-dashed" />
            </div>
          </main>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <div className="p-6">
          <NavCTA title={company.buttonLabel} href={company.href} />
          </div>
        </div>
      </div>
    </div>
  )
}
