import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  
  html {
    ::before, ::after {
      content:'';
      position: fixed;
      top: 0;
      bottom: 0;
      width: 24px;
      background: ${({ theme }) => theme.backgrounds.body};
    }
    ::before { left: 0; }
    ::after { right: 0; }
  }

  body {
    background: ${({ theme }) => theme.backgrounds.body};
    padding: 24px;
    min-height: calc(100vh - 48px);
    transition: background 0.2s ease-in, color 0.2s ease-in;
    ::before, ::after {
      content:'';
      position: fixed;
      left: 0;
      right: 0;
      height: 24px;
      background: ${({ theme }) => theme.backgrounds.body};
    }
    ::before { top: 0; }
    ::after { bottom: 0; }
  }

  h1 {
    color: ${({ theme }) => theme.text};
  }

  main {
    padding: 24px;
    min-height: calc(100vh - 48px);
    background: ${({ theme }) => theme.backgrounds.main};
  }
`;

const colors = {
  black: "#212529",
  white: "#FFFFFF",
  gray000: "#F9F9FC",
  gray100: "#ECEEF1",
  gray700: "#505D77",
  gray800: "#41454F",
  gray900: "#31343C",
  orange: "#DB8454",
};

const fonts = {
  sans: "'Outfit', sans-serif",
};

const modes = {
  dark: {
    backgrounds: {
      body: colors.gray900,
      main: colors.gray800,
    },
    svg: {
      hamburger: colors.gray100,
    },
    font: {
      h1: colors.gray100,
    },
  },
  light: {
    backgrounds: {
      body: colors.white,
      main: colors.gray000,
    },
    svg: {
      hamburger: colors.gray900,
    },
    font: {
      h1: colors.gray900,
    },
  },
};

export const theme = (type) => ({
  ...modes[type],
  colors,
  fonts,
});
