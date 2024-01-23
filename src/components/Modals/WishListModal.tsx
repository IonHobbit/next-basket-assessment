import React from 'react'
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useAppDispatcher, useAppSelector } from '@/lib/hooks';
import { Box, Dialog, DialogContent, DialogProps, DialogTitle, Slide, Stack, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import { removeFromWishlist, selectWishlistProducts } from '@/lib/features/wishlist/wishlistSlice';
import Link from 'next/link';

type WishListModalProps = {} & DialogProps;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WishListProduct = ({ product, viewProduct }: { product: ProductI, viewProduct: () => void }) => {
  const dispatcher = useAppDispatcher();

  const handleRemove = () => {
    dispatcher(removeFromWishlist(product))
  }

  return (
    <Stack direction={'row'} alignItems='center' justifyContent={'space-between'} spacing={2} border="1px solid #BDBDBD">
      <Box width={'170px'} height={'80px'} className='relative overflow-hidden'>
        <Image src={product.thumbnail} alt={product.title} className='object-cover' fill sizes='100%' />
      </Box>
      <Stack
        direction={'row'}
        width={'100%'}
        spacing={2}
        padding={1}
        paddingRight={2}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
      >
        <Box>
          <Typography variant='body2' className='line-clamp-1 !font-bold'>{product.title}</Typography>
          <Link className='text-xs' onClick={viewProduct} href={`/product/${product.id}`}>View Product</Link>
        </Box>
        <Icon
          icon="iconamoon:heart-off"
          onClick={handleRemove}
          className='cursor-pointer'
          width={24}
          height={24}
        />
      </Stack>
    </Stack>
  )
}


export default function WishListModal({ ...props }: WishListModalProps) {
  const wishlistProducts = useAppSelector(selectWishlistProducts);

  const handleClose = () => {
    if (props.onClose) props.onClose({}, 'backdropClick');
  }

  return (
    <Dialog
      {...props}
      maxWidth='sm'
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle>
        <Typography variant='h3'>Wish List</Typography>
      </DialogTitle>
      <DialogContent>
        {wishlistProducts.length > 0 ?
          <Stack spacing={4}>
            <Stack maxHeight={400} height={'100%'} overflow={'auto'} spacing={2}>
              {wishlistProducts.map((product, index) => (
                <WishListProduct product={product} viewProduct={handleClose} />
              ))}
            </Stack>
          </Stack>
          :
          <Stack height={400} alignItems={'center'} justifyContent={'center'}>
            <Typography variant='h5'>Your wish list is empty</Typography>
            <Typography variant='body1'>Browse the store to find products you like</Typography>
          </Stack>
        }
      </DialogContent>
    </Dialog >
  )
}
