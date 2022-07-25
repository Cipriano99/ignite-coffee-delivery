import { useContext } from 'react'
import { CartCoffeesContext } from '../contexts/CartCoffeesContext'

export const useCartCoffees = () => useContext(CartCoffeesContext)
