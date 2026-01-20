import { Reveal } from "../../animations/Reveal"

type SectionHeaderProps = {
    title: string;
    description: string;
    id?: string;
}

export function SectionHeader({title, description,}: SectionHeaderProps) {
  return (
    <Reveal direction="left" delay={0.1}>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-4">
          <h2 className="text-2xl font-semibold lg:text-3xl whitespace-nowrap">
            {title}
          </h2>
          <span className="h-[2px] flex-1 bg-[rgb(var(--brand-secondary))]" />
        </div>

        <p className="text-sm text-neutral-500 lg:text-base">
          {description}
        </p>
      </div>
    </Reveal>
  )
}
