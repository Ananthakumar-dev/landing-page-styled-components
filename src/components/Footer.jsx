import { Logo } from "../styled/Header.styled";
import { StyledFooter, FlexFooter } from "../styled/Footer.styled";
import Flex from "../styled/Flex";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo src="./../public/images/logo.svg" alt="logo" filter="invert(0.6)" />
      <Flex align="center">
        <FlexFooter>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, sequi! Dolor vitae eveniet iste quidem maxime
            veritatis voluptatem, vel sequi, nisi doloremque optio, ipsum cum
            hic laboriosam veniam a aut?
          </p>
          <p>+91 8072292975</p>
          <p> ananthakumar.en@gmail.com</p>
        </FlexFooter>

        <FlexFooter align="center">
          <ul>
            <li>
              <a href=""> About us </a>
            </li>
            <li>
              <a href=""> What we do </a>
            </li>
            <li>
              <a href=""> FAQ </a>
            </li>
          </ul>
        </FlexFooter>

        <FlexFooter align="center">
          <ul>
            <li>
              <a href=""> Carrer </a>
            </li>
            <li>
              <a href=""> Blog </a>
            </li>
            <li>
              <a href=""> Contact us </a>
            </li>
          </ul>
        </FlexFooter>
      </Flex>

      <p>&copy; Haddle. All Rights Reserved</p>
    </StyledFooter>
  );
};

export default Footer;
