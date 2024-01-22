'use client';

import { Icon } from '@iconify/react';
import landingPage from '@/constants/landingPage';
import { Box, Container, Link, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function Header() {
  const theme = useTheme();
  const [isOpened, setIsOpened] = React.useState(false);

  const toggleMenu = () => setIsOpened(!isOpened);

  return (
    <Container maxWidth={false} sx={{ padding: { xs: 0, sm: 2 } }}>
      <Stack maxWidth={"xl"} margin={'auto'} direction={"row"} justifyContent={"space-between"} paddingY={2.5} paddingX={4}>
        <Stack direction={"row"} alignItems={"center"} spacing={120 / 8}>
          <Link variant="h3" underline="none" href={`/`} color={theme.palette.text.primary}>
            Bandage
          </Link>
          <Stack direction={"row"} alignItems={"center"} spacing={15 / 8} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {landingPage.navigationLinks.map((navigationLink, index) => (
              <Link key={index} className='link' underline="none" href={navigationLink.url} color={theme.palette.text.secondary}>
                {navigationLink.name}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={30 / 8} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Stack direction={"row"} alignItems={"center"} spacing={5 / 8}>
            <Icon width={16} color={theme.palette.primary.main} icon="ant-design:user-outlined" />
            <Link className='link' underline="none" href={'/auth'} color={theme.palette.primary.main}>
              Login/Register
            </Link>
          </Stack>
          <Icon width={16} color={theme.palette.primary.main} icon="bi:search" />
          <Stack direction={"row"} alignItems={"center"} spacing={5 / 8}>
            <Icon width={16} color={theme.palette.primary.main} icon="ant-design:shopping-cart-outlined" />
            <Typography variant='body2' color={theme.palette.primary.main}>0</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={5 / 8}>
            <Icon width={16} color={theme.palette.primary.main} icon="ion:heart-outline" />
            <Typography variant='body2' color={theme.palette.primary.main}>0</Typography>
          </Stack>
        </Stack>

        {/* Mobile Options */}
        <Stack direction={"row"} alignItems={"center"} spacing={30 / 8} className='md:hidden'>
          <Icon width={24} color={theme.palette.text.primary} icon="bi:search" />
          <Icon width={24} color={theme.palette.text.primary} icon="ant-design:shopping-cart-outlined" />
          <Icon onClick={toggleMenu} width={24} className='cursor-pointer' color={theme.palette.text.primary} icon="tabler:menu-deep" />
        </Stack>
      </Stack>

      {/* Mobile Menu */}
      {isOpened &&
        <Stack
          width={'100%'}
          spacing={30 / 8}
          className='md:hidden'
          alignItems={"center"}
          justifyContent={"space-around"}
          sx={{ backgroundColor: theme.palette.common.white, paddingX: 18.25, paddingY: 12.25 }}>
          {landingPage.navigationLinks.map((navigationLink, index) => (
            <Link key={index} className='mobile-menu-item' underline="none" href={navigationLink.url} color={theme.palette.text.secondary}>
              {navigationLink.name}
            </Link>
          ))}
        </Stack>
      }
    </Container >
  )
}
