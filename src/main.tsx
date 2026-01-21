import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="bg-[rgb(--gray-100)] min-h-screen px-[5%] sm:px-[10%]">
    <RouterProvider router={router} />
    </main>
  </React.StrictMode>
)
