import { ArrowUpRight } from "lucide-react";

type DiagnosticCtaProps = {
  text: string;
  buttonLabel: string;
  href: string;
};

export function DiagnosticCta({ text, buttonLabel, href }: DiagnosticCtaProps) {
  return (
    <div className="flex h-full w-full items-center justify-between rounded-full bg-blue-600 px-6 py-4 sm:w-auto sm:gap-6">
      <p className="font-semibold text-white">{text}</p>
      <a
        href={href}
        className="ml-4 flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-600 transition-opacity hover:opacity-90"
      >
        {buttonLabel}
        <ArrowUpRight className="w-5 h-auto" />
      </a>
    </div>
  );
}