import { Box, Typography, useTheme } from '@mui/material';
import VercelLogo from '../../public/vercel-logotype-dark.svg';
import CardButton from '../CardButton';
import Link from '../Link';
import Paragraph from './Paragraph';

const Deployments = () => {
  const theme = useTheme();
  return (
    <>
      <Paragraph>
        Building the app is important and all but thinking about deployments is
        critical as well. After all, you can build the most beautiful app ever
        but if you&apos;re unable to get it deployed and in public view then
        it&apos;s quite useless. As I used Next.js to build this site,{' '}
        <Link href="https://vercel.com/">Vercel</Link> was the tool for
        deployments and it was truly a delight. Testable production instances
        get built and deployed on any pushes to any branch. Promoting any of
        those instances to production is available at a click of a button.
      </Paragraph>

      <Paragraph>
        After having to deal with old versions of Jenkins and other in house
        built deployments, Vercel was by far the best experience I&apos;ve had.
        And this is using the{' '}
        <Link href="https://vercel.com/pricing">FREE</Link> version too!
      </Paragraph>

      <Box display="flex" justifyContent="center" mb={2}>
        <CardButton href="https://vercel.com/">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h5" textAlign="center" gutterBottom>
              Try it out!
            </Typography>
            <Box display="flex" justifyContent="center">
              <VercelLogo
                width="10rem"
                color={theme.palette.mode === 'dark' ? 'white' : 'black'}
              />
            </Box>
          </Box>
        </CardButton>
      </Box>

      <Paragraph>
        I highly recommend trying out Vercel + Next.js especially for anyone
        trying to build out their own blogs. I don&apos;t currently have it in
        this iteration of this site yet but CMS integration was quite easy to
        do. I had used <Link href="https://prismic.io/">prismic.io</Link> as it
        has a{' '}
        <Link href="https://prismic.io/docs/technologies/query-data-graphql">
          GraphQL API endpoint
        </Link>
      </Paragraph>

      <Typography>
        Having worked for Salesforce, I&apos;ve tried Heroku in the past and
        while it was pretty hands off and easy as well, the free version will
        sleep after 30 minutes of inactivity. That means the first person to
        access the site after that 30 minutes of activity will see a very
        extended initial load time. Obviously this{' '}
        <Link href="https://www.heroku.com/pricing#containers">
          pricing model
        </Link>{' '}
        is to try and get users to upgrade to at least the hobby tier.
      </Typography>
    </>
  );
};

export default Deployments;
