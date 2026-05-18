import { SectionTitle } from "../ui/layout/SectionTitle"
import { BrandCardGrid } from "../ui/layout/BrandCardGrid"

export function BrandGroupSection() {
  return (
    <section aria-labelledby="grupo-title" className="empresas min-h-[90vh] w-full flex items-center justify-center md:pt-10">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-6 md:gap-8">
        <SectionTitle
        id="grupo-title"
          title="Grupo TF"
          description="Com mais de duas décadas de história, o Grupo TF integra empresas líderes em soluções para a construção civil. Atuando por meio das indústrias TopFusion, TopFlux e TopFiber, o grupo combina engenharia de projetos, gestão comercial e inovação para atender grandes clientes e expandir sua presença em todo o território nacional."
        />

        <BrandCardGrid />
        <div className="flex">
          <button className="border border-[rgb(var(--brand-secondary))] hover:border-none text-black px-6 py-3 rounded-full hover:translate-y-[-5px] hover:scale-[1.03] hover:bg-[rgb(var(--brand-secondary))] hover:text-white  duration-300 transition-all">
            Ver Mais Empresas
          </button>
        </div>
      </div>
    </section>
  )
}
