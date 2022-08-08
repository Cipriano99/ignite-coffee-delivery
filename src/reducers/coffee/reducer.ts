import { produce } from 'immer'

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

export interface CartCoffeeState {
  cartCoffees: CoffeesData[]
  cartCoffeesPrices: CoffeesPricesData
  payment: PaymentType
  address: AddressDeliveryFormType
}

export function coffeeReducer(state: CartCoffeeState, action: any) {
  const selectedDataCoffee = action.payload.dataCoffee
  const currentCart = state.cartCoffees

  function updateOrderPrices({
    cartCoffees,
    cartCoffeesPrices,
  }: CartCoffeeState) {
    const totalSumCoffee = cartCoffees.reduce((prev, curr) => {
      return prev + curr.price * curr.un
    }, 0)

    return produce(cartCoffeesPrices, (draft) => {
      draft.totalItems = totalSumCoffee
      draft.totalOrder = totalSumCoffee + draft.deliveryPrice
    })
  }

  switch (action.type) {
    case ActionTypes.ADD: {
      const hasNewCoffee = currentCart.findIndex(
        (coffee) => coffee.name === selectedDataCoffee.name,
      )

      const cartCoffeeList = produce(currentCart, (draft) => {
        hasNewCoffee >= 0
          ? (draft[hasNewCoffee].un += selectedDataCoffee.un)
          : draft.push(selectedDataCoffee)
      })

      const newCartCoffee = produce(state, (draft) => {
        draft.cartCoffees = cartCoffeeList
      })

      const newPrices = updateOrderPrices(newCartCoffee)

      return produce(newCartCoffee, (draft) => {
        draft.cartCoffeesPrices = newPrices
      })
    }

    case ActionTypes.REMOVE: {
      const updateCartCoffee = currentCart.filter(
        (coffee) => coffee.name !== selectedDataCoffee,
      )

      const newCartCoffee = produce(state, (draft) => {
        draft.cartCoffees = updateCartCoffee
      })

      const newPrices = updateOrderPrices(newCartCoffee)

      return produce(state, (draft) => {
        draft.cartCoffeesPrices = newPrices
      })
    }

    case ActionTypes.PAY:
      return {
        ...state,
        payment: selectedDataCoffee,
      }

    case ActionTypes.DELIVERY:
      return {
        ...state,
        address: selectedDataCoffee,
      }

    case ActionTypes.CITY_STATE:
      return {
        ...state,
        address: {
          cidade: selectedDataCoffee?.city,
          uf: selectedDataCoffee?.state,
        },
      }

    case ActionTypes.ALL_DATA:
      return {
        ...state,
        ...selectedDataCoffee,
      }

    default:
      return state
  }
}
