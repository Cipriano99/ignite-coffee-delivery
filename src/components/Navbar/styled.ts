import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  position: fixed;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgorund};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  img {
    height: 2.5rem;
  }

  div {
    display: flex;
    gap: 0.75rem;

    .location {
      background-color: ${({ theme }) => theme['purple-light']};
      color: ${({ theme }) => theme['purple-dark']};

      font-size: 0.875rem;

      border-radius: 6px;
      padding: 8px;

      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`
