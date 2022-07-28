import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
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
  removeCoffee: (nameCoffee: string) => void
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

  const removeCoffee = (nameCoffee: string) => {
    const thereIsCoffee = cartCoffees.findIndex(
      (coffee) => coffee.name === nameCoffee,
    )

    if (thereIsCoffee >= 0) {
      const message = () => (
        <>
          <strong>{nameCoffee}</strong>
          <span> removido</span>
        </>
      )
      toast.info(message)
      setCartCoffees((prev) =>
        prev.filter((coffee) => coffee.name !== nameCoffee),
      )
    }
  }

  return (
    <CartCoffeesContext.Provider
      value={{ cartCoffees, addNewCoffee, removeCoffee }}
    >
      {children}
    </CartCoffeesContext.Provider>
  )
}
