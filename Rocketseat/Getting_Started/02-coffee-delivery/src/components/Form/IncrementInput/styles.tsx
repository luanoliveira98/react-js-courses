import styled from "styled-components";

export const IncrementInputContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors["base-button"]};

  button {
    display: flex;
    align-items: center;

    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.colors.purple};

      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors["purple-dark"]};
      }
    }
  }

  span {
    padding-top: 0.125rem;

    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
