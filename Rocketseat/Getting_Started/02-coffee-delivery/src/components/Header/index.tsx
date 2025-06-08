import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { HeaderAside, HeaderContainer } from "./styles";

export function Header() {
  const cart = [];

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="Coffee Delivery" />
      </Link>

      <HeaderAside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </HeaderAside>
    </HeaderContainer>
  );
}
