import { createContext, ReactNode, useState } from 'react'
import { coffeesData } from '../data/coffees'

interface CoffeeData {
  name: string
  src: string
  price: number
  un: number
}

interface CartCoffeesContextData {
  cartCoffees: CoffeeData[]
  addNewCoffee: (nameCoffee: string, quantity: number) => void
}

export const CartCoffeesContext = createContext({} as CartCoffeesContextData)

export const CartCoffeesProvider = ({ children }: { children: ReactNode }) => {
  const [cartCoffees, setCartCoffees] = useState<CoffeeData[]>([])

  const addNewCoffee = (nameCoffee: string, quantity: number) => {
    const thereIsCoffee = cartCoffees.find(
      (coffee) => coffee.name === nameCoffee,
    )

    if (thereIsCoffee) {
      const newCoffees = cartCoffees.map((coffee) => {
        if (coffee.name === nameCoffee) {
          const upCount = coffee.un + quantity

          return { ...coffee, un: upCount }
        }

        return coffee
      })

      return setCartCoffees(newCoffees)
    }

    const coffeeFound: typeof coffeesData[0] | undefined = coffeesData.find(
      (coffeeData) => coffeeData.name === nameCoffee,
    )

    if (!coffeeFound) {
      return
    }

    const { name, src, price } = coffeeFound

    const newCoffees = [...cartCoffees, { name, src, price, un: quantity }]

    setCartCoffees(newCoffees)
  }

  return (
    <CartCoffeesContext.Provider value={{ cartCoffees, addNewCoffee }}>
      {children}
    </CartCoffeesContext.Provider>
  )
}
