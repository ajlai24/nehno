import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  styled,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface StyledLinkProps extends MuiLinkProps {
  selected: boolean;
}

const StyledLink = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<StyledLinkProps>(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.dark : theme.palette.primary.light,
  fontWeight: selected ? 800 : 600,
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
        selected={router.pathname === path}
        py={1}
        ml={5}
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
