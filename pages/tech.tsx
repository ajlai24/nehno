import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Box,
  Button,
  Container,
  Link as MuiLink,
  Paper,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import OverlineBox from '../components/OverlineBox';
import Section from '../components/Section';

const TechSection = ({
  children,
  header,
  id,
}: {
  children: ReactNode;
  header: string;
  id?: string;
}) => (
  <Box pt={4} id={id}>
    <Typography variant="h5">{header}</Typography>
    <Box pt={1}>{children}</Box>
  </Box>
);

const TableOfContents = () => (
  <Box
    position="sticky"
    display={{
      xs: 'none',
      md: 'block',
    }}
    top={(theme) => ({
      sm: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(4)})`,
      md: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(8)})`,
      lg: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(12)})`,
    })}
    alignSelf="flex-start"
    minWidth="240px"
    px={2}
  >
    <nav aria-label="Table of contents">
      <Typography>Contents</Typography>
      <Link href="#nextjs" passHref>
        <MuiLink>Next.js</MuiLink>
      </Link>
    </nav>
  </Box>
);

const TechPage = () => (
  <Layout title="About | nehno.com">
    <Section>
      <Container>
        <Box display="flex">
          <Box>
            <OverlineBox>
              <Typography variant="h3" component="span">
                Tech talk
              </Typography>
              <Typography>How this site was built</Typography>
            </OverlineBox>

            <TechSection header="Code code code!">
              <Button
                component="a"
                variant="contained"
                endIcon={<GitHubIcon />}
                href="https://github.com/ajlai24/nehno"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </Button>
            </TechSection>

            <TechSection header="Introduction">asdf</TechSection>
            <TechSection header="Next.js" id="nextjs">
              <Paper sx={{ p: 2 }} elevation={0}>
                <Typography>
                  Why did I choose Next.js to build this site?
                </Typography>
                <ul>
                  <li>Next.js is super simple to get running quickly</li>
                  <li>
                    Integrating a CMS is not too difficult. I&apos;ve done it on
                    a previous iteration of this site but haven&apos;t had time
                    to add it back in
                  </li>
                  <li>Server side rendering for SEO and faster initial load</li>
                  <li>Easy routing built in</li>
                </ul>
                <Typography>
                  For blogs and similar type sites, Next.js is great. For
                  heftier business type apps with a lot of complex logic, you
                  may consider a client side rendered app using Webpack and
                  Express.js instead. There are some differences to accommodate
                  for between server side and client side rendering but the gap
                  is thinning. Each has its pros and cons
                </Typography>
              </Paper>
            </TechSection>

            <TechSection header="MUI (Material UI)">
              <Typography>
                heavy mui usage, makes it easy to quickly build the app.
                theming, dark mode, responsive too!
              </Typography>
            </TechSection>

            <TechSection header="Vercel">
              <Typography>really great for next.js and deployments</Typography>
            </TechSection>

            <TechSection header="Miscellaneous">
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
              <Typography>typescript, eslint, prettier</Typography>
            </TechSection>
          </Box>
          <TableOfContents />
        </Box>
      </Container>
    </Section>
  </Layout>
);

export default TechPage;
