const formatPrice = (price: number) => {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

const getDiscountedPrice = (price: number, discountPercentage: number) => {
  return formatPrice(price - ((price * discountPercentage) / 100))
}

const helperUtil = { formatPrice, getDiscountedPrice }

export default helperUtil;