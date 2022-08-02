import { createContext, ReactNode, useReducer } from 'react'
import { toast } from 'react-toastify'
import { coffeesData } from '../data/coffees'
import { AddressDeliveryFormType } from '../pages/Cart'
import {
  addCoffeeAction,
  removeCoffeeAction,
  selectAddressAction,
  selectPaymentAction,
} from '../reducers/coffee/actions'
import {
  CoffeeDataList,
  coffeeReducer,
  CoffeesData,
  CoffeesPricesData,
  PaymentType,
} from '../reducers/coffee/reducer'

interface CartCoffeesContextData {
  cartCoffees: CoffeesData[]
  cartCoffeesPrices: CoffeesPricesData
  payment: PaymentType
  address: AddressDeliveryFormType
  addNewCoffee: (nameCoffee: string, quantity: number) => void
  removeCoffee: (nameCoffee: string) => void
  selectPayment: (payment: string) => void
  selectAddress: (address: AddressDeliveryFormType) => void
}

export const CartCoffeesContext = createContext({} as CartCoffeesContextData)

export const CartCoffeesProvider = ({ children }: { children: ReactNode }) => {
  const [cartCoffeesState, dispatch] = useReducer(coffeeReducer, {
    cartCoffees: [],
    cartCoffeesPrices: {
      totalItems: 0,
      deliveryPrice: 4.5,
      totalOrder: 0,
    },
    payment: 'money',
    address: {},
  })
  const { cartCoffees, cartCoffeesPrices, payment, address } = cartCoffeesState

  const addNewCoffee = (nameCoffee: string, quantity: number) => {
    const coffeeFound: CoffeeDataList | undefined = coffeesData.find(
      (coffeeData) => coffeeData.name === nameCoffee,
    )

    if (!coffeeFound) {
      return
    }

    dispatch(addCoffeeAction(coffeeFound, quantity))
  }

  const removeCoffee = (nameCoffee: string) => {
    const hasCoffee = cartCoffees.findIndex(
      (coffee: { name: string }) => coffee.name === nameCoffee,
    )

    if (hasCoffee >= 0) {
      dispatch(removeCoffeeAction(nameCoffee))

      toast.info(
        <>
          <strong>{nameCoffee}</strong>
          <span> removido</span>
        </>,
      )
    }
  }

  const selectPayment = (payment: string) => {
    dispatch(selectPaymentAction(payment))
  }

  const selectAddress = (address: AddressDeliveryFormType) => {
    dispatch(selectAddressAction(address))
  }

  return (
    <CartCoffeesContext.Provider
      value={{
        cartCoffees,
        cartCoffeesPrices,
        payment,
        address,
        addNewCoffee,
        removeCoffee,
        selectPayment,
        selectAddress,
      }}
    >
      {children}
    </CartCoffeesContext.Provider>
  )
}
