import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography } from '@mui/material';
import NextLink from 'next/link';
import OverlineBox from '../components/OverlineBox';
import Section from '../components/Section';

const Hero = () => (
  <Section sx={{ py: { lg: 20 } }}>
    <Container>
      <OverlineBox>
        <Typography variant="h1" fontWeight="fontWeightBold">
          Welcome to{' '}
          <Typography
            variant="h1"
            component="span"
            color="primary.dark"
            fontWeight="fontWeightBold"
          >
            Nehno
          </Typography>
        </Typography>
        <Box mt={2}>
          <Typography variant="h4" fontWeight="lighter" component="span">
            Hi, I&apos;m{' '}
            <Typography color="primary.dark" component="span" variant="h4">
              Andrew
            </Typography>
            ! This is my playground for web development. This site is using
            Next.js, Vercel, MUI, and Typescript
          </Typography>
        </Box>
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
