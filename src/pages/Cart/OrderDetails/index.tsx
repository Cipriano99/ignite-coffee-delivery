import { useCartCoffees } from '../../../hooks/useCartCoffees'
import { getCurrencyPrice } from '../../../utils/getCurrencyPrice'
import { OrderCardCoffee } from '../components/OrderCardCoffee'

import { ContentContainer, OrderResume } from './styles'

export const Order = () => {
  const {
    cartCoffees,
    cartCoffeesPrices: { totalItems, deliveryPrice, totalOrder },
  } = useCartCoffees()

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
          <span>{getCurrencyPrice(totalItems)}</span>
        </div>

        <div>
          <span>Entrega</span>
          <span>{getCurrencyPrice(deliveryPrice)}</span>
        </div>

        <div>
          <span>Total</span>
          <span>{getCurrencyPrice(totalOrder)}</span>
        </div>

        <button type="submit">Confirmar pedido</button>
      </OrderResume>
    </section>
  )
}
