import { AppBar, Box, Container, styled, Toolbar } from '@mui/material';
import Logo from './Logo';
import NavMenu from './NavMenu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: `1px solid ${
    theme.palette.mode === 'dark'
      ? theme.palette.divider
      : theme.palette.grey[300]
  }`,
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
            <NavMenu />
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
    <Toolbar id="back-to-top-anchor"/>
  </>
);

export default AppNav;
