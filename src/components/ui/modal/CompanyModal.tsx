import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Company } from "../../../types/company"
import { NavCTA } from "../buttons/NavCTA"

export function CompanyModal({
  company,
  onClose,
  id,
}: {
  company: Company
  onClose: () => void
  id?: string
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

  const activeCard = company.cards?.[activeIndex]

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        id={id}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative
          w-full max-w-5xl
          max-h-[90vh]
          bg-white
          rounded-2xl
          flex flex-col
          overflow-hidden
          transition-all duration-200
          ${visible
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-4 opacity-0"}
        `}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          aria-label="Fechar modal"
          className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-black"
        >
          <X />
        </button>

        {/* Header */}
        <header className="shrink-0 border-b p-6 flex items-center gap-3">
          <img
            className="w-[75px] h-auto"
            src={company.image}
            alt={`Logo da ${company.name}`}
          />
          <h2 id={`${id}-title`} className="text-2xl font-semibold">
            {company.name}
          </h2>
        </header>

        {/* Body */}
        <div className="flex flex-1 min-h-0 flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="shrink-0 w-full md:w-72 border-b md:border-b-0 md:border-r">
            <nav
              aria-label={`Categorias da ${company.name}`}
              className="p-3 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden"
            >
              {company.cards.map((card, index) => (
                <button
                  key={card.title}
                  onClick={() => setActiveIndex(index)}
                  aria-selected={activeIndex === index}
                  className={`
                    flex min-w-[150px] md:min-w-0 items-center gap-3 px-4 py-3 text-left
                    transition-all duration-200
                    ${
                      activeIndex === index
                        ? "bg-muted font-medium text-primary md:border-l-4 md:border-[rgb(var(--brand-secondary))]"
                        : "hover:bg-muted/60 md:border-l-4 border-transparent"
                    }
                  `}
                >
                  <card.icon className="h-5 w-5 shrink-0" />
                  <span className="text-sm">{card.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex flex-1 min-h-0 p-6">
            {activeCard?.products && activeCard.products.length > 0 ? (
              <div className="flex-1 min-h-0 overflow-y-auto pr-2">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {activeCard.products.map((product, index) => (
                    <div
                      key={`${product.title}-${index}`}
                      className="flex flex-col gap-3 rounded-xl border p-4 transition hover:shadow-md"
                    >
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-28 w-full rounded-lg object-contain bg-muted"
                        />
                      ) : (
                        <div className="flex h-28 w-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
                          Sem imagem
                        </div>
                      )}

                      <div>
                        <h4 className="font-medium">
                          {product.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nenhum produto disponível para esta categoria.
              </p>
            )}
          </main>
        </div>

        {/* Footer */}
        <footer className="shrink-0 border-t p-6 flex justify-center min-[700px]:justify-end">
          <div className="w-full min-[700px]:w-auto">
            <NavCTA title={company.buttonLabel} href={company.href} />
          </div>
        </footer>
      </section>
    </div>
  )
}
