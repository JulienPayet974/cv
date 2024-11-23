'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/providers/LanguageProvider'
import messages from '@/app/index'

const experiences = [
  {
    title: {
      fr: "FULLSTACK WEB DEVELOPER - UIC",
      en: "FULLSTACK WEB DEVELOPER - UIC"
    },
    date: {
      fr: "2022",
      en: "2022"
    },
    description: {
      fr: [
        "Gestion de base de données : MSSQL, MariaDB",
        "Langages : Javascript, Typescript",
        "Développement de fonctionnalités backend avec Node.js, Nest",
        "Création d'interfaces utilisateurs avec React, nextjs"
      ],
      en: [
        "Database management: MSSQL, MariaDB",
        "Languages: Javascript, Typescript",
        "Development of backend features with Node.js, Nest",
        "Creation of user interfaces with React, Next.js"
      ]
    }
  },
  {
    title: {
      fr: "PROJECT IMPLEMENTATION MANAGER - IKEA Office FRANCE",
      en: "PROJECT IMPLEMENTATION MANAGER - IKEA Office FRANCE"
    },
    date: {
      fr: "2021 - 2022",
      en: "2021 - 2022"
    },
    description: {
      fr: [
        "Pilotage complets de projets, de la conception à la réalisation",
        "Élaboration et suivi de planning détaillé",
        "Gestion des délais critiques"
      ],
      en: [
        "Complete project management from conception to realization",
        "Development and monitoring of detailed schedules",
        "Management of critical deadlines"
      ]
    }
  }
]

export default function Experience() {
  const { language } = useLanguage()
  
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {messages[language].experience.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative pl-8 border-l-2 border-blue-600"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2"></div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.title[language]}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">
                  {exp.date[language]}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {exp.description[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}