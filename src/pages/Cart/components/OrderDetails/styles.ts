import styled, { css } from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding-bottom: 0 !important;

  hr {
    border: 1px solid ${({ theme }) => theme['base-button']};
    margin: 1.5rem 0;
  }
`

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
export const OrderResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 0 !important;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: ${({ theme }) => theme.text.s};

      & + span {
        font-size: ${({ theme }) => theme.text.m};
      }
    }

    &:last-child {
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};

      span {
        font-size: ${({ theme }) => theme.text.l};
      }
    }
  }

  button {
    padding: 0.75rem;
    margin-top: 1.5rem;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme['text-button'].g};
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};
    border-radius: 6px;
    border: 0;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`
