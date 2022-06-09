import { Box } from '@mui/material';
import { routes } from 'utils/routes';
import NavLink from './NavLink';

const DesktopMenu = () => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {routes.map((route) => (
      <NavLink key={route.name} {...route} />
    ))}
  </Box>
);

export default DesktopMenu;
