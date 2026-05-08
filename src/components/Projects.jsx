import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { portfolioData } from "../data/portfolioData"

function Projects() {
  const { language } = useLanguage()
  const data = portfolioData[language]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-white dark:bg-gray-950 rounded-[3rem] shadow-inner my-16">

      <h2 className="text-5xl font-extrabold text-center mb-16 text-black dark:text-white">
        {data.projectsTitle}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {data.projects.map((project) => (

          <div
            key={project.title}
            className={`
              ${project.bg}
              dark:bg-gray-800
              rounded-[2rem]
              overflow-hidden
              shadow-xl
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              border border-white/30
              dark:border-gray-700
            `}
          >

            {/* GÖRSEL */}
            <div className="h-60 bg-white/40 dark:bg-gray-700 backdrop-blur-sm flex items-center justify-center overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

            {/* İÇERİK */}
            <div className="p-8">

              <h3 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* TAGLER */}
              <div className="flex gap-3 flex-wrap mb-10">

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      bg-white/90
                      dark:bg-gray-700
                      backdrop-blur-sm
                      px-4 py-2
                      rounded-full
                      text-sm
                      font-bold
                      shadow-sm
                      text-gray-900
                      dark:text-gray-100
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

              {/* BUTONLAR */}
              <div className="flex justify-between items-center">

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-bold
                    text-gray-900
                    dark:text-gray-200
                    hover:text-pink-600
                    transition
                  "
                >
                  {project.github}
                </a>

                <Link
                  to={`/project/${project.title}`}
                  className="
                    px-5 py-3
                    rounded-xl
                    bg-black
                    dark:bg-pink-500
                    text-white
                    font-semibold
                    hover:bg-pink-500
                    dark:hover:bg-pink-600
                    transition
                    shadow-lg
                  "
                >
                  {project.app}
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects