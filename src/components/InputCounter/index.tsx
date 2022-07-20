import { CounterContainer } from './styles'

export const InputCounter = () => {
  return (
    <CounterContainer>
      <input type="button" value="-" />
      <span>1</span>
      <input type="button" value="+" />
    </CounterContainer>
  )
}
