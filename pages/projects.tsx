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
  const query_1100 = useMediaQuery('(max-width: 1100px)')
  const query_685 = useMediaQuery('(max-width: 685px)')
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
          {/* {!query_1100 && !query_685 && (
            <div className={styles.projectsContent}>
              <ImageList cols={3} gap={30} sx={{ placeItems: 'center', marginTop: '3rem' }}>
                {projects.map((project: Project) => {
                  return (
                    <ImageListItem key={project.title}>
                      <Image src={project.image} alt={project.title} width={300} height={150} />
                      <ImageListItemBar
                        title={project.title}
                        subtitle={project.subtitle}
                        actionIcon={
                          <Box>
                            {!project.link_demo ? (
                              <></>
                            ) : (
                              <Link href={project.link_demo} target="_blank">
                                <Tooltip title="View website">
                                  <IconButton sx={{ color: 'white' }} aria-label={`demo`}>
                                    <RemoveRedEyeIcon />
                                  </IconButton>
                                </Tooltip>
                              </Link>
                            )}
                            <Link href={project.link_github} target="_blank">
                              <Tooltip title="View github">
                                <IconButton sx={{ color: 'white' }} aria-label={`github`}>
                                  <GitHubIcon />
                                </IconButton>
                              </Tooltip>
                            </Link>
                          </Box>
                        }
                      />
                    </ImageListItem>
                  )
                })}
              </ImageList>
            </div>
          )}
          {query_1100 && !query_685 && (
            <div className={styles.projectsContent}>
              <ImageList cols={2} gap={30} sx={{ placeItems: 'center', marginTop: '3rem' }}>
                {projects.map((project: Project) => {
                  return (
                    <ImageListItem key={project.title}>
                      <Image src={project.image} alt={project.title} width={260} height={150} />
                      <ImageListItemBar
                        title={project.title}
                        subtitle={project.subtitle}
                        actionIcon={
                          <Box>
                            {!project.link_demo ? (
                              <></>
                            ) : (
                              <Link href={project.link_demo} target="_blank">
                                <Tooltip title="View website">
                                  <IconButton sx={{ color: 'white' }} aria-label={`demo`}>
                                    <RemoveRedEyeIcon />
                                  </IconButton>
                                </Tooltip>
                              </Link>
                            )}
                            <Link href={project.link_github} target="_blank">
                              <Tooltip title="View github">
                                <IconButton sx={{ color: 'white' }} aria-label={`github`}>
                                  <GitHubIcon />
                                </IconButton>
                              </Tooltip>
                            </Link>
                          </Box>
                        }
                      />
                    </ImageListItem>
                  )
                })}
              </ImageList>
            </div>
          )}
          {query_685 && (
            <div className={styles.projectsContent}>
              <ImageList cols={1} gap={30} sx={{ placeItems: 'center', marginTop: '3rem' }}>
                {projects.map((project: Project) => {
                  return (
                    <ImageListItem key={project.title}>
                      <Image src={project.image} alt={project.title} width={260} height={150} />
                      <ImageListItemBar
                        title={project.title}
                        subtitle={project.subtitle}
                        actionIcon={
                          <Box>
                            {!project.link_demo ? (
                              <></>
                            ) : (
                              <Link href={project.link_demo} target="_blank">
                                <Tooltip title="View website">
                                  <IconButton sx={{ color: 'white' }} aria-label={`demo`}>
                                    <RemoveRedEyeIcon />
                                  </IconButton>
                                </Tooltip>
                              </Link>
                            )}
                            <Link href={project.link_github} target="_blank">
                              <Tooltip title="View github">
                                <IconButton sx={{ color: 'white' }} aria-label={`github`}>
                                  <GitHubIcon />
                                </IconButton>
                              </Tooltip>
                            </Link>
                          </Box>
                        }
                      />
                    </ImageListItem>
                  )
                })}
              </ImageList>
            </div>
          )} */}
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
