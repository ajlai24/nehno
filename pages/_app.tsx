import { responsiveFontSizes, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/index.css';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
