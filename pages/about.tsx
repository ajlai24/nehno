import { Box, Container } from '@mui/material';
import Image from 'next/image';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import workDesk from '../public/workdesk.jpg';

const AboutPage = () => (
  <Layout title="About | nehno.com">
    <Container>
      <SectionHeader
        title="About"
        subtitle="Andrew is a software developer who lives in the San Francisco Bay Area"
      />

      What is nehno?

      Interests
      
      <Box mt={4}>
        <Image src={workDesk} placeholder="blur" alt="Work Desk" />
      </Box>
    </Container>
  </Layout>
);

export default AboutPage;
