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

  * {
    font-family: ${({ theme }) => theme.fonts.sans};
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

  main {
    padding: 24px;
    min-height: calc(100vh - 96px);
    max-width: 1080px;
    margin: 0 auto;
    background: ${({ theme }) => theme.backgrounds.main};
  }

  .content {
    max-width: 800px;
    padding: 36px 48px;
  }

  h1 {
    font-size: 48px;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.font.h1};
    margin: 18px 0;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    font-weight: ${({ theme }) => theme.fonts.weight.normal};
    color: ${({ theme }) => theme.font.p};
  }

  hr {
    width: 40px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin: 30px 0 20px;
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
  primary: "#DB8454",
};

const fonts = {
  sans: "'IBM Plex Sans', Helvetica, sans-serif;",
  weight: {
    normal: 400,
    bold: 600,
  },
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
      h1: colors.gray000,
      p: colors.gray100,
    },
    border: colors.gray100,
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
      p: colors.gray800,
    },
    border: colors.gray900,
  },
};

export const theme = (type) => ({
  ...modes[type],
  colors,
  fonts,
});
