import { useState } from "react"
import { CompanyFeatureCard } from "../cards/CompanyFeatureCard"
import { CompanyModal } from "../modal/CompanyModal"
import { Company } from "../../../types/company"
import { Reveal } from "../../animations/Reveal"

export function CompanyFeatureGrid({ company }: { company: Company }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex w-full flex-wrap justify-center gap-4 xl:w-[70%] xl:justify-end xl:gap-6">
<Reveal
  direction="up"
  delay={0.3}
  className="flex w-full pt-4 justify-end"
>
  <button
    onClick={() => setOpen(true)}
    className="group relative inline-flex flex-col text-sm font-medium text-primary"
  >
    Ver Mais

    <span
      className="
         h-[1.5px] w-full origin-left scale-x-0
        bg-black transition-transform duration-300 ease-out
        group-hover:scale-x-100
      "
    />
  </button>
</Reveal>


        {company.cards.slice(0, 4).map((card, index) => (
          <CompanyFeatureCard
            key={card.title}
            card={card}
            index={index}
          />
        ))}
      </div>

      {open && (
        <CompanyModal
          company={company}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
