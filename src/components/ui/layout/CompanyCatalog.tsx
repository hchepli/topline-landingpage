import { useMemo, useState } from "react"
import { LayoutGrid } from "lucide-react"
import { Company } from "../../../types/company"

const ALL_INDEX = -1

export function CompanyCatalog({ company }: { company: Company }) {
  const [activeIndex, setActiveIndex] = useState(ALL_INDEX)

  const isAll = activeIndex === ALL_INDEX
  const activeCard = !isAll ? company.cards?.[activeIndex] : undefined

  const visibleProducts = useMemo(() => {
    if (!isAll) {
      return (activeCard?.products ?? []).map((product) => ({
        ...product,
        categoryTitle: activeCard?.title,
      }))
    }
    return company.cards.flatMap((card) =>
      (card.products ?? []).map((product) => ({
        ...product,
        categoryTitle: card.title,
      }))
    )
  }, [isAll, activeCard, company.cards])

  return (
    <section
      className="flex w-full flex-col gap-8 pb-20"
      aria-labelledby={`${company.target}-catalog-title`}
    >
      <div className="flex flex-col gap-4">
        <h3
          id={`${company.target}-catalog-title`}
          className="text-2xl font-semibold text-primary lg:text-3xl"
        >
          Catálogo {company.name}
        </h3>

      <nav
  aria-label={`Categorias da ${company.name}`}
  className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
>
  <button
    onClick={() => setActiveIndex(ALL_INDEX)}
    aria-pressed={isAll}
    className={`
      flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium
      transition-all duration-200
      ${
        isAll
          ? "border-[rgb(var(--brand-secondary))] bg-[rgb(var(--brand-secondary))] text-white shadow-sm"
          : "border-border text-muted-foreground hover:border-[rgb(var(--brand-secondary))] hover:text-primary"
      }
    `}
  >
    <LayoutGrid className="h-4 w-4 shrink-0" />
    Todos
  </button>

  {company.cards.map((card, index) => {
    const isActive = activeIndex === index
    return (
      <button
        key={card.title}
        onClick={() => setActiveIndex(index)}
        aria-pressed={isActive}
        className={`
          flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium
          transition-all duration-200
          ${
            isActive
              ? "border-[rgb(var(--brand-secondary))] bg-[rgb(var(--brand-secondary))] text-white shadow-sm"
              : "border-border text-muted-foreground hover:border-[rgb(var(--brand-secondary))] hover:text-primary"
          }
        `}
      >
        <card.icon className="h-4 w-4 shrink-0" />
        {card.title}
      </button>
    )
  })}
</nav>

        {activeCard?.description && (
          <p className="text-sm text-muted-foreground">
            {activeCard.description}
          </p>
        )}
      </div>

      <div
        key={activeIndex}
        className="grid animate-[fadeIn_0.3s_ease] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {visibleProducts.length ? (
          visibleProducts.map((product, index) => (
            <div
              key={`${product.title}-${index}`}
              className="group flex flex-col gap-3 rounded-xl border p-4 transition hover:border-[rgb(var(--brand-secondary))] hover:shadow-md"
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-28 w-full rounded-lg object-contain bg-muted transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-28 w-full items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
                  Sem imagem
                </div>
              )}

              <div>
                {isAll && product.categoryTitle && (
                  <span className="mb-1 inline-block text-[10px] font-medium uppercase tracking-wide text-[rgb(var(--brand-secondary))]">
                    {product.categoryTitle}
                  </span>
                )}
                <h4 className="text-sm font-medium leading-snug">
                  {product.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-sm text-muted-foreground">
            Nenhum produto disponível para esta categoria.
          </p>
        )}
      </div>
    </section>
  )
}