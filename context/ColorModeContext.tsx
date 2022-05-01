import { createContext } from 'react';

type ColorModeContext = {
  darkMode: boolean;
  toggleDarkMode: (newmode) => void;
};

export default createContext<ColorModeContext | undefined>(undefined);
