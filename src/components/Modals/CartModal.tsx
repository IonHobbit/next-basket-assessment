import React from 'react'
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartItems, selectCartTotal } from '@/lib/features/cart/cartSlice';
import { useAppDispatcher, useAppSelector } from '@/lib/hooks';
import helperUtil from '@/utils/helper.util';
import { Box, Button, Dialog, DialogContent, DialogProps, DialogTitle, Slide, Stack, Typography, useTheme } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';

type CartModalProps = {} & DialogProps;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CartItem = ({ cartItem }: { cartItem: CartItemI }) => {
  const dispatcher = useAppDispatcher();

  const { product, quantity } = cartItem
  const total = helperUtil.getDiscountedPrice(product.price, product.discountPercentage) * quantity;

  const handleIncrement = () => {
    dispatcher(increaseQuantity(cartItem))
  }

  const handleDecrement = () => {
    if (quantity == 1) return;
    dispatcher(decreaseQuantity(cartItem))
  }

  const handleRemove = () => {
    dispatcher(removeFromCart(cartItem))
  }

  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <Image src={product.thumbnail} alt={product.title} className=' object-cover' width={100} height={100} />
      <Stack direction={{ md: 'row' }} width={'100%'} spacing={2} alignItems={{ md: 'flex-end' }} justifyContent={'space-between'}>
        <Stack spacing={2}>
          <Typography variant='h6'>{product.title}</Typography>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Button disableRipple disableElevation variant='outlined' onClick={handleDecrement} disabled={quantity == 1}>
              <Icon icon="gravity-ui:minus" />
            </Button>
            <Typography color='text.secondary' className='select-none'>{quantity}</Typography>
            <Button disableRipple disableElevation variant='outlined' onClick={handleIncrement}>
              <Icon icon="gravity-ui:plus" />
            </Button>
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'row-reverse', md: 'column' }} justifyContent={'space-between'} marginTop={{ xs: 2, md: 0 }} alignItems={{ md: 'flex-end' }} spacing={2}>
          <Typography variant='h5' className='select-none'>{helperUtil.formatPrice(total)}</Typography>
          <Button
            disableRipple
            disableElevation
            variant='contained'
            sx={{ width: 'max-content', color: 'common.white', borderColor: 'error.main', backgroundColor: 'error.main', '&:hover': { backgroundColor: 'error.dark' } }}
            onClick={handleRemove}>
            <Icon icon="gravity-ui:trash-bin" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}


export default function CartModal({ ...props }: CartModalProps) {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  const { palette: { primary, common } } = useTheme();

  return (
    <Dialog
      {...props}
      maxWidth='sm'
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle>
        <Typography variant='h3'>Cart</Typography>
      </DialogTitle>
      <DialogContent>
        {cartItems.length > 0 ?
          <Stack spacing={4}>
            <Stack maxHeight={400} height={'100%'} overflow={'auto'} spacing={2}>
              {cartItems.map((cartItem: CartItemI, index) => (
                <CartItem key={index} cartItem={cartItem} />
              ))}
            </Stack>
            <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'flex-end'} spacing={2}>
              <Box>
                <Typography textAlign={'right'} variant='body1' color='text.primary' className='select-none'>Total</Typography>
                <Typography textAlign={'right'} variant='h3' color='text.primary' className='select-none'>{helperUtil.formatPrice(cartTotal)}</Typography>
              </Box>
              <Button disableElevation disableRipple sx={{ height: 'max-content', fontWeight: 700, backgroundColor: primary.main, color: common.white }} variant='contained'>Checkout</Button>
            </Stack>
          </Stack>
          :
          <Stack height={400} alignItems={'center'} justifyContent={'center'}>
            <Typography variant='h5'>Your cart is empty</Typography>
            <Typography variant='body1'>Browse the store to purchase products</Typography>
          </Stack>
        }
      </DialogContent>
    </Dialog>
  )
}
