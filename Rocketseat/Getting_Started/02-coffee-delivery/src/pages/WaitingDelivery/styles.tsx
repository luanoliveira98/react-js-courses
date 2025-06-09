import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const WaitingDeliveryContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding-top: 5rem;
`;

export const WaitingDeliveryTitle = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const WaitingDeliveryContent = styled.section`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

export const WaitingDeliveryOrder = styled.div`
  min-width: 32.875rem;
  margin-top: 0.75rem;

  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`;

export const WaitingDeliveryOrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  padding: 1.5rem;
  height: 100%;
  border-radius: 6px 36px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const WaitingDeliveryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 0.5rem;

    border-radius: 100%;

    color: ${({ theme }) => theme.colors.white};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const WaitingDeliveryItemLocal = styled(WaitingDeliveryItem)`
  svg {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

export const WaitingDeliveryItemTimer = styled(WaitingDeliveryItem)`
  svg {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const WaitingDeliveryItemPayment = styled(WaitingDeliveryItem)`
  svg {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;
