import styled from 'styled-components'
import blurImg from '../../assets/blur-background.png'

export const Header = styled.header`
  width: 100%;
  padding: 5.75rem 0;
  background-image: url(${blurImg});
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 3.5rem;
  padding: 5.875rem 2rem;

  img {
    width: 320px;
  }

  @media screen and (min-width: 1024px) {
    padding: 5.875rem 10rem;
    flex-direction: row;

    img {
      width: 478px;
    }
  }
`

export const ContentHeader = styled.div`
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
  grid-template-columns: 1fr;
  row-gap: 1.25rem;
  column-gap: 1.25rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

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

export const ContentContainer = styled.main`
  padding: 2rem 01rem;

  h2 {
    margin-bottom: 3.375rem;
  }

  > div {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    padding: 1.5rem 4rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 2rem 10rem;
  }
`
