import { createTheme } from "@mui/material/styles"

export const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#168da0',
      dark: '#31494c',
      contrastText: '#e4d2d2',
      light: '#39aaaa',
    },
    secondary: {
      main: '#f5f200',
      light: '#f9f633',
      dark: '#a6a404',
      // contrastText: 'rgba(12,12,12,0.87)',
    },
    // text: {
    //   primary: rgba(0, 0, 0, 0.89),
    //   secondary: rgba(0, 0, 0, 0.66),
    // },
    background: {
      default: '#fafafa',
      paper: '#fff'
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'BlinkMacSystemFont',
      '"Segoe UI Symbol"',
      'sans-serif',
      '"Segoe UI"',
      'Roboto',
      '"Apple Color Emoji"',
      '-apple-system',
      'Arial',
      '"Segoe UI Emoji"',
    ].join(','),
    fontSize: 16,
    fontStyle: 'italic'
  },
  error: {
    main: '#f92e1f',
    light: '#f96257',
    dark: '#a61d13',
    contrastText: '#f1eded',
  },
  warning: {
    main: '#fd9803',
    light: '#f3a533',
    dark: '#b77008',
    contrastText: 'rgba(26,26,26,0.87)',
  },
  info: {
    main: '#2196f5',
    light: '#5ba6e2',
    dark: '#0c4b7b',
    contrastText: '#d4cccc',
  },
  success: {
    main: '#4bad4f',
    light: '#69c16c',
    dark: '#336736',
    contrastText: 'rgba(16,16,16,0.87)',
  },
  divider: 'rgba(117,86,86,0.12)',
})