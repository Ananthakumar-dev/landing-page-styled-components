import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
`;

export const FlexFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "start"};
  gap: 2rem;

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      font-weight: 600;
    }
  }
`;
