import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding-top: 2rem;

  h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const CoffeeListCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
`;
