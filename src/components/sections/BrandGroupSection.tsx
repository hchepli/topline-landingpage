import { SectionTitle } from "../ui/layout/SectionTitle"
import { BrandCardGrid } from "../ui/layout/BrandCardGrid"

export function BrandGroupSection() {
  return (
    <section aria-labelledby="grupo-title" className="grupo min-h-[90vh] w-full flex items-center justify-center md:pt-10">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-6 md:gap-8">
        <SectionTitle
        id="grupo-title"
          title="Grupo TF"
          description="Com mais de duas décadas de história, o Grupo TF integra empresas líderes em soluções para a construção civil. Atuando por meio das indústrias TopFusion, TopFlux e TopFiber, o grupo combina engenharia de projetos, gestão comercial e inovação para atender grandes clientes e expandir sua presença em todo o território nacional."
        />

        <BrandCardGrid />
      </div>
    </section>
  )
}
