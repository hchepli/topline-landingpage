import { ArrowUpRight } from "lucide-react";

type DiagnosticCtaProps = {
  text: string;
  buttonLabel: string;
  href: string;
};

export function DiagnosticCta({ text, buttonLabel, href }: DiagnosticCtaProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full rounded-3xl sm:rounded-full bg-blue-600 px-6 py-8 sm:py-5 text-center sm:text-left">
      <p className="font-semibold text-white text-base sm:text-lg leading-snug max-w-xs sm:max-w-none">
        {text}
      </p>
      <a
        href={href}
        className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition-opacity hover:opacity-90 whitespace-nowrap"
      >
        {buttonLabel}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}