import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <Stack spacing={2} sx={{ minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <Box width={{ xs: 'auto', md: '447px' }}>
        <Typography variant='h2' marginBottom={3}>Sorry!</Typography>
        <Typography variant='h6'>This page does not exist</Typography>
        <Typography variant='body2' marginBottom={2}>Looks like it was not a requirement</Typography>
        <Link href="/" className='link cursor-pointer'>Go back home</Link>
      </Box>

    </Stack>
  )
}