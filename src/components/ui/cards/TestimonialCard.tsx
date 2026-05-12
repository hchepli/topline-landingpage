
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
          <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 26V15.6C0 12.5333 0.6 9.73333 1.8 7.2C3.06667 4.66667 5.2 2.46667 8.2 0.599998L10.8 3.8C8.86667 5 7.4 6.33333 6.4 7.8C5.46667 9.26667 5 11 5 13H9.6V26H0ZM18.4 26V15.6C18.4 12.5333 19 9.73333 20.2 7.2C21.4667 4.66667 23.6 2.46667 26.6 0.599998L29.2 3.8C27.2667 5 25.8 6.33333 24.8 7.8C23.8667 9.26667 23.4 11 23.4 13H28V26H18.4Z" fill="#2563EB"/>
          </svg>
          <span className="text-xs text-gray-400">{clientSince}</span>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">{quote}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
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