import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { DataContent, ItemContent, SuccessContainer } from './styles'
import deliveryImg from '../../assets/Illustration.png'
import { useCartCoffees } from '../../hooks/useCartCoffees'

export const Success = () => {
  const { address, payment } = useCartCoffees()

  const paymentMethod = {
    money: 'Dinheiro',
    debit: 'Cartão de débito',
    credit: 'Cartão de crédito',
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <main>
        <DataContent>
          <div>
            <ItemContent>
              <div>
                <MapPin size={16} weight="fill" />
              </div>
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {address.rua}, {address.numero}
                  </strong>
                </span>
                <span>
                  {address.bairro} - {address.cidade}, {address.uf}
                </span>
              </div>
            </ItemContent>

            <ItemContent>
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </ItemContent>

            <ItemContent>
              <div>
                <CurrencyDollar size={16} />
              </div>
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[payment]}</strong>
              </div>
            </ItemContent>
          </div>
        </DataContent>

        <section>
          <img src={deliveryImg} alt="" />
        </section>
      </main>
    </SuccessContainer>
  )
}
