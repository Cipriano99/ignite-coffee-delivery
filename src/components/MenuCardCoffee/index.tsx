import { CardContainer, Tag } from './styles'
import coffeeImg from '../../assets/coffees/Capuccino.png'

export const MenuCardCoffee = () => {
  return (
    <CardContainer>
      <img src={coffeeImg} alt="" />
      <Tag>Tradicional</Tag>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <span>R$</span>
        <h4>9,90</h4>
      </div>
    </CardContainer>
  )
}
