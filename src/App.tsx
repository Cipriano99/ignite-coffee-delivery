import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { Router } from './Router'
import { Navbar } from './components/Navbar'
import { CartCoffeesProvider } from './contexts/CartCoffeesContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  )
}
