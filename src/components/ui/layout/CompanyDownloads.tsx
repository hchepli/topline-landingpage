import { Download, FileText } from "lucide-react"

import { PdfItem } from "../../../data/pdf"

interface CompanyDownloadsProps {
  pdfs: PdfItem[]
  companyName: string
}

export function CompanyDownloads({
  pdfs,
  companyName,
}: CompanyDownloadsProps) {
  if (pdfs.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby="downloads-title"
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <h2
          id="downloads-title"
          className="text-2xl font-semibold md:text-3xl"
        >
          Catálogos e materiais
        </h2>

        <p className="text-sm text-black/60 md:text-base">
          Baixe os catálogos e materiais da {companyName}.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pdfs.map((pdf) => (
          <li key={pdf.id}>
            <a
              href={pdf.href}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-4
                rounded-2xl border border-black/10
                bg-white p-4 shadow-sm
                transition-all
                hover:-translate-y-0.5 hover:shadow-md
              "
            >
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-xl bg-black/5
                "
              >
                <FileText size={22} />
              </div>

              <div className="flex min-w-0 flex-1 flex-col text-left">
                <span className="truncate font-medium">{pdf.title}</span>

                {pdf.description && (
                  <span className="truncate text-sm text-black/60">
                    {pdf.description}
                  </span>
                )}
              </div>

              <Download
                size={18}
                className="shrink-0 transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}