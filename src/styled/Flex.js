import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "start"};
  flex-direction: ${({ direction }) => direction || "row"};
  gap: 2rem;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Flex;
