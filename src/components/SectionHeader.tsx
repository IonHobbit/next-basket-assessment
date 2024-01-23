import { Stack, Typography } from '@mui/material'
import React from 'react'

type SectionHeaderProps = {
  title: string,
  subtitle: string,
  description: string
}

export default function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <Stack spacing={10 / 8} width={'100%'} alignItems={'center'}>
      <Typography variant='h4' color={"text.secondary"} textAlign={'center'}>{subtitle}</Typography>
      <Typography variant='h3' color={"text.primary"} textAlign={'center'} textTransform={'uppercase'}>{title}</Typography>
      <Typography variant='body1' color={"text.secondary"} textAlign={'center'} >{description}</Typography>
    </Stack>
  )
}
