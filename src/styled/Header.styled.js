import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 4rem;
`;

export const Logo = styled.img`
  filter: ${({ filter }) => filter || "none"};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Image = styled.img`
  width: 37rem;
  margin-left: 2rem;
`;
