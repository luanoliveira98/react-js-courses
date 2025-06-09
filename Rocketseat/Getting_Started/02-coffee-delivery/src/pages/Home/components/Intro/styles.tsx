import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.5rem;

  padding: 5.875rem 0;
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${mixins.fonts.titleXL};
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const IntroItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.5rem;
`;

const IntroBaseItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 0.5rem;
    border-radius: 100%;

    color: ${({ theme }) => theme.colors.white};
  }
`;

export const IntroItemCart = styled(IntroBaseItem)`
  svg {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const IntroItemPackage = styled(IntroBaseItem)`
  svg {
    background-color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const IntroItemTimer = styled(IntroBaseItem)`
  svg {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const IntroItemCoffee = styled(IntroBaseItem)`
  svg {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
