import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../../../lib/scroll";

type DiagnosticCtaProps = {
  text: string;
  buttonLabel: string;
  target: string;
};

export function DiagnosticCta({ text, buttonLabel, target }: DiagnosticCtaProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 w-full rounded-3xl lg:rounded-full bg-blue-600 px-6 py-8 lg:py-5 text-center lg:text-left">
      <p className="font-semibold text-white text-base lg:text-lg leading-snug max-w-xs lg:max-w-none">
        {text}
      </p>
      <button
        onClick={() => scrollToSection(target)}
        className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition-opacity hover:opacity-90 whitespace-nowrap"
      >
        {buttonLabel}
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
}