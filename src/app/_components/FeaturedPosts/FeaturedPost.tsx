import React from 'react'
import { Icon } from '@iconify/react';
import landingPage from '@/constants/landingPage.constant';
import { Box, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'

type FeaturedPostProps = {
  post: typeof landingPage.posts[0];
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const { palette: { primary, success } } = useTheme();

  return (
    <Box boxShadow={'0px 2px 4px 0px rgba(0, 0, 0, 0.10)'}>
      <Box height={'300px'} position={'relative'}>
        <Box position={'absolute'} bgcolor={'error.main'} paddingX={"10px"} zIndex={10} top={20} left={20} borderRadius={'3px'} boxShadow={'0px 2px 4px 0px rgba(0, 0, 0, 0.10)'}>
          <Typography variant='h6' color="common.white">NEW</Typography>
        </Box>
        <Image src={post.image} alt='' className='object-cover' fill />

      </Box>
      <Stack padding={3} spacing={10 / 8}>
        <Stack direction={'row'} width={'100%'} overflow={'auto'} spacing={15 / 8}>
          <Typography variant='body2' color={"primary.light"}>Google</Typography>
          <Typography variant='body2' color={"text.secondary"}>Trending</Typography>
          <Typography variant='body2' color={"text.secondary"}>New</Typography>
        </Stack>
        <Typography variant='h4' color={"text.primary"}>{post.name}</Typography>
        <Typography color={"text.secondary"}>{post.description}</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} paddingY={15 / 8} justifyContent={'space-between'} spacing={15 / 8}>
          <Stack direction={'row'} alignItems={'center'} spacing={5 / 8}>
            <Icon icon={'ci:alarm'} color={primary.main} />
            <Typography variant='body2' color={"text.secondary"}>{post.date}</Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} spacing={5 / 8}>
            <Icon icon={'entypo:area-graph'} color={success.dark} />
            <Typography variant='body2' color={"text.secondary"}>{post.comments} Comments</Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={10 / 8} className='cursor-pointer'>
          <Typography variant='h6' color={"text.secondary"}>Learn More</Typography>
          <Icon height={16} icon={'tabler:chevron-right'} color={primary.main} />
        </Stack>
      </Stack>
    </Box>
  )
}
