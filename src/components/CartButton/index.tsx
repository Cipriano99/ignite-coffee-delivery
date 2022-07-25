import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCartCoffees } from '../../hooks/useCartCoffees'
import { CartButtonContainer } from './styles'

export const CartButton = () => {
  const { cartCoffees } = useCartCoffees()

  const totalUn = cartCoffees.reduce((prev, curr) => curr.un + prev, 0)

  return (
    <CartButtonContainer>
      <Link to="/cart">{<ShoppingCart size={24} weight="fill" />}</Link>
      <span>{totalUn ?? 0}</span>
    </CartButtonContainer>
  )
}
