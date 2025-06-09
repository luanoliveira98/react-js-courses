import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { HeaderContainer, HeaderNav } from "./styles";

export function Header() {
  const cart = [1, 2, 3];

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

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </HeaderNav>
    </HeaderContainer>
  );
}
