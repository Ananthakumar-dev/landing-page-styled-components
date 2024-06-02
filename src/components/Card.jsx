import { StyledCard, StyledCardImg } from "../styled/Card.styled";

const Card = ({ content: { id, title, body, image } }) => {
  return (
    <StyledCard direction={id % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <StyledCardImg src={`./../public/images/${image}`} alt={title} />
    </StyledCard>
  );
};

export default Card;
