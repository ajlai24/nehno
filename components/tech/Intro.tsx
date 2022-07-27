import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Typography } from '@mui/material';

const Intro = () => (
  <>
    <Typography>
      If you&apos;ve ever worked on a web app whether you&apos;re a developer,
      UX designer, or Product Manager, there&apos;s a lot of things to consider
      even on a seemingly simple app like this. I find that looking at example
      code is sometimes more helpful so if you&apos;re not too interested in
      reading feel free to jump to the
    </Typography>
    <Box display="flex" justifyContent={{ xs: 'center', lg: 'flex-start' }}>
      <Button
        sx={{ mt: 1 }}
        component="a"
        variant="contained"
        endIcon={<GitHubIcon />}
        href="https://github.com/ajlai24/nehno"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </Button>
    </Box>
  </>
);

export default Intro;
