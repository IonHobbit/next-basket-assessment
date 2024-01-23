import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Stack } from '@mui/material';

type ReviewStarsProps = {
  stars: number;
  maxStars?: number;
}

export default function ReviewStars({ stars, maxStars = 5 }: ReviewStarsProps) {
  return (
    <Stack direction={'row'} spacing={0.625}>
      {[...Array(maxStars)].map((_, index) => (
        <Icon key={index} icon={index + 1 <= stars ? 'tabler:star-filled' : 'tabler:star'} color='#F3CD03' width={22} />
      ))}
    </Stack>
  )
}
