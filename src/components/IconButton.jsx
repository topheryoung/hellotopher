import styled from "styled-components";

const Button = styled.a`
  background: transparent;
  border-radius: 50%;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.backgrounds.body};
  }
  svg {
    height: 18px;
    width: 18px;
    path {
      fill: ${({ theme }) => theme.svg};
    }
  }
`;

const IconButton = ({ href, label, children }) => (
  <Button href={href} target="_blank" aria-label={label}>
    {children}
  </Button>
);

export default IconButton;
