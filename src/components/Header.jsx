import { useLanguage } from "../context/LanguageContext"
import { portfolioData } from "../data/portfolioData"
import { useEffect, useState } from "react"

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const data = portfolioData[language]
  const [dark, setDark] = useState(() => {
  return localStorage.getItem("theme") === "dark"
})

useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}, [dark])
 const toggleDark = () => {
  const newDark = !dark
  setDark(newDark)

  if (newDark) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

  return (
    <header className="max-w-5xl mx-auto px-6 py-10 flex justify-end gap-4 text-sm font-semibold tracking-widest">
      <button onClick={toggleDark}>
        {dark ? "LIGHT MODE" : "DARK MODE"}
      </button>

      <span>|</span>

      <button onClick={toggleLanguage} className="text-pink-600">
        {data.header.languageText}
      </button>
    </header>
  )
}

export default Header