import styled from "styled-components";

const ClientContainer = styled.article`
  width: 48%;
  margin-bottom: 48px;
  svg {
    height: 36px;
    width: auto;
    margin-bottom: 8px;
  }
  p {
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
`;

const Client = ({ logo, desc, role, date, website }) => (
  <ClientContainer>
    {logo}
    <p>{desc}</p>
    <ul>
      <li>Role: {role}</li>
      <li>Dates: {date}</li>
      <li>
        <a href={website} className="inline-link">
          Visit Website
        </a>
      </li>
    </ul>
  </ClientContainer>
);

export default Client;