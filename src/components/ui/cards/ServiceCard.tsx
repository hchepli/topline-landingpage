import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
};

export function ServiceCard({ icon: Icon, title, description, highlight = false }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl border p-6 transition-shadow hover:shadow-md ${
        highlight
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-gray-200 bg-white text-gray-800"
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon size={18} className={highlight ? "text-white" : "text-blue-600"} />
        <p className={`font-semibold ${highlight ? "text-white" : "text-gray-900"}`}>
          {title}
        </p>
      </div>
      <p className={`text-sm leading-relaxed ${highlight ? "text-blue-100" : "text-gray-500"}`}>
        {description}
      </p>
    </div>
  );
}