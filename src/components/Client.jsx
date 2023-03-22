import styled, { css } from "styled-components";

const DarkModeSVG = css`
  &.has-dark-version {
    path {
      fill: ${({ theme }) => theme.svg};
    }
  }
`;

const ClientContainer = styled.article`
  width: 48%;
  margin-bottom: 48px;
  p {
    margin-top: 12px;
    font-size: 16px;
    line-height: 24px;
  }
  ul {
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.mono};
    li {
      margin: 4px 0;
      color: ${({ theme }) => theme.font.li};
      font-size: 12px;
      a {
        font-size: 12px;
      }
    }
  }
  svg {
    display: block;
    height: 36px;
    width: auto;
    max-width: 164px;
    ${({ theme }) => theme.type === "dark" && DarkModeSVG}
  }
`;

const Client = ({ logo, desc, role, date, website }) => (
  <ClientContainer>
    {logo}
    <p>{desc}</p>
    <ul>
      <li>Role: {role}</li>
      <li>Dates: {date}</li>
      {website ? (
        <li>
          <a href={website} target="_blank" className="inline-link">
            Visit Website
          </a>
        </li>
      ) : null}
    </ul>
  </ClientContainer>
);

export default Client;
