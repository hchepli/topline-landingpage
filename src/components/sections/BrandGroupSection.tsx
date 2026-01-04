import { SectionTitle } from "../ui/layout/SectionTitle"
import { BrandCardGrid } from "../ui/layout/BrandCardGrid"

export function BrandGroupSection() {
  return (
    <section className="grupo min-h-screen w-full flex items-center justify-center pt-8 md:pt-10">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-6 md:gap-8">
        <SectionTitle
          title="Grupo TF"
          description="O Grupo TF reúne empresas estratégicas que atuam de forma integrada para acelerar crescimento, estrutura e performance de negócios. Cada empresa resolve uma parte do problema — juntas, entregam o todo."
        />

        <BrandCardGrid />
      </div>
    </section>
  )
}
