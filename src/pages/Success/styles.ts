import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  h1 {
    font-size: ${({ theme }) => theme.title.l};
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-size: ${({ theme }) => theme.text.l};
  }

  main {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`

export const DataContent = styled.div`
  position: relative;
  padding: 1rem;
  font-size: ${({ theme }) => theme.text.m};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px 6px 36px;
    padding: 1px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.yellow},
      ${({ theme }) => theme.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    padding: 2.5rem;
  }
`

export const ItemContent = styled.div`
  display: flex;
  gap: 0.5rem;

  div:first-child {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  &:first-child div:first-child {
    background-color: ${({ theme }) => theme.purple};
  }
  &:nth-child(2) div:first-child {
    background-color: ${({ theme }) => theme.yellow};
  }
  &:last-child div:first-child {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`
