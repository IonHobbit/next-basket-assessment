import React from 'react'
import { Icon } from '@iconify/react';
import SectionHeader from '@/components/SectionHeader'
import landingPage from '@/constants/landingPage.constant'
import { Stack, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function BestServices() {
  const { palette: { primary } } = useTheme();
  
  return (
    <Stack paddingY={10} paddingX={{ lg: 195 / 8 }} spacing={10}>
      <SectionHeader title='The Best Services' subtitle='Featured Products' description='Problems trying to resolve the conflict between' />
      <Grid container columns={3} spacing={3.75}>
        {landingPage.services.map((service, index) => (
          <Grid xs={3} md={1} key={index}>
            <Stack key={index} spacing={20 / 8} width={'100%'} paddingX={5} paddingY={35 / 8} alignItems={'center'}>
              <Icon width={72} color={primary.main} icon={service.icon} />
              <Typography variant='h3' color={"text.primary"} textAlign={'center'}>{service.name}</Typography>
              <Typography variant='body1' color={"text.secondary"} textAlign={'center'}>{service.description}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
