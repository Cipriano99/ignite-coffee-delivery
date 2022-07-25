import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Navbar } from './components/Navbar'
import { CartCoffeesProvider } from './contexts/CartCoffeesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartCoffeesProvider>
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </CartCoffeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
