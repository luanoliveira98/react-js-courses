import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { orderReducer } from "../reducers/order/reducer";
import {
  addToCartAction,
  checkoutAction,
  decrementCoffeeQuantityAction,
  incrementCoffeeQuantityAction,
  removeToCartAction,
  type CoffeeQuantityPayload,
} from "../reducers/order/actions";
import type { Cart } from "../interfaces/cart";
import { useNavigate } from "react-router-dom";
import type { NewOrderFormData } from "../pages/Cart";

interface OrderContextType {
  cart: Cart;
  order: NewOrderFormData;
  addToCart: (data: CoffeeQuantityPayload) => void;
  removeToCart: (coffeeId: number) => void;
  decrementCoffeeQuantity: (coffeeId: number) => void;
  incrementCoffeeQuantity: (coffeeId: number) => void;
  checkout: (order: NewOrderFormData) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

const totalDeliveryInCents = 320;

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
      cart: {
        coffees: [],
        totalItemsInCents: 0,
        totalDeliveryInCents,
        totalPriceInCents: 320,
      },
      order: {},
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem(
        "@coffee-delivery:order-state-1.0.0"
      );

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON);
      }

      return initialState;
    }
  );

  const { cart, order } = orderState;

  const navigate = useNavigate();

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState);

    localStorage.setItem("@delivery-coffee:order-state-1.0.0", stateJSON);
  }, [orderState]);

  function addToCart(data: CoffeeQuantityPayload) {
    dispatch(addToCartAction(data));
  }

  function removeToCart(coffeeId: number) {
    dispatch(removeToCartAction(coffeeId));
  }

  function incrementCoffeeQuantity(coffeeId: number) {
    dispatch(incrementCoffeeQuantityAction(coffeeId));
  }

  function decrementCoffeeQuantity(coffeeId: number) {
    dispatch(decrementCoffeeQuantityAction(coffeeId));
  }

  function checkout(order: NewOrderFormData) {
    checkoutAction(order, navigate);
  }

  return (
    <OrderContext.Provider
      value={{
        cart,
        order,
        addToCart,
        removeToCart,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
        checkout,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
