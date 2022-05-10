import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface NumberedSectionProps {
  number: number;
  header: string;
  children: ReactNode;
}

const NumberedSection = (props: NumberedSectionProps) => {
  const { number, header, children } = props;
  return (
    <>
      <Typography gutterBottom fontWeight="fontWeightBold">
        {`${number}) ${header}`}
      </Typography>
      <Box px={4}>{children}</Box>
    </>
  );
};

export default NumberedSection;
