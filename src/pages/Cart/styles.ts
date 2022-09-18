import styled, { css } from 'styled-components'

export const CartContainer = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 448px;
    column-gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
  }

  section {
    &:first-child {
      padding-top: 7rem;
    }
    padding-top: 2rem;

    h2 {
      margin-bottom: 1rem;
    }

    > div {
      background-color: ${({ theme }) => theme['base-card']};
      padding: 2.5rem;

      header {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;

        span {
          color: ${({ theme }) => theme.text.s};
        }
      }
    }

    &:first-child > div + div {
      margin-top: 0.75rem;
    }

    @media screen and (min-width: 1024px) {
      padding-top: 9rem;
    }
  }
`
