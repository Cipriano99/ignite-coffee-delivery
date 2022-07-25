import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { DataContent, ItemContent, SuccessContainer } from './styles'
import deliveryImg from '../../assets/Illustration.png'

export const Success = () => {
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
                  Entrega em <strong>Rua João Daniel Martinelli</strong>
                </span>
                <span>102 Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
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
