import landingPage from '@/constants/landingPage.constant'
import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import FeaturedPost from './FeaturedPost'

export default function FeaturedPosts() {
  return (
    <Stack paddingY={112 / 8} paddingX={{ lg: 195 / 8 }} spacing={10}>
      <Stack spacing={10 / 8} width={'100%'} alignItems={'center'}>
        <Typography variant='h6' color={"primary.main"} textAlign={'center'}>Practice Advice</Typography>
        <Typography variant='h2' color={"text.primary"} textAlign={'center'}>Featured Posts</Typography>
      </Stack>
      <Grid container columns={3} spacing={{ xs: 30 / 8, md: 10 / 8 }}>
        {landingPage.posts.map((post, index) => (
          <Grid key={index} xs={3} md={1}>
            <FeaturedPost post={post} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
