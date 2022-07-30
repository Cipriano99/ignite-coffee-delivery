import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormDelivery } from './FormDelivery'
import { Order } from './OrderDetails'

import { CartContainer } from './styles'
import { toast } from 'react-toastify'

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

export const Cart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formCartValidationSchema),
  })

  const handleFinishOrder = (data: any) => {
    console.log(data)
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
