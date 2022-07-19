import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

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
`