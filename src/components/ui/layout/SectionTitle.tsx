import { Reveal } from "../../animations/Reveal";

type SectionTitleProps = {
    title: string;
    description?: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <>
      <Reveal delay={0.3} direction="up">
        <h1 className="text-[2.6rem] md:text-[3.3rem] font-bold text-[rgb(var(--text-black))]">
          {title}
        </h1>
        <div className="mx-auto mt-3 md:mt-4 h-[3px] w-[60%] md:w-30 rounded-full bg-[rgb(var(--brand-secondary))]" />
      </Reveal>
      {description && (
      <Reveal delay={0.4} direction="up">
        <p className="max-w-4xl text-sm md:text-base text-[#6b7280] leading-relaxed">
          {description}
        </p>
      </Reveal>
        )}
    </>
  )
}
