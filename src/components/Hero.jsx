import { useLanguage } from "../context/LanguageContext"
import { portfolioData } from "../data/portfolioData"

function Hero() {
  const { language } = useLanguage()
  const data = portfolioData[language]

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative">
      
      {/* SOL */}
      <div>
        <p className="text-lg mb-4">
          {data.hero.greeting}
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          {data.hero.name.split(" ")[0]}{" "}

          <span className="relative inline-block">
            Gülce
            <span className="absolute left-0 bottom-1 w-full h-3 bg-pink-400 dark:bg-pink-600 -z-10"></span>
          </span>

          <br />

          {data.hero.title}
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {data.hero.description}
        </p>

        {/* LINKLER */}
        <div className="flex gap-4 mt-10 flex-wrap">

          <a
            href="https://www.linkedin.com/in/zeynep-g%C3%BClce-%C3%B6zer-9b2013241/"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-pink-500 hover:text-white transition duration-300 font-semibold"
          >
            🔗 LinkedIn
          </a>

          <a
          href="https://github.com/zgulceozer"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-pink-500 hover:text-white transition duration-300 font-semibold"
          >
            💻 GitHub
          </a>

        </div>

       {/* EMAIL */}
<p className="mt-8 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
  {data.hero.statusText}{" "}
  <span className="text-pink-600 dark:text-pink-400 font-semibold">
    {data.hero.statusHighlight}
  </span>{" "}
  {data.hero.statusEnd}

  <br />

  {data.hero.inviteText}
  <span className="text-pink-600 dark:text-pink-400 underline ml-1">
    {data.hero.email}
  </span>
</p>
 </div>

      {/* SAĞ */}
      <div className="flex justify-center relative">

        {/* FOTO */}
        <div className="w-72 h-72 md:w-80 md:h-80 border-[10px] border-pink-500 rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
          
          {/* FOTOĞRAF BURAYA */}
          <img
            src="/profilephoto.png"
            alt="Gülce"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DEKORLAR */}
        <div className="absolute -top-8 -left-8 w-14 h-14 bg-gray-300 dark:bg-gray-700 rounded-full blur-sm"></div>

        <div className="absolute -bottom-6 -right-6 w-24 h-5 bg-pink-500 rounded-full"></div>

        <div className="absolute top-10 -right-10 w-6 h-6 bg-yellow-400 rounded-full"></div>

      </div>
    </section>
  )
}

export default Hero