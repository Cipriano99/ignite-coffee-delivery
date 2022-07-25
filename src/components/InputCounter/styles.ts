import styled from 'styled-components'

export const CounterContainer = styled.div`
  height: 2.375rem;
  width: 4.5rem;
  background-color: ${({ theme }) => theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  input {
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.text.m};
    color: ${({ theme }) => theme.purple};
    background: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
