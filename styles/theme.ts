import { createTheme, ThemeOptions } from '@mui/material';

const components: ThemeOptions['components'] = {
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
  },
};

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
  components,
};

const theme = createTheme(baseTheme);

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    background: {
      paper: '#313940',
      default: '#1e1e1e',
    },
  },
});

export { theme, darkTheme };
