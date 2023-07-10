
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation.jsx'
import Footer from './components/Footer'
import { NextAuthProvider } from './providers/nextAuthProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.NODE_ENV === 'production' ? 'Production | Yu-Gi-Oh! Meta' : 'Development | Yu-Gi-Oh! Meta',
  description: 'Access comprehensive Yugioh tournament data including results, decklists, and analysis. Stay up-to-date with the latest tournament trends, strategies, and player performances. Elevate your dueling game with in-depth insights from the competitive Yugioh scene.',
}


export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </NextAuthProvider>
      </body>

    </html>
  )
}
