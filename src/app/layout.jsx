import './globals.css'
import { Inter } from 'next/font/google'
import i18n from '../../i18n'
import { redirect } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio website built with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  const { lang } = useTranslation('common')

  // Redirect to default locale if lang is not supported. /second-page -> /en/second-page
  if (!i18n.locales.includes(lang)) redirect(`/${i18n.defaultLocale}/${lang}`)

  return (
    <html lang="lang">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
