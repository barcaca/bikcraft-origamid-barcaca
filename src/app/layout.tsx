import '@/styles/globals.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
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
      <head>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"] { opacity: unset !important; transform: unset !important; }',
            }}
          />
        </noscript>
      </head>
      <body className="overflow-x-hidden antialiased">
        <Provider>
          <Header />
          {children}
          <Toaster richColors position="top-center" />
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
