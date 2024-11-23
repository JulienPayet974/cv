'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/providers/LanguageProvider'
import messages from '@/app/index'

const skills = [
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'Express.js', level: 90, category: 'Backend' },
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'Docker', level: 75, category: 'DevOps' },
]

export default function Skills() {
  const { language } = useLanguage()
  const t = messages[language].skills
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.category}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}