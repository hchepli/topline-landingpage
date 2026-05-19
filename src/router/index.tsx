import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Links } from "../pages/Links"
import { Companies } from "../pages/Companies"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/links",
    element: <Links />
  },{
    path: "/empresas",
    element: <Companies />
  }
])
