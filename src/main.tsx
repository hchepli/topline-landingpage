import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { Toaster } from "sonner"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="bg-[rgb(--gray-100)] min-h-screen">
    <Toaster position="top-right" richColors />
    <RouterProvider router={router} />
    </main>
  </React.StrictMode>
)
