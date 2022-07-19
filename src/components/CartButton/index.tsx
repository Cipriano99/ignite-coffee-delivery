import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer } from './styles'

export const CartButton = () => {
  return (
    <CartButtonContainer>
      <a href="/cart">{<ShoppingCart size={24} weight="fill" />}</a>
      <span>2</span>
    </CartButtonContainer>
  )
}
