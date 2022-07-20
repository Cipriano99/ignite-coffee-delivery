import styled, { css } from 'styled-components'

export const CartContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 448px;
  column-gap: 2rem;

  section {
    h2 {
      margin-bottom: 1rem;
    }

    > div {
      background-color: ${({ theme }) => theme['base-card']};
      padding: 2.5rem;

      & + div {
        margin-top: 0.75rem;
      }

      header {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;

        span {
          color: ${({ theme }) => theme.text.s};
        }
      }
    }
  }
`

export const AddressContainer = styled.div`
  header {
    svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`

export const FormContainer = styled.form`
  div {
    display: grid;
    column-gap: 0.75rem;

    &:nth-child(1) {
      grid-template-columns: 200px;
    }

    &:nth-child(3) {
      grid-template-columns: 200px 1fr;
    }

    &:nth-child(4) {
      grid-template-columns: 200px 1fr 60px;
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
