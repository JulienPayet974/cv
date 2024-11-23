'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import LanguageSwitch from '../ui/LanguageSwitch'
import { useLanguage } from '@/providers/LanguageProvider'
import messages from '@/app/index'

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()
  const t = messages[language].nav

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-gray-900 dark:bg-gray-900 ${
      isScrolled ? 'bg-gray-900 dark:bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white dark:text-gray-300">Julien Payet</span>
          </div>
          
          <div className="hidden md:block text-white">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about" >{t.about}</NavLink>
              <NavLink href="#skills">{t.skills}</NavLink>
              <NavLink href="#experience">{t.experience}</NavLink>
              <NavLink href="#projects">{t.projects}</NavLink>
              <NavLink href="#contact">{t.contact}</NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitch />
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-600 dark:bg-gray-800"
            >
              {mounted && (
                theme === 'dark' ? 
                  <SunIcon className="h-5 w-5" /> : 
                  <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
)