import { Box, Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';

const TextSection = ({
  children,
  header,
  id,
  divider = true,
}: {
  children: ReactNode;
  header: string;
  id?: string;
  divider?: boolean;
}) => (
  <Box
    id={id}
    sx={{
      scrollMarginTop: (theme) => theme.spacing(4),
    }}
  >
    {divider && <Divider sx={{ pt: 4 }} />}
    <Box pt={3}>
      <Typography variant="h5" fontWeight="fontWeightBold">
        {header}
      </Typography>
      <Box pt={3} pb={2}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default TextSection;
