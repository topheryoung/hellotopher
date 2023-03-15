import React from "react";
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

  body {
    background: ${({ theme }) => theme.body};
    padding: 24px;
    height: 100vh;
    width: 100ww;
    transition: background 0.2s ease-in, color 0.2s ease-in, padding 0.2s ease-in;
  }
  h1 {
    color: ${({ theme }) => theme.text};
  }
  main {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.main};
  }
`;

export const colors = {
  black: "#212529",
  white: "#FFFFFF",
  gray000: "#F9F9FC",
  gray100: "#ECEEF1",
  gray200: "#D4D7DF",
  gray300: "#B8BDC9",
  gray400: "#A0A7B8",
  gray500: "#8991A6",
  gray600: "#6E7485",
  gray700: "#525663",
  gray800: "#41454F",
  gray900: "#31343C",
  gray1000: "#191a1e",
};

export const lightTheme = {
  body: colors.white,
  text: colors.gray900,
  main: colors.gray000,
};

export const darkTheme = {
  body: colors.black,
  text: colors.gray100,
  main: colors.gray900,
};
