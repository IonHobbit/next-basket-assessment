'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import landingPage from '@/constants/landingPage.constant';
import { Container, Stack, Typography, useTheme } from '@mui/material'
import CartModal from './Modals/CartModal';
import { useAppSelector } from '@/lib/hooks';
import { selectCartQuantity } from '@/lib/features/cart/cartSlice';
import { selectWishListQuantity } from '@/lib/features/wishlist/wishlistSlice';
import WishListModal from './Modals/WishListModal';

type ActionItemsProps = {
  className?: string;
  closeMenu: () => void;
  openCart: () => void;
  openWishlist: () => void;
}

const ActionItems = ({ className, closeMenu, openCart, openWishlist }: ActionItemsProps) => {
  const cartQuantity = useAppSelector(selectCartQuantity);
  const wishlistQuantity = useAppSelector(selectWishListQuantity);

  const { palette: { primary } } = useTheme();

  const handleCartClick = () => {
    openCart();
    closeMenu();
  }

  const handleWishlistClick = () => {
    openWishlist();
    closeMenu();
  }

  return (
    <React.Fragment>
      <Stack direction={{ xs: 'column', md: "row" }} alignItems={"center"} spacing={3.75} className={className}>
        <Stack direction={"row"} alignItems={"center"} spacing={0.625}>
          <Icon color={primary.main} icon="lets-icons:user-alt-light" className='text-[28px] md:text-base' />
          <Link className='link no-underline !text-[30px] md:!text-sm' href={'/auth'} style={{ color: primary.main }}>
            Login/Register
          </Link>
        </Stack>
        <Icon color={primary.main} icon="bi:search" className='text-[34px] md:text-base' />
        <Stack className='cursor-pointer' direction={"row"} alignItems={"center"} spacing={0.625} onClick={handleCartClick}>
          <Icon color={primary.main} icon="bi:cart" className='text-[34px] md:text-base' />
          <Typography variant='body2' color={primary.main}>{cartQuantity}</Typography>
        </Stack>
        <Stack className='cursor-pointer' direction={"row"} alignItems={"center"} spacing={0.625} onClick={handleWishlistClick}>
          <Icon color={primary.main} icon="mynaui:heart" className='text-[34px] md:text-base' />
          <Typography variant='body2' color={primary.main}>{wishlistQuantity}</Typography>
        </Stack>
      </Stack>
    </React.Fragment>
  )
}

export default function Header() {
  const { palette: { text, common } } = useTheme();
  const [isOpened, setIsOpened] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isWishlistOpened, setIsWishlistOpened] = useState(false);

  const toggleMenu = () => setIsOpened(!isOpened);
  const closeMenu = () => setIsOpened(false);
  const openCart = () => setIsCartOpened(true);
  const openWishlist = () => setIsWishlistOpened(true);

  return (
    <Container maxWidth={false} sx={{ padding: { xs: 0, sm: 2 }, backgroundColor: '#FFF' }}>
      <Stack maxWidth={"xl"} margin={'auto'} direction={"row"} justifyContent={"space-between"} paddingY={2.5} paddingX={4}>
        <Stack direction={"row"} alignItems={"center"} spacing={120 / 8}>
          <Link className='no-underline text-2xl font-bold tracking-[0.1px]' href={`/`} style={{ color: text.primary }}>
            Bandage
          </Link>
          <Stack direction={"row"} alignItems={"center"} spacing={15 / 8} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {landingPage.navigationLinks.map((navigationLink, index) => (
              <Link key={index} className='link no-underline' href={navigationLink.url} color={text.secondary}>
                {navigationLink.name}
              </Link>
            ))}
          </Stack>
        </Stack>

        <ActionItems openCart={openCart} openWishlist={openWishlist} closeMenu={closeMenu} className='!hidden md:!flex' />

        {/* Mobile Options */}
        <Stack direction={"row"} alignItems={"center"} spacing={3.75} sx={{ display: { md: 'none' } }}>
          <Icon onClick={toggleMenu} width={24} className='cursor-pointer' color={text.primary} icon="tabler:menu-deep" />
        </Stack>
      </Stack>

      {/* Mobile Menu */}
      {isOpened &&
        <Stack
          width={'100%'}
          spacing={3.75}
          className='md:hidden'
          alignItems={"center"}
          justifyContent={"space-around"}
          sx={{ backgroundColor: common.white, paddingX: 18.25, paddingY: 12.25 }}>
          {landingPage.navigationLinks.map((navigationLink, index) => (
            <Link key={index} className='mobile-menu-item no-underline' href={navigationLink.url} color={text.secondary}>
              {navigationLink.name}
            </Link>
          ))}
          <ActionItems openCart={openCart} openWishlist={openWishlist} closeMenu={closeMenu} className='md:!hidden' />
        </Stack>
      }

      <CartModal open={isCartOpened} onClose={() => setIsCartOpened(false)} />
      <WishListModal open={isWishlistOpened} onClose={() => setIsWishlistOpened(false)} />
    </Container>
  )
}
