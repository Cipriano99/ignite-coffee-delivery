import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  header {
    svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`

export const FormContainer = styled.div`
  div {
    display: grid;
    column-gap: 0.75rem;

    &:nth-child(1) {
      grid-template-columns: 200px;
    }

    &:nth-child(3) {
      grid-template-columns: 1fr 3fr;

      @media screen and (min-width: 540px) {
        grid-template-columns: 200px 1fr;
      }
    }

    &:nth-child(4) {
      grid-template-columns: 6fr 6fr 2fr;

      @media screen and (min-width: 540px) {
        grid-template-columns: 200px 1fr 60px;
      }
    }

    input {
      height: 2.625rem;
      width: 100%;
      border: 0;
      border-radius: 4px;

      font-size: ${({ theme }) => theme.text.s};
      background-color: ${({ theme }) => theme['base-input']};
      border: 1px solid ${({ theme }) => theme['base-button']};

      padding: 0.75rem;
      margin-bottom: 1rem;

      &:focus {
        outline: 3px solid ${({ theme }) => theme['yellow-dark']};
      }
    }
  }
`

export const PaymentContainer = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

interface PaymentMethodProps {
  isActive: boolean
}

export const PaymentMethod = styled.button<PaymentMethodProps>`
  width: 100%;
  height: 3rem;
  font-size: ${({ theme }) => theme['text-button'].s};
  color: ${({ theme }) => theme['base-subtitle']};

  background-color: ${({ theme, isActive }) =>
    isActive ? theme['purple-light'] : theme['base-button']};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: ${({ theme, isActive }) =>
    isActive ? css`1px solid ${theme.purple} ` : 0};
  border-radius: 6px;
  padding: 1rem;

  cursor: pointer;

  &:hover {
    background: ${({ theme, isActive }) => !isActive && theme['base-hover']};
  }
`
