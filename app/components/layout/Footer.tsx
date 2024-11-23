'use client'
import { useLanguage } from '@/providers/LanguageProvider'
import messages from '@/app/index'

export default function Footer() {
  const { language } = useLanguage()
  const t = messages[language].footer
  return (
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © 2024 Julien Payet. {t.rights}.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/JulienPayet974" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                GitHub
              </a>
              <a href="https://linkedin.com/in/payet-julien" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }