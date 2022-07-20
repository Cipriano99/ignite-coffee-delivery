import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.backgorund};
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.3;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1,  h2,  h3,  h4,  h5,  h6 {
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme['base-title']}
  }
  
  h1,  h2,  h3 {
    font-weight: 800;
  }
  
  
  h4,  h5 {
    font-weight: 700;
  }
`
