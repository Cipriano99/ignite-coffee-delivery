import { UseFormRegister } from 'react-hook-form'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import {
  AddressContainer,
  FormContainer,
  PaymentContainer,
  PaymentMethod,
} from './styles'
import { useCartCoffees } from '../../../hooks/useCartCoffees'
import { AddressDeliveryFormType } from '..'

interface FormDeliveryProps {
  registerField: UseFormRegister<AddressDeliveryFormType>
}

export const FormDelivery = ({ registerField }: FormDeliveryProps) => {
  const { payment, selectPayment } = useCartCoffees()

  return (
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
            <input
              placeholder="CEP"
              minLength={8}
              maxLength={8}
              {...registerField('cep')}
            />
          </div>
          <div>
            <input placeholder="Rua" {...registerField('rua')} />
          </div>
          <div>
            <input placeholder="Número" {...registerField('numero')} />
            <input
              placeholder="Complemento"
              {...registerField('complemento')}
            />
          </div>
          <div>
            <input placeholder="Bairro" {...registerField('bairro')} />
            <input placeholder="Cidade" {...registerField('cidade')} />
            <input placeholder="UF" {...registerField('uf')} />
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
          <PaymentMethod
            type="button"
            isActive={payment === 'credit'}
            onClick={() => selectPayment('credit')}
          >
            <CreditCard size={24} />
            Cartão de crédito
          </PaymentMethod>

          <PaymentMethod
            type="button"
            isActive={payment === 'debit'}
            onClick={() => selectPayment('debit')}
          >
            <Bank size={24} />
            Cartão de débito
          </PaymentMethod>

          <PaymentMethod
            type="button"
            isActive={payment === 'money'}
            onClick={() => selectPayment('money')}
          >
            <Money size={24} />
            Dinheiro
          </PaymentMethod>
        </div>
      </PaymentContainer>
    </section>
  )
}
