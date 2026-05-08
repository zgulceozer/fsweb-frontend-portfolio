import { useState } from "react"
import axios from "axios"
import { useLanguage } from "../context/LanguageContext"
import { portfolioData } from "../data/portfolioData"

function Contact() {
  const { language } = useLanguage()
  const data = portfolioData[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    await axios.post(
      "https://reqres.in/api/users",
      formData,
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    )

    setStatus(
      language === "tr"
        ? "Mesaj başarıyla gönderildi."
        : "Message sent successfully."
    )

    setFormData({ name: "", email: "", message: "" })
  } catch (error) {
    setStatus(
      language === "tr"
        ? "Bir hata oluştu."
        : "Something went wrong."
    )
  }
}

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {data.contact.title}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder={language === "tr" ? "Adınız" : "Your name"}
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600"
          required
        />

        <input
          type="email"
          name="email"
          placeholder={language === "tr" ? "Email adresiniz" : "Your email"}
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600"
          required
        />

        <textarea
          name="message"
          placeholder={language === "tr" ? "Mesajınız" : "Your message"}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border min-h-36 dark:bg-gray-700 dark:border-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition"
        >
          {language === "tr" ? "Gönder" : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-pink-600 font-semibold">
            {status}
          </p>
        )}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-medium">

  <a
    href="https://github.com/zgulceozer"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 transition"
  >
    💻 Github
  </a>

  <a
    href="https://www.linkedin.com/in/zeynep-g%C3%BClce-%C3%B6zer-9b2013241/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 transition"
  >
    🔗 LinkedIn
  </a>

  <a
    href="mailto:glczer02@gmail.com"
    className="hover:text-pink-500 transition"
  >
    ✉️ glczer02@gmail.com
  </a>

</div>
      </form>
    </section>
  )
}

export default Contact