import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Section from '../components/Section';
import workDesk from '../public/workdesk.jpg';

const AboutParagraph = ({
  children,
  sx = [],
}: {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}) => (
  <Typography
    variant="h6"
    fontWeight={300}
    sx={[...(Array.isArray(sx) ? sx : [sx])]}
  >
    {children}
  </Typography>
);

const AboutHero = () => (
  <Grid container spacing={{ xs: 4, lg: 6 }} display="flex" alignItems="center">
    <Grid item xs={12} lg={4} order={{ xs: 2, lg: 1 }}>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          transformOrigin: 'top left',
        }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      >
        <Avatar
          alt="Andrew Lai"
          src="/profile.jpg"
          sx={(theme) => ({
            width: 320,
            height: 320,
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.background.paper
                : theme.palette.grey[300],
            boxShadow: 3,
            margin: { xs: 'auto', lg: 0 },
          })}
        />
      </motion.div>
    </Grid>
    <Grid item xs={12} lg={8} order={{ xs: 1, lg: 2 }}>
      <Box>
        <Typography variant="h2" component="span" fontWeight="fontWeightBold">
          Hello! I&apos;m{' '}
        </Typography>
        <Typography
          variant="h2"
          component="span"
          fontWeight="fontWeightBold"
          color="primary.dark"
        >
          Andrew
        </Typography>
        <Typography variant="h5" sx={{ pt: 2 }}>
          I&apos;m a software developer with a passion for frontend development.
        </Typography>

        <Box display="flex" justifyContent={{ xs: 'center', lg: 'flex-start' }}>
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            endIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/devajlai/"
            target="_blank"
            rel="sponsored noopener"
            size="large"
          >
            Say hello!
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
);

const ContactCard = () => (
  <Box display="flex" justifyContent="center" mt={4}>
    <Card
      sx={{
        padding: 4,
      }}
      variant="outlined"
    >
      <Typography variant="h6" fontWeight={300} textAlign="center">
        Want to work together on something interesting?
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          endIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/devajlai/"
          target="_blank"
          rel="sponsored noopener"
        >
          Contact me on
        </Button>
      </Box>
    </Card>
  </Box>
);

const WorkExperience = () => (
  <Grid container spacing={{ xs: 4, lg: 8 }} alignItems="center">
    <Grid item xs={12} lg={6} display="flex" justifyContent="center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          transformOrigin: 'center',
        }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <Box maxWidth="40rem" sx={{ background: 'white', p: 2, boxShadow: 2 }}>
          <Image src={workDesk} alt="Work Desk" placeholder="blur" />
        </Box>
      </motion.div>
    </Grid>
    <Grid item xs={12} lg={6}>
      <Typography variant="h3" sx={{ pb: 4 }} textAlign="center">
        Work Experience
      </Typography>
      <AboutParagraph>
        I&apos;m currently working at{' '}
        <Link href="https://www.duettocloud.com/">Duetto</Link> as a Principal
        Software Engineer. We&apos;re in the hospitality business building
        revenue management software. Although technically a full-stack engineer,
        my focus and interests right now primarily lie in the frontend using
        React, Express.js, GraphQL, and Webpack.
      </AboutParagraph>
      <AboutParagraph sx={{ mt: 4 }}>
        Prior to Duetto, I worked at Stride Health for a little over 2 and a
        half years helping independent workers find health, vision, and dental
        insurance. And even before Stride, I was at Salesforce for over 7 years
        learning everything about software development and establishing a strong
        foundation.
      </AboutParagraph>
    </Grid>
  </Grid>
);

const Background = () => (
  <Grid container spacing={{ xs: 4, lg: 8 }} alignItems="center">
    <Grid item xs={12} lg={8}>
      <Typography variant="h3" pb={4}>
        Background
      </Typography>
      <AboutParagraph>
        I live in the San Francisco Bay Area, California with my wife, 2 sons,
        and dog. Nehno is my personal website that I use to experiment and try
        out various libraries and technologies. What the heck is <b>Nehno</b>{' '}
        you ask? My first son used to always say &quot;nehno!&quot; and to this
        day we still don&apos;t know what it means. If it&apos;s easy enough for
        a toddler to say, I figured it&apos;d be easy enough for anyone to
        remember.
      </AboutParagraph>
    </Grid>
    <Grid item xs={12} lg={4}>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          transformOrigin: 'bottom right',
        }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
      >
        <Avatar
          variant="rounded"
          alt="Andrew Lai"
          src="/kumo.jpg"
          sx={(theme) => ({
            margin: 'auto',
            width: 250,
            height: 250,
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.background.paper
                : theme.palette.grey[300],
            boxShadow: 3,
          })}
        />
      </motion.div>
    </Grid>
  </Grid>
);

const AboutPage: NextPage = () => (
  <Layout title="About | nehno.com" meta="about">
    <Section sx={{ py: { lg: 24 } }}>
      <Container>
        <AboutHero />
      </Container>
    </Section>
    <Section inset sx={{ py: { lg: 16 } }}>
      <Container>
        <Background />
      </Container>
    </Section>

    <Section sx={{ py: { lg: 16 } }}>
      <Container>
        <WorkExperience />
      </Container>
    </Section>
    <Divider />
    <Section sx={{ py: { xs: 2, lg: 4 }, mb: 4 }}>
      <Container>
        <ContactCard />
      </Container>
    </Section>
  </Layout>
);

export default AboutPage;
