import { MainLayout } from '@/layouts'
import { NextPageWithLayout } from '@/next'
import React, { ReactElement } from 'react'
import styles from '@/styles/Projects.module.css'
import Head from 'next/head'
import {
  Box,
  Container,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Tooltip,
  useMediaQuery,
} from '@mui/material'
import ccsweb from '@/assets/images/ccsweb.png'
import eommerce from '@/assets/images/ecommerce.png'
import lucvurodev from '@/assets/images/lucvurodev.png'
import sticktogether from '@/assets/images/sticktogether.jpg'

import { ProjectItem } from '@/components/Projects'
export interface ProjectsPageProps {}
export interface Project {
  title: string
  subtitle: string
  image: typeof lucvurodev
  link_demo: string
  link_github: string
}
const projects: Project[] = [
  {
    title: 'Stick Together',
    subtitle:
      'A web application in which users can create a room and invite friends to the room. Then, can send messages, chat voice, and listen to music in real-time. The web application built by NextJS, MaterialUI, PeerJS, and Firebase.',
    image: sticktogether,
    link_demo: 'https://stick-together.lucvuro.dev/',
    link_github: 'https://github.com/lucvuro/stick-together',
  },
  {
    title: 'NextJS Ecommerce App',
    subtitle:
      `A web application in which user view and add items to user's carts., they can checkout it. I built the project for training my skills and learning more about technologies. The web application was built by NextJS, Material-UI, and Redux Toolkits.`,
    image: eommerce,
    link_demo: 'https://ecommerce-nextjs-app.vercel.app/',
    link_github: 'https://github.com/lucvuro/ecommerce-nextjs-app',
  },
  {
    title: 'lucvuro.dev',
    subtitle: 'A web application that shows info about me. Correctly, this is a portfolio website. The website was built by NextJS, Material-UI.',
    image: lucvurodev,
    link_demo: 'https://www.lucvuro.dev/',
    link_github: 'https://github.com/lucvuro/my-portfolio',
  },
  {
    title: 'CCS Cards Database',
    subtitle: 'A web application that users can find and get information about the clow cards. The web application was built by ReactJS, AntDesign, and Firebase',
    image: ccsweb,
    link_demo: 'https://sakura-react.vercel.app/home',
    link_github: 'https://github.com/lucvuro/ccsakura-react',
  },
]
const Projects: NextPageWithLayout = (props: ProjectsPageProps) => {
  return (
    <>
      <Head>
        <title>Projects | lucvuro.dev</title>
      </Head>
      <main className={styles.main}>
        <Container maxWidth="lg">
          <Box className={styles.projectsHeader} sx={{ color: 'text.primary' }}>
            <h1 className={styles.projectsTitle}>Projects</h1>
            <Divider />
          </Box>
          <Stack gap={4} mt={4}>
            {projects.map((project) => (
              <ProjectItem key={project.title} project={project} />
            ))}
          </Stack>
        </Container>
      </main>
    </>
  )
}
Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  )
}

export default Projects
