'use client';

import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: "#FFFFFF",
      black: "#000000"
    },
    primary: {
      main: "#23A6F0"
    },
    secondary: {
      main: "#23856D"
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
      disabled: "#BDBDBD"
    },
    error: {
      main: "#E74040"
    },
    warning: {
      main: "#E77C40"
    }
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "32px",
      letterSpacing: "0.2px"
    },
    h3: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.1px"
    },
    h4: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "0.2px"
    },
    h5: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1px"
    },
    h6: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.2px"
    },
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.2px"
    },
    body2: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.2px"
    },
  },
});