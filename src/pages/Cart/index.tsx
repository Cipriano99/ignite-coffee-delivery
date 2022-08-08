import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'

import { FormDelivery } from './FormDelivery'
import { Order } from './OrderDetails'

import { CartContainer } from './styles'
import { toast } from 'react-toastify'
import { useCartCoffees } from '../../hooks/useCartCoffees'

const formCartValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP corretamente'),
  bairro: zod.string().min(1, 'Informe o seu bairro'),
  cidade: zod.string().min(1, 'Informe a sua cidade'),
  complemento: zod.string(),
  numero: zod.string().min(1, 'Informe a identificação da entrega'),
  rua: zod.string().min(1, 'Informe a sua rua'),
  uf: zod
    .string()
    .min(1, 'Informe o seu estado')
    .max(2, 'Informe somente a sigla'),
})

export type AddressDeliveryFormType = zod.infer<typeof formCartValidationSchema>

export const Cart = () => {
  const navigate = useNavigate()
  const { payment, address, selectAddress } = useCartCoffees()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressDeliveryFormType>({
    resolver: zodResolver(formCartValidationSchema),
    defaultValues: {
      cep: address?.cep,
      rua: address?.rua,
      numero: address?.numero,
      complemento: address?.complemento,
      bairro: address?.bairro,
      cidade: address?.cidade,
      uf: address?.uf,
    },
  })

  function handleFinishOrder(data: AddressDeliveryFormType) {
    selectAddress(data)

    localStorage.setItem(
      '@coffee-delivery:user-data-0.0.1',
      JSON.stringify({
        payment,
        address: data,
      }),
    )

    navigate('/success')
  }

  Object.values(errors)
    .map((error) => error)
    .map((error) => toast.warn(`${error?.message}`))

  return (
    <CartContainer onSubmit={handleSubmit(handleFinishOrder)}>
      <FormDelivery registerField={register} />
      <Order />
    </CartContainer>
  )
}
