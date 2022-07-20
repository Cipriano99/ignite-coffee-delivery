import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import {
  AddressContainer,
  CartContainer,
  FormContainer,
  PaymentContainer,
  PaymentMethod,
} from './styles'

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
        <div>
          <h3>CAFÉS</h3>
        </div>
      </section>
    </CartContainer>
  )
}
