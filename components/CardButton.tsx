import { Paper, styled } from '@mui/material';
import { ReactNode } from 'react';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  display: 'flex',
  height: '100%',
  textDecoration: 'none',
})) as typeof Paper;

interface CardButtonProps {
  href: string;
  children: ReactNode;
}

const CardButton = ({ href, children }: CardButtonProps) => (
  <StyledPaper
    variant="outlined"
    component="a"
    href={href}
    target="_blank"
    rel="sponsored noopener"
    sx={{
      '&:hover': {
        boxShadow: '0px 4px 20px rgb(170 180 190 / 30%)',
      },
    }}
  >
    {children}
  </StyledPaper>
);

export default CardButton;
