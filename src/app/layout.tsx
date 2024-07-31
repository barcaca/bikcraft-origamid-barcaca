import '@/styles/globals.css'

import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { poppins, raleway } from '@/fonts/font'

import { Provider } from './provider'

export const metadata: Metadata = {
  title: {
    template: '%s | Bikcraft',
    default: 'Bikcraft - Bicicletas Elétricas',
  },

  description:
    'Bicicletas elétricas de alta precisão e qualidade,  feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${raleway.variable} h-full`}
    >
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
