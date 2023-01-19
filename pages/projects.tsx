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
  Tooltip,
  useMediaQuery,
} from '@mui/material'
import ccsapi from '@/assets/images/ccsapi.png'
import ccsweb from '@/assets/images/ccsweb.png'
import luchebot from '@/assets/images/luchedc.png'
import lucvurodev from '@/assets/images/lucvurodev.png'
import Image from 'next/image'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'
export interface ProjectsPageProps {}
interface Project {
  title: string
  subtitle: string
  image: typeof lucvurodev
  link_demo: string
  link_github: string
}
const projects: Project[] = [
  {
    title: 'lucvuro.dev',
    subtitle: '@My Portfolio website',
    image: lucvurodev,
    link_demo: 'https://www.lucvuro.dev/',
    link_github: 'https://github.com/lucvuro/my-portfolio',
  },
  {
    title: 'CCS Cards Info',
    subtitle: '@A website to view info cards',
    image: ccsweb,
    link_demo: 'https://sakura-react.vercel.app/home',
    link_github: 'https://github.com/lucvuro/ccsakura-react',
  },
  {
    title: 'Luc He Bot',
    subtitle: '@A Bot Discord Music & Games',
    image: luchebot,
    link_demo: '',
    link_github: 'https://github.com/lucvuro/luc-he-discord',
  },
  {
    title: 'Cardcaptor Sakura API',
    subtitle: '@An API to get info of cards',
    image: ccsapi,
    link_demo: 'https://lingering-dawn-3306.fly.dev/',
    link_github: 'https://github.com/lucvuro/card-captor-sakura-card-api',
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
          {!query_1100 && !query_685 && <div className={styles.projectsContent}>
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
          </div>}
          {query_1100 && !query_685 && <div className={styles.projectsContent}>
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
          </div>}
          {query_685 && <div className={styles.projectsContent}>
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
          </div>}
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
