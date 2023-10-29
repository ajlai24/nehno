import {
  Box,
  keyframes,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  styled,
  Typography,
} from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const mainFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// const popIn = keyframes`
//   0% {
//     width: 0px;
//     height: 0px;
//     border: 0px solid transparent;
//     opacity: 0;
//   }
//   50% {
//     width: 10px;
//     height: 10px;
//     opacity: 1;
//     bottom: 45px;
//   }
//   65% {
//     width: 7px;
//     height: 7px;
//     bottom: 0px;
//     width: 15px
//   }
//   80% {
//     width: 10px;
//     height: 10px;
//     bottom: 20px
//   }
//   100% {
//     width: 7px;
//     height: 7px;
//     bottom: 13px;
//   }
// `;

const StyledMuiLink = styled(MuiLink)<MuiLinkProps>(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontSize: '2em',
  color: theme.palette.primary.main,
  fontWeight: '800',
  textDecoration: 'none',
  width: '100%',
  WebkitTapHighlightColor: 'transparent',

  '&.animate': {
    animation: `${mainFadeIn} 2s forwards`,
    // '& .dot': {
    //   animation: `${popIn} 0.8s cubic-bezier(.74, .06, .4, .92) forwards`,
    //   animationDelay: '500ms',
    // },
  },

  // Logo text hover
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

  // Bouncing dot
  // '& .dot': {
  //   width: '7px',
  //   height: '7px',
  //   bottom: '13px',
  //   borderRadius: '50%',
  //   background: theme.palette.secondary.main,
  //   marginLeft: '5px',
  //   marginTop: '-10px',
  //   position: 'absolute',
  //   right: '-12px',
  // },

  // Hover animations
  '&:hover': {
    '& .logoHover': {
      transform: 'translateX(0)',
      '&::before': {
        transform: 'translateX(0)',
      },
    },
    // '& .dot': {
    //   animation: `${popIn} 0.8s cubic-bezier(.74, .06, .4, .92) forwards`,
    // },
  },
}));

const Logo = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(localStorage.getItem('appState') !== 'initialized');
  }, []);

  return (
    <Box>
      <StyledMuiLink className={clsx({ animate })} href="/" component={Link}>
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
        {/* <span className={clsx('dot', { animate })} /> */}
      </StyledMuiLink>
    </Box>
  );
};

export default Logo;
