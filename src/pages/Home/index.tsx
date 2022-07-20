import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeImg from '../../assets/CoffeeImage.png'
import {
  ContentContainer,
  Header,
  HeaderContent,
  ItensContainer,
} from './styles'

export const Home = () => {
  return (
    <>
      <Header>
        <HeaderContent>
          <ContentContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ItensContainer>
              <div>
                <span>
                  <ShoppingCart size={18} weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <span>
                  <Package size={20} weight="fill" />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <span>
                  <Timer size={18} weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <span>
                  <Coffee size={20} weight="fill" />
                </span>
                <p>O café chega fresquinho até você</p>
              </div>
            </ItensContainer>
          </ContentContainer>

          <img src={coffeeImg} alt="" />
        </HeaderContent>
      </Header>
    </>
  )
}