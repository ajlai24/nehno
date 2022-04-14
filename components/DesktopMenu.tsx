import { Box } from '@mui/material';
import NavLink from './NavLink';
import { routes } from '../utils/routes';

const DesktopMenu = () => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {routes.map((route) => (
      <NavLink key={route.name} {...route} />
    ))}
  </Box>
);

export default DesktopMenu;
