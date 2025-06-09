import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { orderReducer } from "../reducers/order/reducer";
import {
  addToCartAction,
  decrementCoffeeQuantityAction,
  incrementCoffeeQuantityAction,
  removeToCartAction,
  type CoffeeQuantityPayload,
} from "../reducers/order/actions";
import type { Cart } from "../interfaces/cart";

interface OrderContextType {
  cart: Cart;
  addToCart: (data: CoffeeQuantityPayload) => void;
  removeToCart: (coffeeId: number) => void;
  decrementCoffeeQuantity: (coffeeId: number) => void;
  incrementCoffeeQuantity: (coffeeId: number) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
      cart: {
        coffees: [],
        totalItemsInCents: 0,
        totalDeliveryInCents: 320,
        totalPriceInCents: 320,
      },
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

  const { cart } = orderState;

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

  return (
    <OrderContext.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
