import React, { useState, MouseEvent, useMemo } from 'react'
import {
  AppBar,
  Button,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
  PaletteMode,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { getDesignTokens } from '@/theme'
import Head from 'next/head'
export interface MainLayoutProps {
  children: React.ReactNode
}
const pages = ['Home', 'Projects', 'About', 'Contact']
export function MainLayout(props: MainLayoutProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const [mode, setMode] = useState<PaletteMode>('dark')
  const handleChangeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.getElementsByTagName('body')[0].style.background = '#0c0c0c'
    } else {
      setMode('light')
      document.getElementsByTagName('body')[0].style.background = '#f6f6f6'
    }
  }
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <>
      <Head>
        <title>lucvuro.dev</title>
        <meta name="description" content="Portfolio of lucvuro - A developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="transparent">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link href="/" legacyBehavior>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    ml: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ⌬LUCVURO
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page: string) => {
                    return (
                      <MenuItem key={page}>
                        <Link href={`/${page === 'Home' ? '' : page.toLowerCase()}`} legacyBehavior>
                          <Typography textAlign="center">{page}</Typography>
                        </Link>
                      </MenuItem>
                    )
                  })}
                </Menu>
              </Box>
              <Link href="/" legacyBehavior>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ⌬LUCVURO
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page: string) => {
                  return (
                    <Link
                      key={page}
                      href={`/${page === 'Home' ? '' : page.toLowerCase()}`}
                      legacyBehavior
                    >
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'text.primary', display: 'block' }}
                        size="large"
                      >
                        {page}
                      </Button>
                    </Link>
                  )
                })}
              </Box>
              <Box
                sx={{
                  bgcolor: 'background.default',
                  color: 'text.primary',
                  flexGrow: 0,
                }}
              >
                <Tooltip title="Change mode">
                  <IconButton sx={{ ml: 1 }} color="inherit" onClick={handleChangeMode}>
                    {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <div>{props.children}</div>
      </ThemeProvider>
    </>
  )
}
