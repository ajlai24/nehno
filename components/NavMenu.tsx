import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import ColorModeContext from '../context/ColorModeContext';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const NavLinks = () => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(ColorModeContext);

  return (
    <Box display="flex">
      <IconButton onClick={() => toggleDarkMode(!darkMode)} color="inherit">
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <MobileMenu />
      <DesktopMenu />
    </Box>
  );
};

export default NavLinks;
