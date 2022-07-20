import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;

  background-color: ${({ theme }) => theme['base-card']};

  img {
    width: 7.5rem;
    margin-top: -2.375rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.title.s};
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.text.s};
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Tag = styled.span`
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.tag};
    font-weight: 700;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 100px;

    & + span {
      margin-left: 0.25rem;
    }
  }
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: ${({ theme }) => theme.text.s};
  }

  h4 {
    font-size: ${({ theme }) => theme.title.m};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
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
    }
  }

  button {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['purple-dark']};
    color: ${({ theme }) => theme.white};
    border: 0;

    &:hover {
      background-color: ${({ theme }) => theme.purple};
    }
  }
`
