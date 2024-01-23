import Image from 'next/image'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import ReviewStars from '@/components/ReviewStars'
import productPage from '@/constants/productPage.constants'
import { useAppDispatcher, useAppSelector } from '@/lib/hooks'
import { addToCart, selectCartItems } from '@/lib/features/cart/cartSlice'
import { addToWishlist, selectWishlistProducts } from '@/lib/features/wishlist/wishlistSlice'
import notificationUtil from '@/utils/notification.util'
import helperUtil from '@/utils/helper.util';
import BreadCrumbs from './BreadCrumbs';

type ProductDetailProps = {
  product: ProductI;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const cartItems = useAppSelector(selectCartItems);
  const wishlistProducts = useAppSelector(selectWishlistProducts);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const dispatcher = useAppDispatcher();
  const { palette: { common, primary, text } } = useTheme();


  const isProductInCart = cartItems.find((cartItem: CartItemI) => cartItem.product.id == product?.id)
  const isProductInWishlist = wishlistProducts.find((wishlistProduct: ProductI) => wishlistProduct.id == product?.id)

  const selectImage = (imageIndex: number) => {
    setActiveImageIndex(imageIndex)
  }

  const addToCartHandler = () => {
    if (!product) return
    if (isProductInCart) return
    dispatcher(addToCart({ product, quantity: 1 }))
    notificationUtil.success(`${product.title} added to cart`)
  }

  const addToWishlistHandler = () => {
    if (!product) return
    if (isProductInWishlist) return
    dispatcher(addToWishlist(product))
    notificationUtil.success(`${product.title} added to wishlist`)
  }

  return (
    <React.Fragment>
      <Box marginX={{ xs: -5, sm: -6 }} paddingX={{ xs: 5, lg: 243 / 8 }} paddingY={5} sx={{ backgroundColor: '#FAFAFA' }}>
        <BreadCrumbs />
        <Grid container columns={2} spacing={3.75}>
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
                <Stack spacing={0.625}>
                  <Typography variant='h3' color={"text.primary"}>{helperUtil.formatPrice(helperUtil.getDiscountedPrice(product.price, product.discountPercentage))}</Typography>
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
                  <Box
                    padding={10 / 8}
                    borderRadius={44.786}
                    border='1px solid #E8E8E8'
                    onClick={addToWishlistHandler}
                    sx={{ cursor: isProductInWishlist ? 'not-allowed' : 'pointer' }}
                  >
                    <Icon icon="ri:heart-line" color={isProductInWishlist ? text.disabled : text.primary} height={20} width={20} />
                  </Box>
                  <Box
                    padding={10 / 8}
                    borderRadius={44.786}
                    onClick={addToCartHandler}
                    border='1px solid #E8E8E8'
                    sx={{ cursor: isProductInCart ? 'not-allowed' : 'pointer' }}
                  >
                    <Icon icon="ant-design:shopping-cart-outlined" color={isProductInCart ? text.disabled : text.primary} height={20} width={20} />
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
        <Stack spacing={17 / 8}>
          <Stack direction={'row'} justifyContent={'center'} borderBottom="1px solid #ECECEC" >
            <Typography className='link cursor-pointer' color={"text.secondary"} padding={3}>Description</Typography>
            <Typography className='link cursor-pointer' color={"text.secondary"} padding={3}>Additional Information</Typography>
            <Typography className='link cursor-pointer' color={"text.secondary"} padding={3}>Reviews (0)</Typography>
          </Stack>
          <Grid container columns={9} spacing={3.75} justifyContent={'space-between'}>
            <Grid xs={9} md={5}>
              <Stack spacing={3.75} width={'100%'} paddingRight={68 / 8}>
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
      </Stack>
    </React.Fragment>
  )
}
