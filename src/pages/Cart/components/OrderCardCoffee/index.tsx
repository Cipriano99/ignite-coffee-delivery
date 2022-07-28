import { Trash } from 'phosphor-react'
import { InputCounter } from '../../../../components/InputCounter'

import { Actions, CardContainer, OrderItem } from './styles'
import { useCartCoffees } from '../../../../hooks/useCartCoffees'

interface CoffeeData {
  name: string
  src: string
  price: number
  un: number
}

interface OrderCardCoffeeProps {
  dataCoffee: CoffeeData
}

export const OrderCardCoffee = ({ dataCoffee }: OrderCardCoffeeProps) => {
  const { addNewCoffee, removeCoffee } = useCartCoffees()

  const manangeCoffeeQuantity = (type: 'plus' | 'minus') => {
    hadnleAddCoffeeToCart(type === 'plus' ? 1 : -1)
  }

  const hadnleAddCoffeeToCart = (coffeeOperation: number) => {
    addNewCoffee(dataCoffee.name, coffeeOperation)
  }

  return (
    <CardContainer>
      <OrderItem>
        <img src={dataCoffee.src} alt="" />
        <div>
          <p>{dataCoffee.name}</p>
          <Actions>
            <InputCounter
              coffeeQuantity={dataCoffee.un}
              handleManangeQuantity={manangeCoffeeQuantity}
            />
            <button type="button" onClick={() => removeCoffee(dataCoffee.name)}>
              <Trash size={16} />
              Remover
            </button>
          </Actions>
        </div>
        <h4>R${dataCoffee.price}</h4>
      </OrderItem>
      <hr />
    </CardContainer>
  )
}
