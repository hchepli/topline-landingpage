import { Quote, User } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  clientSince: string;
  name: string;
  role: string;
  company: string;
};

export function TestimonialCard({ quote, clientSince, name, role, company }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 gap-6 min-w-0">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <Quote className="h-8 w-8 text-blue-600" />
          <span className="text-xs text-gray-400">{clientSince}</span>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">{quote}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
          <User className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">{name}</span>
          <span className="text-xs text-gray-400">{role}</span>
          <span className="text-xs text-gray-400">{company}</span>
        </div>
      </div>
    </div>
  );
}