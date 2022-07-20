import { Actions, CardContainer, Price, Tag } from './styles'
import coffeeImg from '../../assets/coffees/Capuccino.png'
import { ShoppingCartSimple } from 'phosphor-react'

interface CoffeeData {
  name: string
  tag: string[]
  description: string
  src: string
  price: number
}
interface MenuCardCoffeeProps {
  dataCoffee: CoffeeData
}

export const MenuCardCoffee = ({ dataCoffee }: MenuCardCoffeeProps) => {
  const { name, tag, description, src, price } = dataCoffee

  return (
    <CardContainer>
      <img src={src} alt="" />
      <Tag>
        {tag.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Tag>
      <h3>{name}</h3>
      <p>{description}</p>

      <div>
        <Price>
          <span>R$</span>
          <h4>{price}</h4>
        </Price>

        <Actions>
          <div>
            <input type="button" value="-" />
            <span>1</span>
            <input type="button" value="+" />
          </div>

          <button type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Actions>
      </div>
    </CardContainer>
  )
}
