import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
}

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 20, 0),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(12, 20, 0),
  },
}));

const Section = ({ children }: SectionProps) => (
  <StyledBox>
    {children}
  </StyledBox>
);

export default Section;
