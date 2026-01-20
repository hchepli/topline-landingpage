import { Reveal } from "../../animations/Reveal"
import topfusion from "../../../assets/img/logo/topfusion.png"
import topfiber from "../../../assets/img/logo/topfiber.png"
import topflux from "../../../assets/img/logo/topflux.png"
import { BrandCard } from "../cards/BrandCard"

export function BrandCardGrid() {
  const brands = [
    {
      img: topfusion,
      name: "TopFusion",
      url: "https://topfusion.com.br/",
      target: "topfusion",
    },
    {
      img: topfiber,
      name: "TopFiber",
      url: "https://www.topfiber.ind.br/",
      target: "topfiber",
    },
    {
      img: topflux,
      name: "TopFlux",
      url: "https://www.topflux.com.br/",
      target: "topflux",
    },
  ]

  return (
<ul
  className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
  aria-label="Empresas do Grupo TF"
>
  {brands.map((item, i) => (
    <li key={item.name}>
      <Reveal delay={0.3 + i * 0.2} direction="up">
        <BrandCard {...item} />
      </Reveal>
    </li>
  ))}
</ul>

  )
}
