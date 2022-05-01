import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography } from '@mui/material';
import NextLink from 'next/link';
import OverlineBox from '../components/OverlineBox';
import Section from '../components/Section';

const Hero = () => (
  <Section>
    <Container>
      <OverlineBox>
        <Typography variant="h1" component="span">
          Welcome to{' '}
          <Typography
            variant="h1"
            component="span"
            color="primary"
            fontWeight="fontWeightBold"
          >
            Nehno
          </Typography>
        </Typography>
        <Typography variant="h4" fontWeight="lighter" mt={2}>
          This is my playground for trying out frontend technologies. This site
          is using Next.js, Vercel, MUI, and Typescript.
        </Typography>
        <Box>
          <NextLink href="/tech" passHref>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Check it out
            </Button>
          </NextLink>
        </Box>
      </OverlineBox>
    </Container>
  </Section>
);

export default Hero;
