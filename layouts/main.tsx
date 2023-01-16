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
  Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { getDesignTokens } from '@/theme'
import { text } from 'stream/consumers'
export interface MainLayoutProps {
  children: React.ReactNode
}
const pages = ['Home', 'Portfolio', 'About', 'Contact']
export function MainLayout(props: MainLayoutProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const [mode, setMode] = useState<PaletteMode>('light')
  const handleChangeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.getElementsByTagName('body')[0].style.background = "#0c0c0c" 
    } else {
      setMode('light')
      document.getElementsByTagName('body')[0].style.background = "#f6f6f6"
    }
  }
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="transparent">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  ml: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                }}
              >
                LUCVURO
              </Typography>
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
                        <Link href="#">
                          <Typography textAlign="center">{page}</Typography>
                        </Link>
                      </MenuItem>
                    )
                  })}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                }}
              >
                LUCVURO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page: string) => {
                  return (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'text.primary', display: 'block' }}
                      size="large"
                    >
                      {page}
                    </Button>
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
                {/* {theme.palette.mode} mode */}
                <IconButton sx={{ ml: 1 }} color="inherit" onClick={handleChangeMode}>
                  {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <div>{props.children}</div>
      </ThemeProvider>
    </>
  )
}
