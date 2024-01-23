'use client';

import React from 'react'
import ContactBar from '@/components/ContactBar'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { Container } from '@mui/material';

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
      <Footer />
    </main>
  )
}
