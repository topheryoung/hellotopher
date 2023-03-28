import styled from "styled-components";
import IconButton from "./IconButton";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Dribbble } from "../assets/dribbble.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Email } from "../assets/email.svg";

const SocialBar = styled.div`
  display: flex;
  a {
    margin-right: 12px;
  }
`;

const Social = () => (
  <SocialBar>
    <IconButton href="https://github.com/topheryoung" label="Github">
      <Github />
    </IconButton>
    <IconButton href="https://dribbble.com/topheryoung" label="Dribbble">
      <Dribbble />
    </IconButton>
    <IconButton
      href="https://www.linkedin.com/in/ctopheryoung/"
      label="LinkedIn"
    >
      <Linkedin />
    </IconButton>
    <IconButton href="mailto:topher@hellotopher.com" label="Email Topher">
      <Email />
    </IconButton>
  </SocialBar>
);

export default Social;
