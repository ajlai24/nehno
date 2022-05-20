import { Typography } from '@mui/material';
import { ReactNode } from 'react';

const Paragraph = ({ children }: { children: ReactNode }) => (
  <Typography sx={{ pb: 2 }}>{children}</Typography>
);

export default Paragraph;
