import Head from 'next/head'
import { Roboto } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { MainLayout } from '@/layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/next'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

const Home: NextPageWithLayout = () =>  {
  return (
    <>
      <Head>
        <title>lucvuro.dev</title>
        <meta name="description" content="Portfolio of lucvuro - A developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}></main>
    </>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <MainLayout>
        {page}
      </MainLayout>
    </>
  )
}

export default Home
