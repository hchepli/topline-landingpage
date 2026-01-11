import { CompanyFeatureCard } from "../cards/CompanyFeatureCard"

export function CompanyFeatureGrid({
  cards,
}: {
  cards: any[]
}) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4 xl:w-[70%] xl:justify-end xl:gap-6">
      {cards.map((card, index) => (
        <CompanyFeatureCard
          key={card.title}
          card={card}
          index={index}
        />
      ))}
    </div>
  )
}
