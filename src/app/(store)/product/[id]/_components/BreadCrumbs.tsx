import React from 'react'
import { Stack, useTheme } from '@mui/material'
import Link from 'next/link'
import { Icon } from '@iconify/react';

export default function BreadCrumbs() {
  const { palette: { text } } = useTheme();

  return (
    <Stack paddingY={3} direction={'row'} justifyContent={{ xs: 'center', md: 'start' }} alignItems={'center'} spacing={15 / 8}>
      <Link href="/" className='link no-underline' color={"text.primary"}>Home</Link>
      <Icon icon="lucide:chevron-right" width={16} height={16} color={text.disabled} />
      <Link href="/shop" className='link no-underline' style={{ color: text.disabled }}>Shop</Link>
    </Stack>
  )
}
