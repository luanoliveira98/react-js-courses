import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  height: 19.375rem;
  max-width: 16rem;

  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};

  img {
    max-width: 7.5rem;
    align-self: center;
    margin-top: -1.25rem;
  }
`;

export const CoffeeTags = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;

  margin-top: 0.75rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;

    ${mixins.fonts.tag}
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
  }
`;

export const CoffeeName = styled.span`
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors["base-subtitle"]};
  ${mixins.fonts.titleS}
`;

export const CoffeeDescription = styled.span`
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors["base-label"]};
  ${mixins.fonts.textS};
`;

export const CoffeeBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.0625rem;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    ${mixins.fonts.textS}
  }

  span:last-child {
    ${mixins.fonts.titleM}
  }
`;

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;

    padding: 0.5rem;
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors["purple-dark"]};

    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }
`;
