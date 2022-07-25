import { useCartCoffees } from '../../../hooks/useCartCoffees'
import { OrderCardCoffee } from '../components/OrderCardCoffee'

import { ContentContainer, OrderResume } from './styles'

export const Order = () => {
  const { cartCoffees, addNewCoffee } = useCartCoffees()

  return (
    <section>
      <h2>Cafés selecionados</h2>
      <ContentContainer>
        {!cartCoffees.length ? (
          <h3>Lista vazia, monte seu pedido!</h3>
        ) : (
          cartCoffees.map((coffee) => (
            <OrderCardCoffee key={coffee.name} dataCoffee={coffee} />
          ))
        )}
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
