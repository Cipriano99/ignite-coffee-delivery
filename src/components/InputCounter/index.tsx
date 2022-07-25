import { CounterContainer } from './styles'

interface InputCounterProps {
  coffeeQuantity: number
  handleManangeQuantity: (type: 'plus' | 'minus') => void
}

export const InputCounter = ({
  coffeeQuantity,
  handleManangeQuantity,
}: InputCounterProps) => {
  return (
    <CounterContainer>
      <input
        type="button"
        value="-"
        onClick={() => handleManangeQuantity('minus')}
        disabled={coffeeQuantity === 1}
      />
      <span>{coffeeQuantity}</span>
      <input
        type="button"
        value="+"
        onClick={() => handleManangeQuantity('plus')}
      />
    </CounterContainer>
  )
}
