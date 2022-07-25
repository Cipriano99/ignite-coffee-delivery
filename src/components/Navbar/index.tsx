import logoImg from '../../assets/coffeeLogo.svg'
import { MapPin } from 'phosphor-react'
import { NavContainer } from './styled'
import { CartButton } from '../CartButton'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavContainer>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <div>
        <span className="location">
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </span>
        <CartButton />
      </div>
    </NavContainer>
  )
}
