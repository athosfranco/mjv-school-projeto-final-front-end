import styled from "styled-components";

export const Btn = styled.button`
  cursor: ${({ type }) => (type === "disabled" ? "not-allowed" : "pointer")};
  border-radius: 10px;
  border: none;
  color: ${({ type }) => (type === "disabled" ? "darkgray" : "white")};
  width: 100%;
  padding: 15px;
  background-color: ${({ type, theme }) => {
    if (type === "success") {
      return theme.success;
    } else if (type === "danger") {
      return theme.danger;
    } else if (type === "warning") {
      return theme.warning;
    } else if (type === "info") {
      return theme.info;
    } else if (type === "disabled") {
      return theme.disabled;
    }
  }};

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;
