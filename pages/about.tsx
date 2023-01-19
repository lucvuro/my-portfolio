import React, { ReactElement } from 'react'
import styles from '@/styles/About.module.css'
import { Container } from '@mui/system'
import { Box, Divider, LinearProgress } from '@mui/material'
import { NextPageWithLayout } from '@/next'
import { MainLayout } from '@/layouts'
import Head from 'next/head'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import HeadsetIcon from '@mui/icons-material/Headset'
import SearchIcon from '@mui/icons-material/Search'
interface AboutPageProps {}
interface Skill {
  title: string
  value: number
}
const skills: Skill[] = [
  {
    title: 'HTML',
    value: 85,
  },
  {
    title: 'CSS',
    value: 75,
  },
  {
    title: 'JavaScript',
    value: 80,
  },
  {
    title: 'ReactJS',
    value: 80,
  },
  {
    title: 'Redux',
    value: 60,
  },
  {
    title: 'NextJS',
    value: 50,
  },
  {
    title: 'Python',
    value: 65,
  },
]
const About: NextPageWithLayout = (props: AboutPageProps) => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <main className={styles.main}>
        <Container maxWidth="lg">
          <Box className={styles.aboutHeader} sx={{ color: 'text.primary' }}>
            <h1 className={styles.aboutTitle}>About Me</h1>
            <Divider />
          </Box>
          <div className={styles.aboutContent}>
            <Box className={styles.aboutItem} sx={{ color: 'text.primary' }}>
              <h3 className={styles.aboutItemTitle}>abit about my self</h3>
              <div className={styles.aboutItemContent}>
                <p>
                  An software engineer wants to bring the best of my product for customers. Loving
                  with modern technologies and the passion of learning them, I want to build
                  infrastructure and delivers modern solution for the business.
                </p>
              </div>
            </Box>
            <Box className={styles.aboutItem} sx={{ color: 'text.primary' }}>
              <h3 className={styles.aboutItemTitle}>skills</h3>
              <div className={styles.aboutItemContent}>
                <div className={styles.aboutListSkills}>
                  {skills.map((skill: Skill) => {
                    return (
                      <div className={styles.aboutSkill} key={skill.title}>
                        <div className={styles.aboutSkillTitle}>{skill.title}</div>
                        <div className={styles.aboutSkillValue}>
                          <div className={styles.aboutSkillLabel}>{`${skill.value}%`}</div>
                          <LinearProgress variant="determinate" value={skill.value} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Box>
            <Box className={styles.aboutItem} sx={{ color: 'text.primary' }}>
              <h3 className={styles.aboutItemTitle}>work experience</h3>
              <div className={styles.aboutItemContent}>
                <div className={styles.aboutWork}>
                  <h4 className={styles.aboutWorkCompany}>Geek Up</h4>
                  <div className={styles.aboutWorkTime}>
                    <i>08/2022 - 11/2022</i>
                  </div>
                  <ul className={styles.aboutWorkListTask}>
                    <li className={styles.aboutWorkTask}>Thinking Impactful Product</li>
                    <li className={styles.aboutWorkTask}>Design UI/UX</li>
                    <li className={styles.aboutWorkTask}>Front-end Web Development</li>
                    <li className={styles.aboutWorkTask}>Member of a SCRUM team</li>
                    <li className={styles.aboutWorkTask}>Deployment for a ReactJS website</li>
                  </ul>
                </div>
              </div>
            </Box>
            <Box className={styles.aboutItem} sx={{ color: 'text.primary' }}>
              <h3 className={styles.aboutItemTitle}>hobbies</h3>
              <div className={styles.aboutItemContent}>
                <ul className={styles.aboutListHobby}>
                  <li className={styles.aboutHobby}>
                    Playing game {<SportsEsportsIcon fontSize="small" />}
                  </li>
                  <li className={styles.aboutHobby}>
                    Listening to music {<HeadsetIcon fontSize="small" />}
                  </li>
                  <li className={styles.aboutHobby}>
                    Research new technologies {<SearchIcon fontSize="small" />}
                  </li>
                </ul>
              </div>
            </Box>
          </div>
        </Container>
      </main>
    </>
  )
}
About.getLayout = function getLayout(page: ReactElement) {
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
export default About
