import { Box } from '@mui/material';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const NavLinks = () => {
  return (
    <Box>
      <MobileMenu />
      <DesktopMenu />
    </Box>
  );
};

export default NavLinks;

