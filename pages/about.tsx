import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Section from '../components/Section';
import profile from '../public/profile.jpg';
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

const AboutPage = () => (
  <Layout title="About | nehno.com">
    <Section>
      <Container sx={{ mb: 6 }}>
        <Grid
          container
          spacing={{ xs: 4, lg: 6 }}
          display="flex"
          alignItems="center"
        >
          <Grid item xs={12} sm={5}>
            <Box
              borderRadius="20px"
              position="relative"
              overflow="hidden"
              maxHeight={500}
            >
              <Image
                src={profile}
                alt="Andrew Profile"
                width={640}
                height={800}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box>
              <Typography
                variant="h2"
                component="span"
                fontWeight="fontWeightBold"
              >
                Hi there! I&apos;m{' '}
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
                I&apos;m a software developer with a passion for frontend
                development.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h3" sx={{ pt: { xs: 8, lg: 16 }, pb: 4 }}>
          Work Experience
        </Typography>
        <Grid container spacing={{ xs: 4, lg: 8 }}>
          <Grid item xs={12} lg={6}>
            <AboutParagraph>
              I&apos;m currently working at{' '}
              <Link href="https://www.duettocloud.com/">Duetto</Link> as a
              Principal Software Engineer. We&apos;re in the hospitality
              business building revenue management software. Although
              technically a full-stack engineer, my focus and interests right
              now primarily lie in the frontend using React, Express.js,
              GraphQL, and Webpack.
            </AboutParagraph>
            <AboutParagraph sx={{ mt: 4 }}>
              Prior to Duetto, I worked at Stride Health for a little over 2 and
              a half years helping independent workers find health, vision, and
              dental insurance. And even before Stride, I was at Salesforce for
              over 7 years learning Agile Development Methodology (ADM) and
              establishing a strong foundation for software development.
            </AboutParagraph>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box maxWidth="40rem">
              <Image src={workDesk} alt="Work Desk" />
            </Box>
          </Grid>
        </Grid>

        <Typography variant="h3" sx={{ pt: { xs: 8, lg: 12 }, pb: 4 }}>
          Background
        </Typography>
        <AboutParagraph>
          I live in the San Francisco Bay Area, California with my wife, 2 sons,
          and dog. Nehno is my personal website that I use to experiment and try
          out various libraries and technologies. What the heck is <b>Nehno</b>{' '}
          you ask? My first son used to always say &quot;nehno!&quot; and to
          this day we still don&apos;t know what it means. If it&apos;s easy
          enough for a toddler to say, I figured it&apos;d be easy enough for
          anyone to remember.
        </AboutParagraph>

        <Box display="flex" justifyContent="center" mt={4}>
          <Card
            sx={{
              padding: 4,
            }}
            variant="outlined"
          >
            <Typography variant="h6" fontWeight={300}>
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
      </Container>
      {/* <Box
        sx={{
          backgroundImage: "url('/workdesk.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: {
            xs: '25rem',
            sm: '25rem',
            md: '30rem',
            lg: '35rem',
            xl: '45rem',
          },
          backgroundPosition: 'center',
        }}
      /> */}
    </Section>
  </Layout>
);

export default AboutPage;
