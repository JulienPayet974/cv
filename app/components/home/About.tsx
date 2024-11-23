'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import messages from '@/app/index'

export default function About() {
  const { language } = useLanguage()
  const t = messages[language].about
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="pl-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t.description}
            </p>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">{t.location}</p>
              <p className="text-gray-600 dark:text-gray-300">{t.availability}</p>
              <p className="text-gray-600 dark:text-gray-300">{t.education}</p>
            </div>
          </div>
          <div className="relative h-[400px] flex justify-center items-center">
            <Image
              src="/profile.jpg" // Assurez-vous d'ajouter une image de profil dans le dossier public
              alt="Julien Payet"
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}