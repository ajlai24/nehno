import { AppBar, Box, Container, styled, Toolbar } from '@mui/material';
import Logo from './Logo';
import NavLinks from './NavMenu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  gridArea: 'header',
}));

const AppNav = () => (
  <>
    <StyledAppBar position="fixed" color="inherit">
      <Container>
        <Toolbar disableGutters>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Logo />
            <NavLinks />
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
    <Toolbar />
  </>
);

export default AppNav;
