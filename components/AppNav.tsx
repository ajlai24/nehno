import {
  AppBar,
  Box,
  Container,
  Link as MuiLink,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import NavLinks from './NavMenu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  gridArea: 'header',
}));

const StyledMuiLink = styled(MuiLink)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
  // color: theme.palette.primary.contrastText,
  padding: theme.spacing(0, 1),
  // transition: theme.transitions.create(['color'], { duration: theme.transitions.duration.complex }),
  ':hover': {},
}));

const AppNav = () => (
  <StyledAppBar position="static" color="inherit">
    <Container>
      <Toolbar disableGutters>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Link href="/" passHref>
            <StyledMuiLink underline="none">
              <Typography variant="h4" noWrap>
                nehno
              </Typography>
            </StyledMuiLink>
          </Link>
          <NavLinks />
        </Box>
      </Toolbar>
    </Container>
  </StyledAppBar>
);

export default AppNav;
