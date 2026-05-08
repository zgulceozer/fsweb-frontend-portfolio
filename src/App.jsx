
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import { Routes, Route } from "react-router-dom"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <Routes>

      {/* ANA SAYFA */}
      <Route
        path="/"
        element={
          <div className="bg-gray-200 dark:bg-gray-950 min-h-screen">
<main className="
w-full
max-w-[1450px]
mx-auto
bg-[#f4f4f4]
dark:bg-gray-900
text-[#0f1020]
dark:text-white
min-h-screen
shadow-lg
rounded-xl
overflow-hidden
">
              <Header />
              <Hero />
              <Skills />
              <Profile />
              <Projects />
              <Contact />

            </main>

          </div>
        }
      />

      {/* PROJECT DETAIL */}
      <Route
        path="/project/:id"
        element={<ProjectDetail />}
      />

    </Routes>
  )
}

export default App