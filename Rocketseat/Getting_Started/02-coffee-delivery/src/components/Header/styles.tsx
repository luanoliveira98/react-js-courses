import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNav = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border-radius: 6px;
    padding: 0.5rem;

    ${mixins.fonts.textS}
    background-color: ${({ theme }) => theme.colors["purple-light"]};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }

  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;

    color: ${({ theme }) => theme.colors["yellow-dark"]};
    background-color: ${({ theme }) => theme.colors["yellow-light"]};

    position: relative;

    &[aria-disabled="true"] {
      pointer-events: none;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.25rem;
      height: 1.25rem;
      border-radius: 100%;

      ${mixins.fonts.textS};
      font-weight: bold;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};

      position: absolute;
      top: 0px;
      right: 0px;

      transform: translate(50%, -50%);
    }
  }
`;
