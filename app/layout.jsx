import {Inter} from 'next/font/google'
import '@/assets/styles/globals.css'
const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'OIB4U',
  description: 'Your Ocean Isle Experience.',
  keywords: 'ocean isle beach, vacation rental, beachhouse',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}