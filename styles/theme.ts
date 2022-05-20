import { createTheme, ThemeOptions } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

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
      'Poppins',
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
  palette: {
    secondary: blueGrey,
  },
};

const theme = createTheme(baseTheme);

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    secondary: blueGrey,
    background: {
      paper: '#313940',
      default: '#1e1e1e',
    },
  },
});

export { theme, darkTheme };
