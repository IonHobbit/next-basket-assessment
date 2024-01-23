'use client';

import React, { useEffect, useState } from 'react'
import landingPage from '@/constants/landingPage.constant'
import { Stack, Typography, useTheme, Button, Box, Link } from '@mui/material'
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import LoadingIcons from 'react-loading-icons';

type BestSellerProductsProps = {
  columns: number;
  titlePosition: 'center' | 'left';
  paginate?: boolean;
}

interface ProductI {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function BestSellerProducts({ columns, titlePosition, paginate }: BestSellerProductsProps) {
  const { palette: { primary, common } } = useTheme();
  const [products, setProducts] = useState<ProductI[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    skip: 0,
    limit: paginate ? 10 : 8,
    total: 0
  });

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=${pagination.limit}&skip=${pagination.skip}`)
      const data = await response.json()
      setProducts([...products, ...data.products])
      const _pagination = { total: data.total, skip: data.products.length + products.length, limit: data.limit }
      setPagination(_pagination)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }

  const getDiscountedPrice = (price: number, discountPercentage: number) => {
    return formatPrice(price - ((price * discountPercentage) / 100))
  }


  const alignment = titlePosition == 'center' ? 'center' : 'start'

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Stack alignItems={alignment} paddingY={10} paddingX={{ lg: 195 / 8 }} spacing={3}>
      {titlePosition == 'center' &&
        <SectionHeader title='Bestseller Products' subtitle='Featured Products' description='Problems trying to resolve the conflict between' />
      }
      {titlePosition == 'left' &&
        <Typography variant='h3' color={"text.primary"} textAlign={'left'}>BESTSELLER PRODUCTS</Typography>
      }
      <Grid container columns={columns} spacing={30 / 8} padding={3}>
        {products.map((product, index) => (
          <Grid xs={columns} md={1} key={index}>
            <Link href={`/product/${product.id}`} underline='none' className="cursor-pointer">
              <Box position={'relative'} overflow={'hidden'} height={{ xs: 360, md: 238 }} width={'100%'}>
                <Image src={product.thumbnail} alt={`${product.title} thumbnail`} layout={'fill'} className='object-cover' />
              </Box>
              <Stack alignItems={alignment} padding={3} paddingBottom={'35px'} spacing={10 / 8}>
                <Typography variant='h5' color={"text.primary"} className=' line-clamp-2' textTransform={'capitalize'} textAlign={alignment}>{product.title}</Typography>
                <Typography className='link' color={"text.secondary"} textTransform={'capitalize'} textAlign={alignment}>{product.category}</Typography>
                <Stack direction={'row'} flexWrap='wrap' alignItems={'center'} gap={5 / 8}>
                  {product.discountPercentage > 0 &&
                    <Typography variant='h5' color={"text.disabled"} textAlign={alignment}>{formatPrice(product.price)}</Typography>
                  }
                  <Typography variant='h5' color={"success.dark"} textAlign={alignment}>{getDiscountedPrice(product.price, product.discountPercentage)}</Typography>
                </Stack>
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
      {(paginate && products.length !== pagination.total) &&
        <Button
          onClick={fetchProducts}
          disableRipple
          disableElevation
          className='transition-all'
          sx={{ backgroundColor: `${common.white} !important`, borderRadius: '5px', color: primary.main, border: `1px solid ${primary.main}`, fontWeight: 700, fontSize: '14px', paddingX: loading ? '80px' : '40px', paddingY: '15px' }}
        >
          {loading ? <LoadingIcons.Puff stroke={primary.main} width={28} height={28} /> : error ? 'ERROR' : 'LOAD MORE PRODUCTS'}

        </Button>
      }
    </Stack >
  )
}