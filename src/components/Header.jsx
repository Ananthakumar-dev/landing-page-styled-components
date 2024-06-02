import { StyledHeader, Logo, Nav, Image } from "../styled/Header.styled";
import { Container } from "../styled/Container";
import Button from "../styled/Button";
import Flex from "../styled/Flex";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./../public/images/logo.svg" alt="" />

          <Button>Try it free</Button>
        </Nav>

        <Flex>
          <Flex direction="column">
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quia
              id asperiores a veniam molestiae voluptatem fugit obcaecati aut
              quisquam distinctio! Veniam natus provident beatae ipsa id totam
              voluptate facilis.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </Flex>

          <Image src="./../public/images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
