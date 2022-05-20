import { createContext } from 'react';

type ColorModeContext = {
  darkMode: boolean;
  toggleDarkMode: (newmode: boolean) => void;
};

export default createContext<ColorModeContext | undefined>(undefined);
