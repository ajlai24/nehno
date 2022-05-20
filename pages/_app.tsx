import { responsiveFontSizes, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import ColorModeContext from '../context/ColorModeContext';
import '../styles/index.css';
import { darkTheme, theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('appState', 'initialized');
    const mode = localStorage.getItem('mode') === 'true';
    setDarkMode(mode);
  }, []);

  const toggleDarkMode = (newmode) => {
    localStorage.setItem('mode', newmode);
    setDarkMode(newmode);
  };

  return (
    <ColorModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={responsiveFontSizes(darkMode ? darkTheme : theme)}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
