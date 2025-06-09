import { produce } from "immer";
import {
  ActionTypes,
  type AddToCartAction,
  type DecrementCoffeeQuantityAction,
  type IncrementCoffeeQuantityAction,
  type RemoveToCartAction,
} from "./actions";
import type { Cart, CoffeeCart } from "../../interfaces/cart";

interface OrderState {
  cart: Cart;
}

type Action =
  | AddToCartAction
  | RemoveToCartAction
  | IncrementCoffeeQuantityAction
  | DecrementCoffeeQuantityAction;

export function orderReducer(state: OrderState, action: Action) {
  function coffeeIndexInCart(coffeeId: number) {
    return state.cart.coffees.findIndex((coffeeCart) => {
      return coffeeCart.coffee.id === coffeeId;
    });
  }

  function calcTotalCoffee({ coffee, quantity }: CoffeeCart) {
    return quantity * coffee.priceInCents;
  }

  function calcTotalsCart(cart: Cart) {
    cart.totalItemsInCents =
      cart.coffees.length > 0
        ? cart.coffees.reduce((accumulator, coffee) => {
            return accumulator + coffee.totalPriceInCents;
          }, 0)
        : 0;
    cart.totalPriceInCents = cart.totalDeliveryInCents + cart.totalItemsInCents;
    return cart;
  }

  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const coffeeIndex = coffeeIndexInCart(action.payload.coffee.id);

      if (coffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.cart.coffees.push({
            coffee: action.payload.coffee,
            quantity: action.payload.quantity,
            totalPriceInCents:
              action.payload.coffee.priceInCents * action.payload.quantity,
          });
          calcTotalsCart(draft.cart);
        });
      }

      return produce(state, (draft) => {
        draft.cart.coffees[coffeeIndex].quantity += action.payload.quantity;
        draft.cart.coffees[coffeeIndex].totalPriceInCents = calcTotalCoffee(
          draft.cart.coffees[coffeeIndex]
        );
        calcTotalsCart(draft.cart);
      });
    }

    case ActionTypes.REMOVE_TO_CART: {
      const coffeeIndex = coffeeIndexInCart(action.payload.coffeeId);

      if (coffeeIndex < 0) return state;

      return produce(state, (draft) => {
        draft.cart.coffees.splice(coffeeIndex, 1);
        calcTotalsCart(draft.cart);
      });
    }

    case ActionTypes.INCREMENT_COFFEE_QUANTITY: {
      const coffeeIndex = coffeeIndexInCart(action.payload.coffeeId);

      if (coffeeIndex < 0) return state;

      return produce(state, (draft) => {
        draft.cart.coffees[coffeeIndex].quantity += 1;
        draft.cart.coffees[coffeeIndex].totalPriceInCents = calcTotalCoffee(
          draft.cart.coffees[coffeeIndex]
        );
        calcTotalsCart(draft.cart);
      });
    }

    case ActionTypes.DECREMENT_COFFEE_QUANTITY: {
      const coffeeIndex = coffeeIndexInCart(action.payload.coffeeId);

      if (coffeeIndex < 0) return state;

      return produce(state, (draft) => {
        draft.cart.coffees[coffeeIndex].quantity -= 1;
        draft.cart.coffees[coffeeIndex].totalPriceInCents = calcTotalCoffee(
          draft.cart.coffees[coffeeIndex]
        );
        calcTotalsCart(draft.cart);
      });
    }
    default:
      return state;
  }
}
