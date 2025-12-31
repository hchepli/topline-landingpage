import { ArrowUpRight } from "lucide-react"

export function NavCTA(){
    return(
        <button className="flex flex-1 items-center justify-center gap-2.5 rounded-md border border-[rgb(var(--color-black))] p-4 text-base text-[rgb(var(--color-black))]">
                      Sobre o Grupo <ArrowUpRight size={18} />
                    </button>
    )
}