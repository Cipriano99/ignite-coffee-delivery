import styled from 'styled-components'
import blurImg from '../../assets/blur-background.png'

export const Header = styled.header`
  width: 100%;
  padding: 5.75rem 0;
  background-image: url(${blurImg});
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  img {
    width: 478px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.title.xl};
  }

  p {
    font-size: ${({ theme }) => theme.text.l};
  }
`

export const ItensContainer = styled.div`
  margin-top: 3.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 1.25rem;

  div {
    height: 2.75rem;
    display: flex;
    align-items: center;
    gap: 0.875rem;

    p {
      font-size: ${({ theme }) => theme.text.m};
      flex: 1;
    }

    span {
      height: 2.75rem;
      width: 2.75rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.white};
      border-radius: 99px;
    }

    &:first-child span {
      background-color: ${({ theme }) => theme['yellow-dark']};
    }
    &:nth-child(2) span {
      background-color: ${({ theme }) => theme['base-text']};
    }
    &:nth-child(3) span {
      background-color: ${({ theme }) => theme.yellow};
    }
    &:nth-child(4) span {
      background-color: ${({ theme }) => theme.purple};
    }
  }
`
