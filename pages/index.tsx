import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Theme,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import OverlineBox from '../components/OverlineBox';
import Section from '../components/Section';

const IndexPage = () => {
  return (
    <Layout title="Home | nehno.com">
      <Box>
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
                This is my playground for trying out frontend technologies. This
                site is using Next.js, Vercel, MUI, and Typescript.
              </Typography>
              <Box>
                <NextLink href="/tech" passHref>
                  <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Check the tech
                  </Button>
                </NextLink>
              </Box>
            </OverlineBox>
          </Container>
        </Section>
        <Section
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.primary.dark,
          }}
        >
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Typography
                  color="primary.contrastText"
                  variant="h4"
                  fontWeight="fontWeightBold"
                  gutterBottom
                >
                  Stuff I do
                </Typography>
                <Typography>
                  React, Webpack, Express, Typescript, and GraphQL
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Typography
                  variant="h4"
                  fontWeight="fontWeightBold"
                  gutterBottom
                >
                  Companies I&apos;ve worked at
                </Typography>
                <Paper sx={{ p: 2, mb: 2 }}>
                  <Box display="flex" alignItems="center">
                    <Typography>Salesforce</Typography>
                  </Box>
                </Paper>
                <Paper sx={{ p: 2 }}>
                  <Typography>Stride Health</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default IndexPage;
