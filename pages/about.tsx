import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import workDesk from '../public/workdesk.jpg';

const AboutPage = () => (
  <Layout title="About | nehno.com">
    <Section>
      <Container>
        <SectionHeader
          title="About"
          subtitle="Andrew Lai is a software developer who lives in the San Francisco Bay Area"
        />
        <Box mt={4}>
          <Typography>What is nehno?</Typography>
          <Image src={workDesk} placeholder="blur" alt="Work Desk" />
        </Box>
      </Container>
    </Section>
  </Layout>
);

export default AboutPage;
