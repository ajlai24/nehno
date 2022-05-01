import { Link as MuiLink, styled, Typography } from '@mui/material';
import Link from 'next/link';

const StyledMuiLink = styled(MuiLink)(({ theme }) => {
  const basePseudo = {
    content: 'attr(data-attr)',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: theme.spacing(1),
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.complex,
    }),
  };

  return {
    textDecoration: 'none',
    span: {
      color: theme.palette.common.white,
      padding: theme.spacing(1),
      position: 'relative',
      ':before': basePseudo,
      ':after': basePseudo,
      ':nth-of-type(1)': {
        ':before': {
          background: theme.palette.primary.light,
          transformOrigin: 'top',
          transform: 'rotateX(90deg) translateY(-50%)',
          borderRadius: theme.shape.borderRadius,
        },
        ':after': {
          background: theme.palette.primary.main,
          transformOrigin: 'bottom',
          transform: 'rotateX(0deg) translateY(0%)',
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
    ':hover': {
      span: {
        ':before': {
          transform: 'rotateX(0deg) translateY(0%)',
        },
        ':nth-of-type(1):after': {
          transform: 'rotateX(90deg) translateY(50%)',
        },
      },
    },
  };
});

const Logo = () => (
  <Link href="/" passHref>
    <StyledMuiLink underline="none" textTransform="uppercase">
      <Typography variant="h6" component="span" data-attr="nehno">
        Nehno
      </Typography>
    </StyledMuiLink>
  </Link>
);

export default Logo;
