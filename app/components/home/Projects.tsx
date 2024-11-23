'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/providers/LanguageProvider'


const projects = [
  {
    title: {
      fr: "TOOLBOX DRUPAL",
      en: "TOOLBOX DRUPAL"
    },
    description: {
      fr: "Développement de modules Drupal personnalisés",
      en: "Development of custom Drupal modules"
    },
    tags: {
      fr: ["Drupal", "PHP", "JavaScript"],
      en: ["Drupal", "PHP", "JavaScript"]
    },
    image: "/profile.jpg"
  },
  {
    title: {
      fr: "Application de livraison REACT",
      en: "REACT Delivery Application"
    },
    description: {
      fr: "Application de livraison entre particuliers",
      en: "Neighbour-to-neighbour delivery"
    },
    tags: {
      fr: ["React", "Node.js", "MongoDB"],
      en: ["React", "Node.js", "MongoDB"]
    },
    image: "/profile.jpg"
  },
  {
    title: {
      fr: "Projet IA Python",
      en: "Python AI Project"
    },
    description: {
      fr: "Indexation des documents internes et système de classement",
      en: "Indexing internal documents and classification system"
    },
    tags: {
      fr: ["Python", "AI", "Machine Learning"],
      en: ["Python", "AI", "Machine Learning"]
    },
    image: "/profile.jpg"
  }
]

export default function Projects() {
  
  const { language } = useLanguage()
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Mes Projets
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title[language]}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags[language].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}