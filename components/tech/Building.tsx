import { Box, Card, Grid, Typography, useTheme } from '@mui/material';
import Link from 'components/Link';
import NextjsLogo from 'public/nextjsLogo.svg';
import NumberedSection from './NumberedSection';
import Paragraph from './Paragraph';

const Building = () => {
  const theme = useTheme();

  return (
    <>
      <NumberedSection number={1} header="Client Side vs Server Side Rendering">
        <Paragraph>
          For blogs and similar type sites, server side rendering is great.
          Initial load is faster and it generally doesn&apos;t need much more
          tweaking for SEO. For heftier business type apps with a lot of complex
          logic, you may consider a client side rendered app using Webpack and
          Express.js instead. There are some differences to accommodate for
          between server side and client side rendering but the gap is
          narrowing. Each has its pros and cons
        </Paragraph>

        <Card sx={{ display: 'flex', padding: 2, mb: 3 }} variant="outlined">
          <Grid container alignItems="center">
            <Grid item xs={12} sm={8} lg={9}>
              I ended up choosing{' '}
              <Link href="https://nextjs.org/">Next.js</Link> for this project
              as it&apos;s server side rendered and really quick and easy to set
              up
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Box textAlign="center">
                <Link href="https://nextjs.org/">
                  <NextjsLogo
                    color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                    width="7rem"
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </NumberedSection>
      <NumberedSection number={2} header="Building Method">
        <Typography>
          There&apos;s a variety of ways to go about building a React app:
        </Typography>
        <ul>
          <li>
            Building from scratch using Webpack, Parcel, Rollup, or other
            bundlers out there.
          </li>
          <li>Cloning the numerous example template repos out in the wild</li>
          <li>
            <Link href="https://create-react-app.dev/">Create React App</Link>
          </li>
          <li>
            <Link href="https://nextjs.org/">Next.js</Link>
          </li>
        </ul>
        <Paragraph>
          Whichever method you pick, make sure you know what you&apos;re trying
          to accomplish with the app and how you&apos;re going to integrate the
          backend server. Some methods are quicker to get up and running but
          leave less room for customization as they may be more opinionated.
        </Paragraph>
        <Paragraph>
          For this site where the routing isn&apos;t too complicated, no
          authentication, and not a ton of business logic,{' '}
          <Link href=" https://nextjs.org/">Next.js</Link> was a no-brainer.
        </Paragraph>
        <Typography>
          For more complex apps, things like authentication, permissions,
          backend server, API, database, nested routing, etc. need to be
          considered. For my work at Duetto, as it&apos;s a hospitality business
          with a lot of complex cases, I built a React app from scratch using
          Webpack and Express.js. Getting it built up took some more time but as
          a result, it is fully customizable and can deal with almost any
          situation thrown at it.
        </Typography>
      </NumberedSection>
    </>
  );
};

export default Building;
