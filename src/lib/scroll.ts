export function scrollToSection(target: string) {
  const section =
    document.getElementById(target) ?? document.querySelector(`.${target}`)

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}