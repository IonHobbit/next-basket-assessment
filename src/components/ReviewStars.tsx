import { Icon } from '@iconify/react/dist/iconify.js';
import { Stack } from '@mui/material';
import React from 'react'

type ReviewStarsProps = {
  stars: number;
  maxStars?: number;
}

export default function ReviewStars({ stars, maxStars = 5 }: ReviewStarsProps) {
  return (
    <Stack direction={'row'} spacing={5 / 8}>
      {[...Array(maxStars)].map((_, index) => (
        <Icon icon={index + 1 <= stars ? 'tabler:star-filled' : 'tabler:star'} color='#F3CD03' width={22} />
      ))}
    </Stack>
  )
}