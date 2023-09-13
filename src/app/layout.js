import clsx from 'clsx'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://ricardomatias.net/'),
  title: 'Ricardo Matias',
  description: 'Full-Stack Javascript Software Developer',
  locale: 'en_US',
  authors: [{ name: 'Ricardo Matias' }],
  type: 'website',
  referrer: 'origin-when-cross-origin',
  keywords: ['Javascript', 'Full-Stack', 'Web', 'Software', 'Developer', 'Berlin'],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ricardo Matias - Full-Stack Javascript Software Developer',
    description: 'The React Framework for the Web',
    url: 'https://ricardomatias.net/',
    siteName: 'Ricardo Matias - Full-Stack Javascript Software Developer',
    images: [],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    other: {
      'cf-2fa-verify': 'bc3597bed4824c5',
    },
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, 'max-h-screen')}>{children}</body>
    </html>
  )
}
