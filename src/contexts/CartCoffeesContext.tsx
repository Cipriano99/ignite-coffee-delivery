import { createContext, ReactNode, useReducer } from 'react'
import { toast } from 'react-toastify'
import { coffeesData } from '../data/coffees'
import { AddressDeliveryFormType } from '../pages/Cart'

interface CoffeesData {
  name: string
  src: string
  price: number
  un: number
}

interface CoffeesPricesData {
  totalItems: number
  deliveryPrice: number
  totalOrder: number
}

type PaymentType = 'money' | 'debit' | 'credit'

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

interface CartCoffeeState {
  cartCoffees: CoffeesData[]
  cartCoffeesPrices: CoffeesPricesData
  payment: PaymentType
  address: AddressDeliveryFormType
}

export const CartCoffeesContext = createContext({} as CartCoffeesContextData)

export const CartCoffeesProvider = ({ children }: { children: ReactNode }) => {
  const [cartCoffeesState, dispatch] = useReducer(
    (state: CartCoffeeState, action: any) => {
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

      if (action.type === 'ADD') {
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

      if (action.type === 'REMOVE') {
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

      if (action.type === 'PAY') {
        return {
          ...state,
          payment: action.payload.payment,
        }
      }

      if (action.type === 'DELIVERY') {
        return {
          ...state,
          address: action.payload.address,
        }
      }

      return state
    },
    {
      cartCoffees: [],
      cartCoffeesPrices: {
        totalItems: 0,
        deliveryPrice: 4.5,
        totalOrder: 0,
      },
      payment: 'money',
      address: {},
    },
  )
  const { cartCoffees, cartCoffeesPrices, payment, address } = cartCoffeesState

  const addNewCoffee = (nameCoffee: string, quantity: number) => {
    const coffeeFound: typeof coffeesData[0] | undefined = coffeesData.find(
      (coffeeData) => coffeeData.name === nameCoffee,
    )

    if (!coffeeFound) {
      return
    }

    dispatch({
      type: 'ADD',
      payload: {
        coffee: { ...coffeeFound, un: quantity },
      },
    })
  }

  const removeCoffee = (nameCoffee: string) => {
    const hasCoffee = cartCoffees.findIndex(
      (coffee: { name: string }) => coffee.name === nameCoffee,
    )

    if (hasCoffee >= 0) {
      dispatch({
        type: 'REMOVE',
        payload: {
          coffee: nameCoffee,
        },
      })

      toast.info(
        <>
          <strong>{nameCoffee}</strong>
          <span> removido</span>
        </>,
      )
    }
  }

  const selectPayment = (payment: string) => {
    dispatch({
      type: 'PAY',
      payload: {
        payment,
      },
    })
  }

  const selectAddress = (address: AddressDeliveryFormType) => {
    dispatch({
      type: 'DELIVERY',
      payload: {
        address,
      },
    })
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
