import React from 'react'
import { Icon } from '@iconify/react';
import landingPage from '@/constants/landingPage.constant'
import { Box, Button, Input, Link, Stack, Typography, useTheme } from '@mui/material'

export default function Footer() {
  const { palette: { primary } } = useTheme();
  
  return (
    <React.Fragment>
      <Stack marginX={{ xs: -5, sm: -6 }} paddingY={5} direction={{ xs: 'column', md: 'row' }} sx={{ backgroundColor: '#FAFAFA' }} spacing={3} justifyContent={'space-between'} paddingX={{ xs: 5, lg: 243 / 8 }}>
        <Link variant="h3" underline="none" href={`/`} color={'text.primary'}>
          Bandage
        </Link>
        <Stack direction={"row"} alignItems={"center"} spacing={1.25}>
          {landingPage.contactInformation.socialMedia.map((socialMedia, index) => (
            <Link key={index} underline="none" href={socialMedia.url} color={'primary.main'}>
              <Icon width={24} icon={socialMedia.icon} />
            </Link>
          ))}
        </Stack>
      </Stack>
      <Stack paddingY={{ xs: 70 / 8, md: 50 / 8 }} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={30 / 8} paddingX={{ lg: 195 / 8 }}>
        {landingPage.footerLinks.map((footerLink, index) => (
          <Stack key={index} flex={1} spacing={20 / 8}>
            <Typography variant='h5' noWrap color={"text.primary"}>{footerLink.header}</Typography>
            <Stack spacing={10 / 8}>
              {footerLink.links.map((link, index) => (
                <Link key={index} className="link whitespace-nowrap" underline="none" href={link.url} color={'text.secondary'}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Stack>
        ))}

        <Stack spacing={20 / 8} flexShrink={0}>
          <Typography variant='h5' color={"text.primary"}>Get In Touch</Typography>
          <Box>
            <Stack direction={'row'} justifyContent={'space-between'} border="1px solid #E6E6E6" borderRadius={'5px'} overflow={'hidden'}>
              <Input
                type="email"
                disableUnderline
                placeholder='Your Email'
                sx={{ backgroundColor: '#F5F5F5', borderRadius: '5px', paddingX: '15px', paddingY: '10px' }}
              />
              <Button
                disableRipple
                disableElevation
                sx={{ backgroundColor: `${primary.main} !important`, borderRadius: '0', color: '#FFF', fontWeight: 700, fontSize: '14px', paddingX: '22.5px', paddingY: '10px' }}>
                Subscribe
              </Button>
            </Stack>
            <Typography variant='body2' lineHeight={'28px'} color={"text.secondary"}>Get In Touch</Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack marginX={{ xs: -5, sm: -6 }} paddingY={25 / 8} alignItems={{ xs: 'center', md: 'start' }} paddingX={{ xs: 5, lg: 243 / 8 }} sx={{ backgroundColor: '#FAFAFA' }}>
        <Typography width={{ xs: '200px', md: 'auto' }} sx={{ textAlign: { xs: 'center', md: 'left' } }} variant='h6' color={"text.secondary"}>Made With Love By Finland All Right Reserved</Typography>
      </Stack>
    </React.Fragment>
  )
}
