import type { NavigateFunction } from "react-router-dom";
import type { Coffee } from "../../interfaces/coffee";
import type { NewOrderFormData } from "../../pages/Cart";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_TO_CART = "REMOVE_TO_CART",
  INCREMENT_COFFEE_QUANTITY = "INCREMENT_COFFEE_QUANTITY",
  DECREMENT_COFFEE_QUANTITY = "DECREMENT_COFFEE_QUANTITY",
  CHANGE_PAYMENT_METHOD = "CHANGE_PAYMENT_METHOD",
  CHECKOUT = "CHECKOUT",
}

export interface CoffeeQuantityPayload {
  coffee: Coffee;
  quantity: number;
}

interface CoffeeIdPayload {
  coffeeId: number;
}

interface CheckoutPayload {
  order: NewOrderFormData;
  callback: NavigateFunction;
}

export interface AddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: CoffeeQuantityPayload;
}

export interface RemoveToCartAction {
  type: ActionTypes.REMOVE_TO_CART;
  payload: CoffeeIdPayload;
}

export interface IncrementCoffeeQuantityAction {
  type: ActionTypes.INCREMENT_COFFEE_QUANTITY;
  payload: CoffeeIdPayload;
}

export interface DecrementCoffeeQuantityAction {
  type: ActionTypes.DECREMENT_COFFEE_QUANTITY;
  payload: CoffeeIdPayload;
}

export interface CheckoutAction {
  type: ActionTypes.CHECKOUT;
  payload: CheckoutPayload;
}

export function addToCartAction({
  coffee,
  quantity,
}: CoffeeQuantityPayload): AddToCartAction {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffee,
      quantity,
    },
  };
}

export function removeToCartAction(coffeeId: number): RemoveToCartAction {
  return {
    type: ActionTypes.REMOVE_TO_CART,
    payload: {
      coffeeId,
    },
  };
}

export function incrementCoffeeQuantityAction(
  coffeeId: number
): IncrementCoffeeQuantityAction {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function decrementCoffeeQuantityAction(
  coffeeId: number
): DecrementCoffeeQuantityAction {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function checkoutAction(
  order: NewOrderFormData,
  callback: NavigateFunction
): CheckoutAction {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
      callback,
    },
  };
}
