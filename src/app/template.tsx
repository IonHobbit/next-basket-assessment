'use client';

import ContactBar from '@/components/ContactBar'
import Header from '@/components/Header'
import { Container } from '@mui/material';
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function MainTemplate({ children }: Props) {
  return (
    <main className=' min-h-screen'>
      <ContactBar />
      <Header />
      <Container maxWidth={"xl"} sx={{ paddingX: { xs: 5, sm: 6 } }}>
        {children}
      </Container>
    </main>
  )
}
