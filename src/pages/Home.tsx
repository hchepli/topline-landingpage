import { Header } from "../components/sections/Header"
import { Hero } from "../components/sections/Hero"
import { GroupOverview } from "../components/sections/GroupOverview"
import { Contact } from "../components/sections/Contact"

export function Home() {
  return (
    <>
    <Header />
    <Hero />
    <GroupOverview />

    <Contact />
    </>
  )
}
