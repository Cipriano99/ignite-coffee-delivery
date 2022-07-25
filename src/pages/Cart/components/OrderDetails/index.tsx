import { Trash } from 'phosphor-react'
import coffeeImg from '../../../../assets/coffees/Expresso.png'
import { InputCounter } from '../../../../components/InputCounter'

import { Actions, ContentContainer, OrderItem, OrderResume } from './styles'

const coffeeOrder = [
  {
    src: coffeeImg,
    name: 'a',
    price: 9.9,
  },
  {
    src: coffeeImg,
    name: 'b',
    price: 9.9,
  },
  {
    src: coffeeImg,
    name: 'c',
    price: 9.9,
  },
  {
    src: coffeeImg,
    name: 'd',
    price: 9.9,
  },
]

export const Order = () => {
  return (
    <section>
      <h2>Cafés selecionados</h2>
      <ContentContainer>
        {coffeeOrder.map((coffee) => (
          <div key={coffee.name}>
            <OrderItem>
              <img src={coffeeImg} alt="" />
              <div>
                <p>Expresso Tradissional</p>
                <Actions>
                  <InputCounter />
                  <button>
                    <Trash size={16} />
                    Remover
                  </button>
                </Actions>
              </div>
              <h4>R$9,90</h4>
            </OrderItem>
            <hr />
          </div>
        ))}
      </ContentContainer>

      <OrderResume>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,75</span>
        </div>

        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>

        <div>
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>

        <button type="submit">Confirmar pedido</button>
      </OrderResume>
    </section>
  )
}
