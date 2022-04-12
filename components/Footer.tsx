import { Box, Container, styled } from '@mui/material';

const StyledBox = styled(Box, {
  name: 'Footer',
  slot: 'Root',
})(({ theme }) => ({
  gridArea: 'footer',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(4),
}));

const year = new Date().getFullYear();

const Footer = () => (
  <StyledBox>
    <Container>
      <Box display="flex" justifyContent="flex-end">
        {/* <CopyrightIcon />
        <Typography variant="caption">{year}</Typography>
        <Link color="primary.contrastText" href="https://nehno.com/">nehno.com</Link> */}
      </Box>
    </Container>
  </StyledBox>
);

export default Footer;
