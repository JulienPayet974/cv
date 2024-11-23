import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/components/layout/Navigation'
import Footer from '@/app/components/layout/Footer'
import { ThemeProvider } from '@/providers/ThemeProviders'
import { LanguageProvider } from '@/providers/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Julien Payet - Développeur Fullstack JavaScript',
  description: 'Portfolio de Julien Payet, développeur web fullstack spécialisé en JavaScript, Node.js et React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navigation />
            <main>
              {children}
            </main>
            <Footer />
          </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}