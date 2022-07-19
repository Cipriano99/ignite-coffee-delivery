import logoImg from '../../assets/coffeeLogo.svg'
import { MapPin } from 'phosphor-react'
import { NavContainer } from './styled'
import { CartButton } from '../CartButton'

export const Navbar = () => {
  return (
    <NavContainer>
      <a href="/">
        <img src={logoImg} alt="" />
      </a>

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
