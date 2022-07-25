import styled from 'styled-components'

export const CardContainer = styled.div``

export const OrderItem = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  h4 {
    font-size: ${({ theme }) => theme.text.m};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    height: 2rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    height: 2rem;

    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    font-size: ${({ theme }) => theme['text-button'].s};
    text-transform: uppercase;

    padding: 0.5rem;
    border: 0;
    border-radius: 6px;

    border-bottom: 1px solid ${({ theme }) => theme['base-button']};

    svg {
      color: ${({ theme }) => theme.purple};
    }

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
      color: ${({ theme }) => theme['base-subtitle']};
      cursor: pointer;

      svg {
        color: ${({ theme }) => theme['purple-dark']};
      }
    }
  }
`
