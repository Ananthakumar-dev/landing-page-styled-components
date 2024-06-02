import styled from "styled-components";

export const StyledCard = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: ${({ direction }) => direction || "row"};
  margin-bottom: 2rem;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
  }
`;

export const StyledCardImg = styled.img`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 70%;
  }
`;
