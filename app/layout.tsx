import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isaac Valdez',
  description: 'Isaac Valdez’s portfoilio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  )
}
