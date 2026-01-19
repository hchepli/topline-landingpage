import { LucideIcon } from "lucide-react"

export type CompanyCard = {
  title: string
  description?: string
  icon: LucideIcon
  featured?: boolean
}

export type Company = {
  name: string
  description: string
  buttonLabel: string
  cards: CompanyCard[]
  href: string
  target: string
  image: string
}
