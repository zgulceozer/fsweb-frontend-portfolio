import { useLanguage } from "../context/LanguageContext"
import { portfolioData } from "../data/portfolioData"

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa"

import {
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiFastapi,
} from "react-icons/si"

function Skills() {
  const { language } = useLanguage()
  const data = portfolioData[language]

  const skillIcons = {
    JAVA: <FaJava />,
    JAVASCRIPT: <SiJavascript />,
    REACT: <FaReact />,
    "NODE.JS": <FaNodeJs />,
    "SPRING BOOT": <SiSpringboot />,
    FASTAPI: <SiFastapi />,
    PYTHON: <FaPython />,
    SQL: "🗄️",
    POSTGRESQL: <SiPostgresql />,
    MONGODB: <SiMongodb />,
    TAILWIND: <SiTailwindcss />,
    GIT: <FaGitAlt />,
  }

  return (
    <section className="bg-white dark:bg-gray-800 max-w-6xl mx-auto px-6 py-20 rounded-xl shadow-md">

      <h2 className="text-4xl font-semibold text-center mb-14">
        {data.skillsTitle}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">

        {data.skills.map((skill) => (
          <div
            key={skill}
            className="group bg-gray-100 dark:bg-gray-700 w-36 h-36 rounded-2xl flex flex-col items-center justify-center shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <div className="text-5xl text-pink-500 mb-4 group-hover:scale-110 transition">
              {skillIcons[skill]}
            </div>

            <p className="font-semibold text-sm tracking-wide text-center px-2">
              {skill}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Skills