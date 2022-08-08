import { AddressDeliveryFormType } from '../../pages/Cart'
import { CartCoffeeState, CoffeeDataList } from './reducer'

export enum ActionTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  PAY = 'PAY',
  DELIVERY = 'DELIVERY',
  CITY_STATE = 'CITY_STATE',
  ALL_DATA = 'ALL_DATA',
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
    type: ActionTypes.REMOVE,
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

export function setCityAndStateAction(city: string, state: string) {
  return {
    type: ActionTypes.CITY_STATE,
    payload: {
      dataCoffee: { city, state },
    },
  }
}

export function setAllExistUserDataAction(allData: CartCoffeeState) {
  return {
    type: ActionTypes.ALL_DATA,
    payload: {
      dataCoffee: allData,
    },
  }
}
