import Link from 'next/link';
import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

const AboutPage = () => (
  <Layout title="About | nehno.com">
    <Container>
      <SectionHeader title="About" subtitle="Andrew is a software developer who lives in the San Francisco Bay Area" />

      <Box mt={4}>
        <img src="https://images.unsplash.com/photo-1600610429853-81d08d9ae4b1" width="100%" />
      </Box>

      <Section>
        <Typography>
        </Typography>
        <Typography variant="subtitle1" color="grey.800" fontWeight="fontWeightLight">
          My wife and I have a toddler that always says "nehno!" and we still don't know what it means. If it's easy enough for a toddler to say, I figured it'd be easy enough for anyone to remember.
        </Typography>
        <Typography component="em">
          Thanks for visiting!
        </Typography>
      </Section>
    </Container>
  </Layout>
)

export default AboutPage
