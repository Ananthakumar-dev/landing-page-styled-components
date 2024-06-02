import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  font-weight: 550;
  cursor: pointer;
  color: ${({ color }) => color || "#333"};
  background-color: ${({ bg }) => bg || "#fff"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    align-self: center;
  }
`;

export default Button;
