import type { Project } from '@/pages/projects'
import { Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import GitHubIcon from '@mui/icons-material/GitHub'
import { styled } from '@mui/material/styles'
type TProjectItemProps = {
  project: Project
}

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  gap: theme.spacing(2),
  borderRadius: theme.spacing(2),
  color: theme.palette.text.primary,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    padding: theme.spacing(3)
  },
}))
const ProjectItem: React.FC<TProjectItemProps> = ({ project }) => {
  return (
    <StyledStack>
      <Stack justifyContent="center" flex="0 0 50%" gap={5}>
        <Stack gap={2}>
          <Typography variant="h4">{project.title}</Typography>
          <Typography width="90%">{project.subtitle}</Typography>
        </Stack>
        <Stack direction="row" gap={2}>
          <Link href={project.link_github} target='_blank'>
            <Button variant="contained">
              <Stack direction="row" gap={1} alignItems="center">
                <GitHubIcon />
                <Typography variant="button">Github</Typography>
              </Stack>
            </Button>
          </Link>
          <Link href={project.link_demo} target='_blank'>
            <Button variant="outlined">
              <Stack direction="row" gap={1} alignItems="center">
                <RemoveRedEyeIcon />
                <Typography variant="button">View</Typography>
              </Stack>
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack>
        <img src={project.image.src} alt={project.title} width="100%" />
      </Stack>
    </StyledStack>
  )
}
export default ProjectItem
