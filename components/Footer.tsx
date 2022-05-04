import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Divider, IconButton, Typography } from '@mui/material';

const year = new Date().getFullYear();

const Footer = () => (
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
);

export default Footer;
