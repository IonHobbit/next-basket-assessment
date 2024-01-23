import { Stack, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'
import React from 'react'

export default function Landing() {

  const CardTitle = ({ lineHeight }: { lineHeight?: string }) => {
    return (
      <Stack spacing={0.625} position={'absolute'} padding={3} zIndex={10} overflow={'hidden'}>
        <Typography variant='h6' color="success.main">5 items</Typography>
        <Typography variant='h2' color="text.primary" lineHeight={lineHeight} className='truncate'>FURNITURE</Typography>
        <Typography variant='h6' color="text.primary">Read More</Typography>
      </Stack>
    )
  }
  return (
    <Grid container columns={10} spacing={2} paddingY={10}>
      <Grid xs={10} md={4} overflow={'hidden'} width={'100%'}>
        <CardTitle lineHeight='50px' />
        <Box position={'relative'} height={{ xs: '300px', md: '616px' }}>
          <Image src="/images/home1.jpeg" alt="Picture of the Plates" className="object-cover" fill />
        </Box>
      </Grid>
      <Grid xs={10} md={6}>
        <Grid container columns={2} spacing={2}>
          <Grid xs={2}>
            <CardTitle />
            <Box position={'relative'} height={'300px'}>
              <Image src="/images/home2.jpeg" alt="Picture of a Flower in a flower pot" className="object-cover" fill />
            </Box>
          </Grid>
          <Grid xs={2} md={1}>
            <CardTitle />
            <Box position={'relative'} height={'300px'}>
              <Image src="/images/home3.jpeg" alt="Picture of a Light Fixture" className="object-cover" fill />
            </Box>
          </Grid>
          <Grid xs={2} md={1}>
            <CardTitle />
            <Box position={'relative'} height={'300px'}>
              <Image src="/images/home4.jpeg" alt="Picture of a Bowls" className="object-cover" fill />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
