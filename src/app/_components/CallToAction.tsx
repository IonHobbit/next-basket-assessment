import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function CallToAction() {
  const { palette: { primary } } = useTheme();

  return (
    <Stack marginX={{ xs: -5, sm: -6 }} paddingTop={20} paddingBottom={112 / 8} paddingX={{ xs: 5, lg: 416.5 / 8 }} alignItems={'center'} spacing={30 / 8} sx={{ backgroundImage: `url('/images/section-bg.jpeg')`, backgroundSize: 'cover' }}>
      <Typography variant='h6' color={"primary.main"} textAlign={'center'}>Designing Better Experience</Typography>
      <Typography variant='h2' color={"text.primary"} textAlign={'center'} lineHeight={'50px'}>Problems trying to resolve
        the conflict between</Typography>
      <Box width={{ xs: 'auto', md: '447px' }}>
        <Typography variant='body2' color={"text.secondary"} textAlign={'center'}>Problems trying to resolve the conflict between the two major realms of Classical physics:</Typography>
      </Box>
      <Typography variant='h3' color={"success.dark"} textAlign={'center'}>$16.48</Typography>
      <Button
        disableElevation
        disableRipple
        sx={{ backgroundColor: `${primary.main} !important`, borderRadius: '5px', color: '#FFF', fontWeight: 700, fontSize: '14px', paddingX: '40px', paddingY: '15px' }}
      >
        ADD YOUR CALL TO ACTION
      </Button>
    </Stack>
  )
}
