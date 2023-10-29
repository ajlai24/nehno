import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography } from '@mui/material';
import Section from 'components/Section';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const Hero = () => (
  <Section sx={{ py: { lg: 12 } }}>
    <Container>
      <Box textAlign="center">
        <Typography
          variant="h4"
          component="span"
          // fontWeight="fontWeightBold"
        >
          Hello! I&apos;m{' '}
        </Typography>
        <Typography
          variant="h4"
          component="span"
          fontWeight="fontWeightBold"
          color="primary.dark"
        >
          Andrew
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center">
        <Typography
          variant="h2"
          sx={{ pt: 2, maxWidth: '45rem' }}
          textAlign="center"
          fontWeight="fontWeightBold"
        >
          I enjoy{' '}
          <Typography
            variant="h2"
            component="span"
            fontWeight="fontWeightBold"
            color="primary.dark"
          >
            building
          </Typography>{' '}
          things for the web
          {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="32" position/> */}
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h5" fontWeight="lighter" component="span">
          Nehno is my playground for web development. Currently it&apos;s is
          using Next.js, Vercel, MUI, and Typescript
        </Typography>
      </Box>
      <Box display="flex" justifyContent={{ xs: 'center', lg: 'flex-start' }}>
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
    </Container>
  </Section>
);

export default Hero;
