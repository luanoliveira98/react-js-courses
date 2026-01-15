import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { HeaderContainer, HeaderNav } from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Header() {
  const { cart } = useContext(OrderContext);

  const quantity = cart.coffees.reduce((accumulator, coffee) => {
    return accumulator + coffee.quantity;
  }, 0);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="Coffee Delivery" />
      </Link>

      <HeaderNav>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`} aria-disabled={quantity === 0}>
          <ShoppingCart size={22} weight="fill" />
          {quantity > 0 ? <span>{quantity}</span> : null}
        </Link>
      </HeaderNav>
    </HeaderContainer>
  );
}
