import Head from 'next/head'
import { Roboto } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { MainLayout } from '@/layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/next'
import Image from 'next/image'
import avatarProfile from '@/assets/images/avatar.jpeg'
import { Box, Button, Icon } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import { useRouter } from 'next/router'

const title2: string[] = [`I'm a Frontend Developer`, `I love coding`]
const Home: NextPageWithLayout = () => {
  const router = useRouter()
  const handleClickContact = () => {
    router.push('/contact')
  }
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Box className={styles.cardTitle} sx={{ color: 'text.primary' }}>
              <h2 className={styles.cardTitle1}>{`Hi 👋, I'm Luc Vu`}</h2>
              <h3 className={styles.cardTitle2}>
                <Typewriter
                  options={{ strings: title2, autoStart: true, loop: true, deleteSpeed: 10 }}
                />
              </h3>
            </Box>

            <Image src={avatarProfile} className={styles.cardAvatar} alt="card-avatar" />
          </div>
          <div className={styles.cardContent}>
            <Box className={styles.cardDescription} sx={{ color: 'text.primary' }}>
              <p>{`"It's not what happends to you, but how you react to it that matters." - Epictetus`}</p>
            </Box>

            <div className={styles.cardBtnActions}>
              <div className={styles.cardBtn}>
                <Button variant="contained" className="card-btn-mp">
                  My Projects
                </Button>
                <Button onClick={handleClickContact} variant="outlined" className="card-btn-cm">
                  Contact Me
                </Button>
              </div>
              <div className={styles.cardSocial}>
                <a target="_blank" href="https://github.com/lucvuro" rel="noopener noreferrer">
                  <Icon color="primary">
                    <GitHubIcon />
                  </Icon>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lucvuro/"
                  rel="noopener noreferrer"
                >
                  <Icon color="primary">
                    <LinkedInIcon />
                  </Icon>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/lucj.vux/"
                  rel="noopener noreferrer"
                >
                  <Icon color="primary">
                    <InstagramIcon />
                  </Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  )
}
export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
export default Home
