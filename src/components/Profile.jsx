import { useLanguage } from "../context/LanguageContext"
import { portfolioData } from "../data/portfolioData"

function Profile() {
  const { language } = useLanguage()
  const data = portfolioData[language]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-[#f7f7f7] dark:bg-gray-900 rounded-[3rem] my-10">
      <h2 className="text-4xl font-bold text-center mb-14">
        {data.profileTitle}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* SOL KART */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[8px_8px_0px_#aaa] hover:-translate-y-1 transition duration-300">
          <h3 className="text-pink-600 text-2xl font-semibold mb-8">
            {data.profile.basicTitle}
          </h3>

          <div className="space-y-5 text-lg">
            <p>
              <span className="font-bold">{data.profile.universityLabel}:</span>{" "}
              {data.profile.university}
            </p>

            <p>
              <span className="font-bold">{data.profile.departmentLabel}:</span>{" "}
              {data.profile.department}
            </p>

            <p>
              <span className="font-bold">{data.profile.cityLabel}:</span>{" "}
              {data.profile.city}
            </p>

            <p>
              <span className="font-bold">{data.profile.roleLabel}:</span>{" "}
              {data.profile.role}
            </p>
          </div>
        </div>

        {/* SAĞ KART */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[8px_8px_0px_#aaa] hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold mb-6 relative inline-block">
            {data.profile.aboutTitle}
            <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-200 dark:bg-blue-500/40 -z-10 rounded"></span>
          </h3>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {data.profile.about}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile