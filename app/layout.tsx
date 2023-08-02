import type { Metadata } from 'next'
import '_styles/theme.css'
import '_styles/globals.css'
import { AppBar } from '_components/AppBar'

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'NextJS 13 Pokedex'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AppBar />
        {children}
      </body>
    </html>
  )
}
