import { Box, styled } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(12, 0),
  },
}));

const Section = ({ children, sx = [] }: SectionProps) => (
  <StyledBox sx={[...(Array.isArray(sx) ? sx : [sx])]}>{children}</StyledBox>
);

export default Section;
