import { styled, Box } from '@mui/material';

const OverlineBox = styled(Box)(({ theme }) => ({
  ':before': {
    borderLeft: `4rem solid ${theme.palette.primary.dark}`,
    content: "''",
    display: 'block',
    height: 4,
    marginBottom: theme.spacing(1.5),
  },
}));

export default OverlineBox;
