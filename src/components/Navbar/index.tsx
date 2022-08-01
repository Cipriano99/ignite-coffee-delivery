import logoImg from '../../assets/coffeeLogo.svg'
import { MapPin } from 'phosphor-react'
import { NavContainer } from './styled'
import { CartButton } from '../CartButton'
import { Link } from 'react-router-dom'
import { useCartCoffees } from '../../hooks/useCartCoffees'

export const Navbar = () => {
  const { address } = useCartCoffees()

  return (
    <NavContainer>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <div>
        {address?.cep && (
          <span className="location">
            <MapPin size={24} weight="fill" />
            {address.cidade}, {address.uf}
          </span>
        )}
        <CartButton />
      </div>
    </NavContainer>
  )
}
