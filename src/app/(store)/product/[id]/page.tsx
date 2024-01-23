'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useParams } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image';
import LoadingIcons from 'react-loading-icons';
import productPage from '@/constants/productPage.constants';
import BestSellerProducts from '@/components/BestSellerProducts';
import ProductDetail from './_components/ProductDetail';

export default function ProductPage() {
  const [product, setProduct] = useState<ProductI | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { palette: { primary } } = useTheme();
  const bestSellerRef = useRef<HTMLDivElement>(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/product/${id}`)
      const data = await response.json() as ProductI
      if (data.id) {
        setProduct(data)
      } else {
        setTimeout(() => {
          if (bestSellerRef.current)
            window.scrollTo({ top: bestSellerRef.current.scrollHeight - 300, behavior: 'smooth' })
        }, 4000);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  if (loading) {
    return (
      <Stack sx={{ minHeight: '60vh', alignItems: 'center', justifyContent: 'center' }}>
        <LoadingIcons.Puff stroke={primary.main} width={50} height={50} />
      </Stack>
    )
  }

  return (
    <React.Fragment>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <Stack sx={{ minHeight: '60vh', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '400px', textAlign: 'center' }}>
            <Typography variant='h3' color={"text.primary"} marginBottom={2}>We can&apos;t seem to find this product</Typography>
            <Typography variant='body2' color={"text.primary"}>Please check below for our available bestsellers products</Typography>
          </Box>
        </Stack>
      )}
      <Box ref={bestSellerRef} display={{ xs: 'none', md: 'block' }}>
        <BestSellerProducts titlePosition='left' columns={4} />
      </Box>
      <Grid container columns={6} spacing={{ xs: 60 / 8, md: 30 / 8 }} paddingY={50 / 8}>
        {productPage.brandLogos.map((brandLogo, index) => (
          <Grid key={index} xs={6} md={1}>
            <Box width={'100%'} height={'75px'} position={'relative'}>
              <Image src={brandLogo} alt={`brand logo ${index + 1}`} className='object-contain' fill sizes='100%' />
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}
