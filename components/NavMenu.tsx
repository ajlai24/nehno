import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import ColorModeContext from '../context/ColorModeContext';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const NavLinks = () => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(ColorModeContext);

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <IconButton
          onClick={() => toggleDarkMode(!darkMode)}
          color="inherit"
          size="small"
          sx={{ mr: { xs: 1, md: 3 } }}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        |
      </Box>
      <MobileMenu />
      <DesktopMenu />
    </Box>
  );
};

export default NavLinks;
