'use client';

import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react';
import { Box, Link, Stack, Typography, Button, useTheme } from '@mui/material';
import { useParams } from 'next/navigation';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image';
import LoadingIcons from 'react-loading-icons';
import ReviewStars from '@/components/ReviewStars';
import helperUtil from '@/utils/helper.util';
import productPage from '@/constants/productPage.constants';
import BestSellerProducts from '@/components/BestSellerProducts';

export default function ProductPage() {
  const [product, setProduct] = useState<ProductI | null>(null);
  const [loading, setLoading] = useState(true);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { id } = useParams();
  const bestSellerRef = useRef<HTMLDivElement>(null);
  const { palette: { common, primary, text } } = useTheme();

  const selectImage = (imageIndex: number) => {
    setActiveImageIndex(imageIndex)
  }

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
        <React.Fragment>
          <Box marginX={{ xs: -5, sm: -6 }} paddingX={{ xs: 5, lg: 243 / 8 }} paddingY={5} sx={{ backgroundColor: '#FAFAFA' }}>
            <Stack paddingY={3} direction={'row'} justifyContent={{ xs: 'center', md: 'start' }} alignItems={'center'} spacing={15 / 8}>
              <Link underline='none' href="/" className='link' color={"text.primary"}>Home</Link>
              <Icon icon="lucide:chevron-right" width={16} height={16} color={text.disabled} />
              <Link underline='none' href="/shop" className='link' variant='h6' color={"text.disabled"}>Shop</Link>
            </Stack>
            <Grid container columns={2} spacing={30 / 8}>
              <Grid xs={2} md={1}>
                <Stack spacing={21 / 8}>
                  <Box height={450} width={'100%'} position={'relative'}>
                    <Image src={product.images[activeImageIndex]} alt={`${product.title} thumbnail`} fill sizes='100%' className='object-cover' />
                    {activeImageIndex > 0 &&
                      <Icon onClick={() => selectImage(activeImageIndex - 1)} icon="lucide:chevron-left" width={44} height={44} className="absolute cursor-pointer top-1/2 left-10 -translate-x-1/2" color={common.white} />
                    }
                    {activeImageIndex < product.images.length - 1 &&
                      <Icon onClick={() => selectImage(activeImageIndex + 1)} icon="lucide:chevron-right" width={44} height={44} className="absolute cursor-pointer top-1/2 right-0 -translate-x-1/2" color={common.white} />
                    }
                  </Box>
                  <Stack direction={'row'} width={'100%'} spacing={19 / 8} overflow={'auto'}>
                    {product.images.map((image, index) => (
                      <Box
                        key={index}
                        height={'75px'}
                        width={'100px'}
                        position={'relative'}
                        borderColor={activeImageIndex == index ? primary.main : ''}
                        className="border-2 flex-shrink-0 cursor-pointer">
                        <Image
                          fill
                          src={image}
                          sizes='100%'
                          className='object-cover'
                          alt={`${product.title} image`}
                          onClick={() => selectImage(index)}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid xs={2} md={1} padding={3} justifyContent={'space-between'}>
                <Stack spacing={{ xs: 2.5, md: 119 / 8 }}>
                  <Stack spacing={20 / 8}>
                    <Stack spacing={12 / 8}>
                      <Typography variant='h4' color={"text.primary"}>{product.title}</Typography>
                      <Stack direction={'row'} alignItems={'center'} spacing={10 / 8}>
                        <ReviewStars stars={product.rating} />
                        <Typography variant='h6' color={"text.secondary"}>10 Reviews</Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={5 / 8}>
                      <Typography variant='h3' color={"text.primary"}>{helperUtil.formatPrice(product.price)}</Typography>
                      <Stack direction={'row'} alignItems={'center'} spacing={6 / 8}>
                        <Typography variant='h6' color={"text.secondary"}>Availability:</Typography>
                        <Typography variant='h6' color={'primary.main'}>In Stock</Typography>
                      </Stack>
                      <Typography variant='body1' color={'text.secondary'}>{product.description}</Typography>
                    </Stack>
                  </Stack>
                  <Stack spacing={{ xs: 6, md: 67 / 8 }} paddingTop={29 / 8} borderTop="1px solid #BDBDBD" >
                    <Stack direction={'row'} alignItems={'center'} spacing={10 / 8}>
                      {productPage.colors.map((color, index) => (
                        <Box key={index} borderRadius={'100%'} sx={{ backgroundColor: color, cursor: 'pointer' }} height={30} width={30} />
                      ))}
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={10 / 8}>
                      <Button
                        disableRipple
                        disableElevation
                        className='transition-all capitalize'
                        sx={{ backgroundColor: `${primary.main} !important`, borderRadius: '5px', color: common.white, fontWeight: 700, fontSize: '14px', paddingX: '20px', paddingY: '10px' }}
                      >
                        Select Options
                      </Button>
                      <Box border='1px solid #E8E8E8' borderRadius={44.786} padding={10 / 8} className="cursor-pointer">
                        <Icon icon="ri:heart-line" color={text.primary} height={20} width={20} />
                      </Box>
                      <Box border='1px solid #E8E8E8' borderRadius={44.786} padding={10 / 8} className="cursor-pointer">
                        <Icon icon="ant-design:shopping-cart-outlined" color={text.primary} height={20} width={20} />
                      </Box>
                      <Box border='1px solid #E8E8E8' borderRadius={44.786} padding={10 / 8} className="cursor-pointer">
                        <Icon icon="bi:eye-fill" color={text.primary} height={20} width={20} />
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Stack display={{ xs: 'none', md: 'flex' }} paddingTop={3} paddingBottom={6} paddingX={{ lg: 195 / 8 }} spacing={10}>
            <Grid container columns={9} spacing={30 / 8} justifyContent={'space-between'}>
              <Grid xs={9} md={5}>
                <Stack spacing={30 / 8} width={'100%'} paddingRight={68 / 8}>
                  <Typography variant='h3' color={"text.primary"}>the quick brown fox</Typography>
                  <Typography variant='body1' color={"text.secondary"}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>

                  <Typography borderLeft="3px solid #23856D" paddingLeft={3} variant='body1' color={"text.secondary"}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                  <Typography variant='body1' color={"text.secondary"}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                </Stack>
              </Grid>
              <Grid xs={9} md={4} height={'100%'}>
                <Box position={'relative'} borderRadius={5.38} height={372} overflow={'hidden'}>
                  <Image src="/images/product-description-image.jpeg" alt="Review Image" fill sizes='100%' />
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </React.Fragment>
      ) : (
        <Stack sx={{ minHeight: '60vh', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '400px', textAlign: 'center' }}>
            <Typography variant='h3' color={"text.primary"} marginBottom={2}>We can't seem to find this product</Typography>
            <Typography variant='body2' color={"text.primary"}>Please check below for our available bestsellers products</Typography>
          </Box>
        </Stack>
      )}
      <Box ref={bestSellerRef} display={{ xs: 'none', md: 'block' }}>
        <BestSellerProducts titlePosition='left' columns={4} />
      </Box>
      <Grid container columns={6} spacing={{ xs: 60 / 8, md: 30 / 8 }} paddingY={50 / 8}>
        {productPage.brandLogos.map((brandLogo, index) => (
          <Grid xs={6} md={1}>
            <Box width={'100%'} height={'75px'} position={'relative'}>
              <Image src={brandLogo} alt={`brand logo ${index + 1}`} className='object-contain' fill sizes='100%' />
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}
