import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography } from '@mui/material';
import OverlineBox from 'components/OverlineBox';
import Section from 'components/Section';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const Hero = () => (
  <Section sx={{ py: { lg: 20 } }}>
    <Container>
      <OverlineBox>
        <Typography variant="h1" component="div" fontWeight="fontWeightBold">
          Welcome to{' '}
          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2,
            }}
          >
            <Typography
              variant="h1"
              color="primary.dark"
              fontWeight="fontWeightBold"
              sx={{ display: 'inline' }}
            >
              Nehno
            </Typography>
          </motion.span>
        </Typography>
        <Box mt={2}>
          <Typography variant="h4" fontWeight="lighter" component="span">
            This is a playground for web development. This site is using
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
