'use client'
import { useLanguage } from '@/providers/LanguageProvider'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className="p-2 rounded-lg bg-gray-600 dark:bg-gray-800 text-sm font-medium"
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </button>
  )
}