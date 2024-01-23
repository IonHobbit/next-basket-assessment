import React from 'react'
import Image from 'next/image'
import ReviewStars from '@/components/ReviewStars'
import landingPage from '@/constants/landingPage.constant'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export default function Reviews() {
  return (
    <Stack paddingY={10} paddingX={{ lg: 195 / 8 }} spacing={10}>
      <Grid container columns={2} spacing={3} justifyContent={'space-between'}>
        <Grid xs={2} md={1}>
          <Stack spacing={28 / 8} width={'100%'} alignItems={'center'}>
            <Typography variant='h3' color={"text.primary"} textAlign={'center'}>What they say about us</Typography>
            <Stack spacing={20 / 8} width={'100%'} alignItems={'center'} padding={3.75}>
              <Image src="/images/review-user.webp" alt="Review User Image" width={90} height={90}
                className='rounded-full border-[1.8px] border-[#BDBDBD] overflow-hidden' />
              <ReviewStars stars={4} />
              <Typography variant='h6' color={"text.secondary"} textAlign={'center'}>Slate helps you see how many more days you need to work to
                reach your financial goal.
              </Typography>
              <Box>
                <Typography className='link' color={"primary.main"} textAlign={'center'}>Regina Miles</Typography>
                <Typography variant='h6' color={"text.primary"} textAlign={'center'}>Designer</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={2} md={1} height={'100%'}>
          <Grid container columns={3} spacing={17.85 / 8}>
            {landingPage.reviewImages.map((reviewImage, index) => (
              <Grid key={index} xs={1} >
                <Box position={'relative'} overflow={'hidden'} height={142.76} width={'100%'}>
                  <Image src={reviewImage} alt={`review image ${index + 1}`} fill className='object-cover' sizes='100%' />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  )
}
