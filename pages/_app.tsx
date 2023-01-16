import { AppPropsWithLayout } from '@/next'
import '@/styles/globals.css'
import { ReactNode } from 'react'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)

  return getLayout(<Component {...pageProps} />)
}
