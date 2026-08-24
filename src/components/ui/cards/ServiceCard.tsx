import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "blue" | "yellow" | "green" | "none";
};

const variantStyles = {
  blue: {
    card: "border-blue-600 bg-blue-600 text-white",
    icon: "text-white",
    title: "text-white",
    description: "text-blue-100",
  },
  yellow: {
    card: "border-yellow-500 bg-yellow-500 text-white",
    icon: "text-white",
    title: "text-white",
    description: "text-yellow-50",
  },
  green: {
    card: "border-green-600 bg-green-600 text-white",
    icon: "text-white",
    title: "text-white",
    description: "text-green-100",
  },
  none: {
    card: "border-gray-200 bg-white text-gray-800",
    icon: "text-blue-600",
    title: "text-gray-900",
    description: "text-gray-500",
  },
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  variant = "none",
}: ServiceCardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl border p-6 transition-shadow hover:shadow-md ${styles.card}`}
    >
      <div className="flex items-center gap-2">
        <Icon size={18} className={styles.icon} />
        <p className={`font-semibold ${styles.title}`}>{title}</p>
      </div>
      <p className={`text-sm leading-relaxed ${styles.description}`}>
        {description}
      </p>
    </div>
  );
}