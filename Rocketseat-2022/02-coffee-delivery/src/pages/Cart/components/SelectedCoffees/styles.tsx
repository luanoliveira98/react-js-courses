import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const SelectedCoffeesContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CardTitle = styled.span`
  ${mixins.fonts.titleXS};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const CartTotalCard = styled.div`
  min-width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 36px;

  background-color: ${({ theme }) => theme.colors["base-card"]};

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    margin: 1.5rem 0;
  }
`;

export const CartCoffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    display: flex;
    justify-content: space-between;
    gap: 1.25rem;

    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const CartCoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    height: 2rem;
    padding: 0.375rem 0.5rem;
    border-radius: 6px;

    transition: all 0.2s;

    background-color: ${({ theme }) => theme.colors["base-button"]};

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  border-radius: 6px;

  text-transform: uppercase;
  ${mixins.fonts.buttonG};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  transition: all 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;
