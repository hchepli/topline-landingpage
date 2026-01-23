import { LucideIcon } from "lucide-react"

export type CompanyCard = {
  title: string
  description?: string
  icon: LucideIcon
  featured?: boolean
  products: Product[]
}

export type Product = {
  image?: string
  title: string
  description: string
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
