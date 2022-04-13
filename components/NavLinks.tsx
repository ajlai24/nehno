import { Box, Link as MuiLink, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu, { routes } from './MobileMenu.';

export const Routes = {
  HOME: '/',
  TECH: '/tech',
  ABOUT: '/about',
};

const StyledLink = styled(MuiLink)(({ theme }) => ({
  transition: '0.5s',
  ':hover': {
    color: theme.palette.primary.dark,
  },
}))

const NavLinks = () => {
  const router = useRouter();

  return (
    <Box>
      <MobileMenu />
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {routes.map(({ name, label, path }) => (
          <Link href={path} passHref key={name}>
            <StyledLink
              underline="none"
              fontWeight="fontWeightLight"
              color={router.pathname === path ? "primary" : "inherit"}
              mr={4}
            >
              {label}
            </StyledLink>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default NavLinks;

