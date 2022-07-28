import { useCartCoffees } from '../../../hooks/useCartCoffees'
import { getCurrencyPrice } from '../../../utils/getCurrencyPrice'
import { OrderCardCoffee } from '../components/OrderCardCoffee'

import { ContentContainer, OrderResume } from './styles'

export const Order = () => {
  const { cartCoffees } = useCartCoffees()
  const totalSumCoffee = cartCoffees.reduce((prev, curr, index, array) => {
    return prev + array[index].price * array[index].un
  }, 0)
  const deliveryValue = 4.5

  const totalItems = getCurrencyPrice(totalSumCoffee)
  const deliveryPrice = getCurrencyPrice(deliveryValue)

  const totalOrder = getCurrencyPrice(totalSumCoffee + deliveryValue)

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
          <span>{totalItems}</span>
        </div>

        <div>
          <span>Entrega</span>
          <span>{deliveryPrice}</span>
        </div>

        <div>
          <span>Total</span>
          <span>{totalOrder}</span>
        </div>

        <button type="submit">Confirmar pedido</button>
      </OrderResume>
    </section>
  )
}
