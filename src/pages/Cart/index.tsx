import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react'
import {
  Actions,
  AddressContainer,
  CartContainer,
  FormContainer,
  OrderContainer,
  OrderItem,
  OrderResume,
  PaymentContainer,
  PaymentMethod,
} from './styles'

import coffeeImg from '../../assets/coffees/Expresso.png'
import { InputCounter } from '../../components/InputCounter'

const coffeeOrder = [
  {
    src: coffeeImg,
    name: '',
    price: 9.9,
  },
  {
    src: coffeeImg,
    name: '',
    price: 9.9,
  },
  {
    src: coffeeImg,
    name: '',
    price: 9.9,
  },
  {
    src: coffeeImg,
    name: '',
    price: 9.9,
  },
]

export const Cart = () => {
  return (
    <CartContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <header>
            <MapPinLine size={24} />
            <div>
              <p>Endereço para entrega </p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </header>

          <FormContainer>
            <div>
              <input type="text" placeholder="CEP" />
            </div>
            <div>
              <input type="text" placeholder="Rua" />
            </div>
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </FormContainer>
        </AddressContainer>

        <PaymentContainer>
          <header>
            <CurrencyDollar size={24} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </header>

          <div>
            <PaymentMethod type="button" isActive={false}>
              <CreditCard size={24} />
              Cartão de crédito
            </PaymentMethod>

            <PaymentMethod type="button" isActive={true}>
              <Bank size={24} />
              Cartão de débito
            </PaymentMethod>

            <PaymentMethod type="button" isActive={false}>
              <Money size={24} />
              Dinheiro
            </PaymentMethod>
          </div>
        </PaymentContainer>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <OrderContainer>
          {coffeeOrder.map((coffee) => (
            <div key={coffee.name}>
              <OrderItem>
                <img src={coffeeImg} alt="" />
                <div>
                  <p>Expresso Tradissional</p>
                  <Actions>
                    <InputCounter />
                    <button>
                      <Trash size={16} />
                      Remover
                    </button>
                  </Actions>
                </div>
                <h4>R$9,90</h4>
              </OrderItem>
              <hr />
            </div>
          ))}
        </OrderContainer>

        <OrderResume>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,75</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>

          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </OrderResume>
      </section>
    </CartContainer>
  )
}
