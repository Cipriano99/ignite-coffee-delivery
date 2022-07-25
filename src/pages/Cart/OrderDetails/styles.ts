import styled, { css } from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding-bottom: 0 !important;

  h3 {
    margin-bottom: 1.5rem;
  }

  hr {
    border: 1px solid ${({ theme }) => theme['base-button']};
    margin: 1.5rem 0;
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
