// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box, IconButton, List, ListItemButton, ListItemText, SwipeableDrawer,
  // useTheme 
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  // createContext, 
  // useContext, 
  useState
} from 'react';
import { routes } from '../utils/routes';

// const ColorModeContext = createContext({ toggleColorMode: () => { } });

const MobileMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  // const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
      {/* <IconButton size="large" onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton> */}
      <IconButton
        size="large"
        aria-label="Open Navigation Menu Button"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List sx={{ width: 240 }}>
          <Box display="flex" justifyContent="flex-end" sx={{ width: '100%' }} pr={1}>
            <IconButton
              size="large"
              aria-label="Close Navigation Drawer"
              aria-controls="close-menu-appbar"
              aria-haspopup="false"
              onClick={toggleDrawer(false)}
              color="inherit"
              sx={{ alignSelf: 'flex-end' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {routes.map(({ name, label, path }) => (
            <Link href={path} passHref key={name}>
              <ListItemButton selected={router.pathname === path}>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
    </Box>
  );
};

export default MobileMenu;
