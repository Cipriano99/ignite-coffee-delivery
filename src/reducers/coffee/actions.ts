import { AddressDeliveryFormType } from '../../pages/Cart'
import { CoffeeDataList } from './reducer'

export enum ActionTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  PAY = 'PAY',
  DELIVERY = 'DELIVERY',
}

export function addCoffeeAction(coffee: CoffeeDataList, quantity: number) {
  return {
    type: ActionTypes.ADD,
    payload: {
      coffee: { ...coffee, un: quantity },
    },
  }
}

export function removeCoffeeAction(nameCoffee: string) {
  return {
    type: ActionTypes.ADD,
    payload: {
      coffee: nameCoffee,
    },
  }
}

export function selectPaymentAction(payment: string) {
  return {
    type: ActionTypes.PAY,
    payload: {
      payment,
    },
  }
}

export function selectAddressAction(address: AddressDeliveryFormType) {
  return {
    type: ActionTypes.PAY,
    payload: {
      address,
    },
  }
}
