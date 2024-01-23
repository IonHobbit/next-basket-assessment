import React from 'react'
import { Icon } from '@iconify/react';
import landingPage from '@/constants/landingPage.constant'
import { Container, Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link';

export default function ContactBar() {
  const theme = useTheme();

  return (
    <Container maxWidth={false} sx={{ backgroundColor: theme.palette.secondary.main, display: { xs: 'none', sm: 'block' } }}>
      <Stack maxWidth={"xl"} margin={'auto'} direction={"row"} justifyContent={"space-between"} paddingY={2.5} paddingX={4}>
        <Stack direction={"row"} alignItems={"center"} spacing={5}>
          <Stack direction={"row"} alignItems={"center"} spacing={0.625}>
            <Icon width={16} color={theme.palette.common.white} icon="solar:phone-linear" />
            <Link className='no-underline link' href={`tel:${landingPage.contactInformation.phoneNumber}`} style={{ color: theme.palette.common.white }}>
              {landingPage.contactInformation.phoneNumber}
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={0.625}>
            <Icon width={16} color={theme.palette.common.white} icon="bi:envelope" />
            <Link className='no-underline link' href={`mailto:${landingPage.contactInformation.email}`} style={{ color: theme.palette.common.white }}>
              {landingPage.contactInformation.email}
            </Link>
          </Stack>
        </Stack>
        <Typography variant="h6" color={theme.palette.common.white} sx={{ display: { sm: 'none', lg: 'block' } }}>Follow Us and get a chance to win 80% off</Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={1.25} sx={{ display: { xs: 'none', md: 'inherit' } }}>
          <Typography variant="h6" color={theme.palette.common.white}>Follow Us: </Typography>
          {landingPage.contactInformation.socialMedia.map((socialMedia, index) => (
            <Link key={index} className='no-underline' href={socialMedia.url} style={{ color: theme.palette.common.white }}>
              <Icon width={16} icon={socialMedia.icon} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
