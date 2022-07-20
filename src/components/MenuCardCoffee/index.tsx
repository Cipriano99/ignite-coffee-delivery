import { Actions, CardContainer, Price, Tag } from './styles'
import coffeeImg from '../../assets/coffees/Capuccino.png'
import { ShoppingCartSimple } from 'phosphor-react'

export const MenuCardCoffee = () => {
  return (
    <CardContainer>
      <img src={coffeeImg} alt="" />
      <Tag>Tradicional</Tag>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <Price>
          <span>R$</span>
          <h4>9,90</h4>
        </Price>

        <Actions>
          <div>
            <input type="button" value="-" />
            <span>0</span>
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
