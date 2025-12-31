import { ArrowUpRight } from "lucide-react"

export function HeaderCTA(){
    return(
        <div>
          <button className="flex items-center gap-2 rounded-full bg-[rgb(var(--brand-dark)/10%)] px-4 py-2 text-sm font-medium text-[rgb(var(--gray-900))] hover:opacity-80 justify-center">
            Conhecer a TopLine
            <ArrowUpRight />
          </button>
        </div>
    )
}