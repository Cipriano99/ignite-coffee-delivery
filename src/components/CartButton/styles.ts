import styled from 'styled-components'

export const CartButtonContainer = styled.div`
  height: 2.375rem;
  width: 2.375rem;
  background-color: ${({ theme }) => theme['yellow-light']};
  border-radius: 6px;

  position: relative;

  padding: 0.5rem;

  a {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  span {
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    border-radius: 50%;

    position: absolute;
    right: -0.75rem;
    top: -0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
