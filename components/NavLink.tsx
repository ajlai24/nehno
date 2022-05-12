import { Link as MuiLink, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledLink = styled(MuiLink)(({ theme }) => ({
  ':after': {
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.complex,
    }),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: 0,
    content: "'.'",
    color: 'transparent',
    background: theme.palette.primary.dark,
    height: '1px',
  },
  ':hover': {
    color: theme.palette.primary.dark,
    ':after': {
      width: '100%',
    },
  },
}));

interface NavLinkProps {
  name: string;
  path: string;
  label: string;
}

const NavLink = ({ name, path, label }: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link href={path} passHref key={name}>
      <StyledLink
        color={router.pathname === path ? 'primary.dark' : 'primary.light'}
        py={1}
        ml={3}
        textTransform="uppercase"
        fontWeight="fontWeightBold"
        display="block"
        position="relative"
      >
        {label}
      </StyledLink>
    </Link>
  );
};

export default NavLink;
