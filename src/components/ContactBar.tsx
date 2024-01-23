import React from 'react'
import { Icon } from '@iconify/react';
import landingPage from '@/constants/landingPage.constant'
import { Container, Link, Stack, Typography, useTheme } from '@mui/material'

export default function ContactBar() {
  const theme = useTheme();

  return (
    <Container maxWidth={false} sx={{ backgroundColor: theme.palette.secondary.main, display: { xs: 'none', sm: 'block' } }}>
      <Stack maxWidth={"xl"} margin={'auto'} direction={"row"} justifyContent={"space-between"} paddingY={2.5} paddingX={4}>
        <Stack direction={"row"} alignItems={"center"} spacing={5}>
          <Stack direction={"row"} alignItems={"center"} spacing={0.625}>
            <Icon width={16} color={theme.palette.common.white} icon="solar:phone-linear" />
            <Link variant="h6" underline="none" href={`tel:${landingPage.contactInformation.phoneNumber}`} color={theme.palette.common.white}>
              {landingPage.contactInformation.phoneNumber}
            </Link>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={0.625}>
            <Icon width={16} color={theme.palette.common.white} icon="ic:outline-email" />
            <Link variant="h6" underline="none" href={`mailto:${landingPage.contactInformation.email}`} color={theme.palette.common.white}>
              {landingPage.contactInformation.email}
            </Link>
          </Stack>
        </Stack>
        <Typography variant="h6" color={theme.palette.common.white} sx={{ display: { sm: 'none', lg: 'block' } }}>Follow Us and get a chance to win 80% off</Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={1.25} sx={{ display: { xs: 'none', md: 'inherit' } }}>
          <Typography variant="h6" color={theme.palette.common.white}>Follow Us: </Typography>
          {landingPage.contactInformation.socialMedia.map((socialMedia, index) => (
            <Link key={index} underline="none" href={socialMedia.url} color={theme.palette.common.white}>
              <Icon width={16} icon={socialMedia.icon} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
