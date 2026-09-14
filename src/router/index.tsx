import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Links } from "../pages/Links"
import { Companies } from "../pages/Companies"
import { AboutUs } from "../pages/AboutUs"
import { CompanyPage } from "../pages/PageCompany"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/links",
    element: <Links />
  },
  {
    path: "/empresas",
    element: <Companies />
  },
  {
    path: "/sobre",
    element: <AboutUs />
  },
  {
    path: "/empresas/:target",
    element: <CompanyPage />
  }
])
