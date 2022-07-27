import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Divider, IconButton, useTheme } from '@mui/material';
import ColorModeContext from 'context/ColorModeContext';
import { useContext } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const NavMenu = () => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(ColorModeContext);

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={() => toggleDarkMode(!darkMode)}
        color="inherit"
        size="small"
        sx={{ mr: { xs: 1, md: 4 } }}
      >
        {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <Divider orientation="vertical" variant="middle" flexItem />
      <MobileMenu />
      <DesktopMenu />
    </Box>
  );
};

export default NavMenu;
