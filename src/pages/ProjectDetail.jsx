import { Link, useParams } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

const projectDetails = {
  en: {
    backToPortfolio: "← Back to Portfolio",
    technologiesTitle: "🚀 Technologies",
    featuresTitle: "💡 Features",
    goalTitle: "🎯 Goal",
    overviewTitle: "Project Overview",
    githubButton: "View on GitHub",
    backHome: "Back Home",
    notFound: "Project not found",

    projects: {
      HistoLocal: {
        title: "HistoLocal",
        image: "/histolocal.png",
        description:
          "HistoLocal is an AI-assisted cultural and historical tour planning application.",
        technologies: "React Native, Node.js, FastAPI, ChromaDB, AI",
        features:
          "AI integration, context-aware recommendations, semantic search, personalized tour planning",
        goal:
          "To help users discover historical and cultural places with personalized AI-powered suggestions.",
        overview:
          "HistoLocal was developed to combine tourism, culture and artificial intelligence. The application helps users create meaningful travel routes by using AI-powered recommendations and historical context.",
      },

      "Pizza Order App": {
        title: "Pizza Order App",
        image: "/food-1.png",
        description:
          "Pizza Order App is a React-based ordering application with form flow, order summary and API integration.",
        technologies: "React, Tailwind CSS, Axios, React Hook Form",
        features:
          "Pizza customization, form validation, order summary, success page and API request flow",
        goal:
          "To create a responsive and user-friendly pizza ordering experience.",
        overview:
          "This project was developed as a React challenge. It includes a multi-step order flow, user input handling, dynamic order summary and API integration using Axios.",
      },
    },
  },

  tr: {
    backToPortfolio: "← Portfolyoya Dön",
    technologiesTitle: "🚀 Teknolojiler",
    featuresTitle: "💡 Özellikler",
    goalTitle: "🎯 Amaç",
    overviewTitle: "Proje Özeti",
    githubButton: "GitHub’da Gör",
    backHome: "Ana Sayfaya Dön",
    notFound: "Proje bulunamadı",

    projects: {
      HistoLocal: {
        title: "HistoLocal",
        image: "/histolocal.png",
        description:
          "HistoLocal, kültürel ve tarihi gezi planlama için geliştirilmiş AI destekli bir mobil uygulamadır.",
        technologies: "React Native, Node.js, FastAPI, ChromaDB, AI",
        features:
          "AI entegrasyonu, bağlam farkındalıklı öneriler, semantik arama ve kişiselleştirilmiş gezi planlama",
        goal:
          "Kullanıcıların tarihi ve kültürel yerleri kişiselleştirilmiş AI destekli önerilerle keşfetmesini sağlamak.",
        overview:
          "HistoLocal; turizm, kültür ve yapay zekayı bir araya getirmek amacıyla geliştirilmiştir. Uygulama, AI destekli öneriler ve tarihsel bağlam kullanarak kullanıcıların anlamlı gezi rotaları oluşturmasına yardımcı olur.",
      },

      "Pizza Order App": {
        title: "Pizza Sipariş Uygulaması",
        image: "/food-1.png",
        description:
          "Pizza Sipariş Uygulaması; form akışı, sipariş özeti ve API entegrasyonu içeren React tabanlı bir sipariş uygulamasıdır.",
        technologies: "React, Tailwind CSS, Axios, React Hook Form",
        features:
          "Pizza özelleştirme, form doğrulama, sipariş özeti, başarı sayfası ve API istek akışı",
        goal:
          "Responsive ve kullanıcı dostu bir pizza sipariş deneyimi oluşturmak.",
        overview:
          "Bu proje bir React challenge kapsamında geliştirilmiştir. Çok adımlı sipariş akışı, kullanıcı girdilerinin yönetimi, dinamik sipariş özeti ve Axios ile API entegrasyonu içermektedir.",
      },
    },
  },
}

function ProjectDetail() {
  const { id } = useParams()
  const { language } = useLanguage()

  const data = projectDetails[language]
  const project = data.projects[id]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl text-center text-black dark:text-white">
          <h1 className="text-3xl font-bold mb-4">{data.notFound}</h1>

          <Link to="/" className="text-pink-600 font-semibold">
            {data.backToPortfolio}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950 px-6 py-10 text-[#0f1020] dark:text-white">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <Link
            to="/"
            className="inline-block mb-8 text-pink-600 font-semibold hover:underline"
          >
            {data.backToPortfolio}
          </Link>

          <h1 className="text-5xl font-extrabold mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="rounded-3xl overflow-hidden border-[8px] border-pink-500 shadow-xl mb-10 bg-gray-100 dark:bg-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[420px] object-contain p-6"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-100 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                {data.technologiesTitle}
              </h3>
              <p>{project.technologies}</p>
            </div>

            <div className="bg-green-100 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                {data.featuresTitle}
              </h3>
              <p>{project.features}</p>
            </div>

            <div className="bg-pink-100 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                {data.goalTitle}
              </h3>
              <p>{project.goal}</p>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {data.overviewTitle}
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.overview}
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/zgulceozer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold hover:shadow-lg transition"
            >
              {data.githubButton}
            </a>

            <Link
              to="/"
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {data.backHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail