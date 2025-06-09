import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import bannerCoffeeDelivery from "../../../../assets/banner-cofee-delivery.png";
import {
  IntroContainer,
  IntroContent,
  IntroItemCart,
  IntroItemCoffee,
  IntroItemPackage,
  IntroItems,
  IntroItemTimer,
  IntroTitle,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </IntroTitle>
        <IntroItems>
          <IntroItemCart>
            <ShoppingCart size={32} weight="fill" />
            <span>Compra simples e segura</span>
          </IntroItemCart>
          <IntroItemPackage>
            <Package size={32} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </IntroItemPackage>
          <IntroItemTimer>
            <Timer size={32} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </IntroItemTimer>
          <IntroItemCoffee>
            <Coffee size={32} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </IntroItemCoffee>
        </IntroItems>
      </IntroContent>
      <img src={bannerCoffeeDelivery} alt="" />
    </IntroContainer>
  );
}
