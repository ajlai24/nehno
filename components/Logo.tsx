import {
  Box,
  keyframes,
  Link as MuiLink,
  styled,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const mainFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const popIn = keyframes`
  0% {
    width: 0px;
    height: 0px;
    border: 0px solid transparent;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px
  }
  100% {
    width: 7px;
    height: 7px;
    bottom: 13px;
  }
`;

const StyledMuiLink = styled(MuiLink)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontSize: '2em',
  color: theme.palette.primary.main,
  fontWeight: '800',
  textDecoration: 'none',
  animation: `${mainFadeIn} 2s forwards`,
  width: '100%',

  '& .logoHover': {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    transform: 'translateX(-100%)',
    transition: 'transform 275ms ease',
    '&::before': {
      display: 'inline-block',
      content: 'attr(data-content)',
      color: theme.palette.primary.light,
      transform: 'translateX(100%)',
      transition: 'transform 275ms ease',
      textDecoration: 'none',
    },
  },
  '&:hover': {
    '& .logoHover': {
      transform: 'translateX(0)',
      '&::before': {
        transform: 'translateX(0)',
      },
    },
  },
  '& .dot': {
    width: '0px',
    height: '0px',
    borderRadius: '50%',
    background: theme.palette.secondary.main,
    animation: `${popIn} 0.8s cubic-bezier(.74, .06, .4, .92) forwards`,
    animationDelay: '500ms',
    marginLeft: '5px',
    marginTop: '-10px',
    position: 'absolute',
    bottom: '13px',
    right: '-12px',
  },
}));

const Logo = () => (
  <Box>
    <Link href="/" passHref>
      <StyledMuiLink>
        <Typography
          variant="h4"
          className="logoHover"
          data-content="NEHNO"
          aria-hidden="true"
          fontWeight="fontWeightBold"
        />
        <Typography variant="h4" fontWeight="fontWeightBold">
          NEHNO
        </Typography>
        <span className="dot" />
      </StyledMuiLink>
    </Link>
  </Box>
);

export default Logo;
