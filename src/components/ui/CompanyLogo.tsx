// src/components/ui/CompanyLogo.tsx
type CompanyLogoProps = {
  image: string
  name: string
  /** Defina a altura aqui (ex.: "h-20"). A largura acompanha a imagem. */
  className?: string
}

/** Mostra o logo da empresa; se ainda não houver imagem, mostra a inicial. */
export function CompanyLogo({ image, name, className = "h-20" }: CompanyLogoProps) {
  if (!image || image === "#") {
    return (
      <div
        aria-hidden="true"
        className={`aspect-square grid place-items-center text-4xl font-semibold text-[rgb(var(--brand-secondary))] ${className}`}
      >
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={`Logotipo da ${name}`}
      className={`w-auto max-w-[9rem] object-contain ${className}`}
    />
  )
}
