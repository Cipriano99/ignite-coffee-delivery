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
      dataCoffee: { ...coffee, un: quantity },
    },
  }
}

export function removeCoffeeAction(nameCoffee: string) {
  return {
    type: ActionTypes.ADD,
    payload: {
      dataCoffee: nameCoffee,
    },
  }
}

export function selectPaymentAction(payment: string) {
  return {
    type: ActionTypes.PAY,
    payload: {
      dataCoffee: payment,
    },
  }
}

export function selectAddressAction(address: AddressDeliveryFormType) {
  return {
    type: ActionTypes.DELIVERY,
    payload: {
      dataCoffee: address,
    },
  }
}
