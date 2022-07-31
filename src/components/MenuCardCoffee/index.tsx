import { Actions, CardContainer, Price, Tag } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { InputCounter } from '../InputCounter'
import { useCartCoffees } from '../../hooks/useCartCoffees'
import { useState } from 'react'
import { getCurrencyPrice } from '../../utils/getCurrencyPrice'
import { toast } from 'react-toastify'

interface CoffeeData {
  name: string
  tag: string[]
  description: string
  src: string
  price: number
}

interface MenuCardCoffeeProps {
  dataCoffee: CoffeeData
}

export const MenuCardCoffee = ({ dataCoffee }: MenuCardCoffeeProps) => {
  const { name, tag, description, src, price: hardPrice } = dataCoffee
  const price = getCurrencyPrice(hardPrice)

  const { addNewCoffee } = useCartCoffees()
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  const manangeCoffeeQuantity = (type: 'plus' | 'minus') => {
    type === 'plus'
      ? setCoffeeQuantity((prev) => (prev += 1))
      : setCoffeeQuantity((prev) => (prev -= 1))
  }

  const hadnleAddCoffeeToCart = () => {
    addNewCoffee(name, coffeeQuantity)
    setCoffeeQuantity(1)
    toast.success(
      <>
        <strong>{name}</strong>
        <span> foi adicionado.</span>
      </>,
    )
  }

  return (
    <CardContainer>
      <img src={src} alt="" />
      <Tag>
        {tag.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Tag>
      <h3>{name}</h3>
      <p>{description}</p>

      <div>
        <Price>
          <span>R$</span>
          <h4>{price.slice(3)}</h4>
        </Price>

        <Actions>
          <InputCounter
            coffeeQuantity={coffeeQuantity}
            handleManangeQuantity={manangeCoffeeQuantity}
          />

          <button type="button" onClick={hadnleAddCoffeeToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Actions>
      </div>
    </CardContainer>
  )
}
