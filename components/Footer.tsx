import {
  Box,
  Container,
  Divider,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledBox = styled(Box, {
  name: 'Footer',
  slot: 'Root',
})({
  gridArea: 'footer',
});

const year = new Date().getFullYear();

const Footer = () => (
  <StyledBox>
    <Container>
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Typography variant="caption">&copy; {year} nehno.com</Typography>
        <Box>
          <IconButton
            size="small"
            component="a"
            href="https://www.linkedin.com/in/devajlai/"
            target="_blank"
            rel="sponsored noopener"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ ml: 2 }}
            component="a"
            href="https://github.com/ajlai24"
            target="_blank"
            rel="sponsored noopener"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  </StyledBox>
);

export default Footer;
