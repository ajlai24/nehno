import { Box, BoxProps, styled } from '@mui/material';

interface SectionProps extends BoxProps {
  inset?: boolean;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'inset',
})<SectionProps>(({ theme, inset }) => ({
  padding: theme.spacing(6, 0),
  ...(inset && {
    background:
      theme.palette.mode === 'dark'
        ? theme.palette.background.paper
        : theme.palette.grey[100],
    boxShadow: 'inset 0px 1px 4px 0px rgb(0 0 0 / 10%)',
    borderBottom: `1px solid ${
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[300]
    }`,
  }),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10, 0),
  },
}));

const Section = ({ children, sx = [], inset = false }: SectionProps) => (
  <StyledBox inset={inset} sx={[...(Array.isArray(sx) ? sx : [sx])]}>
    {children}
  </StyledBox>
);

export default Section;
