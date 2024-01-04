import 'rsuite/dist/rsuite.min.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from './navbar'
import { Providers } from './providers'

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
        <Providers>
          <div>
            <NavBar />

            <div>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
