import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import workDesk from '../assets/workdesk.jpg'

const AboutPage = () => (
  <Layout title="About | nehno.com">
    <Container>
      <SectionHeader title="About" subtitle="Andrew is a software developer who lives in the San Francisco Bay Area" />

      <Box mt={4}>
        <Image src={workDesk}
          placeholder="blur"
          alt="Work Desk"
        />
      </Box>

      <Section>
        <Typography>
        </Typography>
        <Typography variant="subtitle1" color="grey.800" fontWeight="fontWeightLight">
          My wife and I have a toddler that always says &quot;nehno!&quot; and we still don&apos;t know what it means. If it&apos;s easy enough for a toddler to say, I figured it&apos;d be easy enough for anyone to remember.
        </Typography>
        <Typography component="em">
          Thanks for visiting!
        </Typography>
      </Section>
    </Container>
  </Layout>
)

export default AboutPage
