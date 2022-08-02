import { coffeesData } from '../../data/coffees'
import { AddressDeliveryFormType } from '../../pages/Cart'
import { ActionTypes } from './actions'

export interface CoffeesData {
  name: string
  src: string
  price: number
  un: number
}

export type CoffeeDataList = typeof coffeesData[0]

export interface CoffeesPricesData {
  totalItems: number
  deliveryPrice: number
  totalOrder: number
}

export type PaymentType = 'money' | 'debit' | 'credit'

interface CartCoffeeState {
  cartCoffees: CoffeesData[]
  cartCoffeesPrices: CoffeesPricesData
  payment: PaymentType
  address: AddressDeliveryFormType
}

export function coffeeReducer(state: CartCoffeeState, action: any) {
  const selectedCoffee = action.payload.coffee
  const currentCart = state.cartCoffees

  function updateOrderPrices({
    cartCoffees,
    cartCoffeesPrices,
  }: CartCoffeeState) {
    const totalSumCoffee = cartCoffees.reduce((prev, curr) => {
      return prev + curr.price * curr.un
    }, 0)

    cartCoffeesPrices.totalItems = totalSumCoffee
    cartCoffeesPrices.totalOrder =
      totalSumCoffee + cartCoffeesPrices.deliveryPrice

    return cartCoffeesPrices
  }

  switch (action.type) {
    case ActionTypes.ADD: {
      const hasNewCoffee = currentCart.find(
        (coffee) => coffee.name === selectedCoffee.name,
      )

      const cartCoffeeList = hasNewCoffee
        ? currentCart.map((coffee) => {
            if (coffee.name === selectedCoffee.name && coffee) {
              return { ...coffee, un: coffee.un + selectedCoffee.un }
            }
            return coffee
          })
        : [...currentCart, selectedCoffee]

      const newCartCoffee = {
        ...state,
        cartCoffees: cartCoffeeList,
      }

      const newPrices = updateOrderPrices(newCartCoffee)

      return {
        ...newCartCoffee,
        cartCoffeesPrices: newPrices,
      }
    }

    case ActionTypes.REMOVE: {
      const updateCartCoffee = currentCart.filter(
        (coffee) => coffee.name !== selectedCoffee,
      )

      const newCartCoffee = { ...state, cartCoffees: updateCartCoffee }
      const newPrices = updateOrderPrices(newCartCoffee)

      return {
        ...newCartCoffee,
        cartCoffeesPrices: newPrices,
      }
    }

    case ActionTypes.PAY:
      return {
        ...state,
        payment: action.payload.payment,
      }

    case ActionTypes.DELIVERY:
      return {
        ...state,
        address: action.payload.address,
      }

    default:
      return state
  }
}
