import { createTheme } from '@mui/material';

const baseTheme = {
  typography: {
    fontFamily: [
      'Noto Sans JP',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
};

const theme = createTheme(baseTheme);

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
  },
});

export { theme, darkTheme };
