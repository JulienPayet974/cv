'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/providers/LanguageProvider'
import messages from '@/app/index'

export default function Hero() {
  const { language } = useLanguage()
  const t = messages[language].hero
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Julien Payet
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {t.role}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {t.description}
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.cta}
            </a>
            <a 
              href="#projects" 
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {t.projects_1}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}