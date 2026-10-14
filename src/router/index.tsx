import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Links } from "../pages/Links"
import { Companies } from "../pages/Companies"
import { AboutUs } from "../pages/AboutUs"
import { CompanyPage } from "../pages/PageCompany"
import { PrivacyPolicy } from "../pages/PrivacyPolicy"

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
  },
  {
    path: "/politica-de-privacidade",
    element: <PrivacyPolicy />
  }
])
