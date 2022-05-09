import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, Container, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import Link from '../components/Link';
import OverlineBox from '../components/OverlineBox';
import Section from '../components/Section';
import TableOfContents from '../components/TableOfContents';
import TextSection from '../components/TextSection';
import { AnchorInfo } from '../interfaces';

const anchors: AnchorInfo[] = [
  {
    id: 'intro',
    label: 'Introduction',
  },
  {
    id: 'building',
    label: 'Building the App',
  },
  {
    id: 'deployments',
    label: 'Deployments',
  },
  {
    id: 'ux',
    label: 'UI/UX',
  },
  {
    id: 'testing',
    label: 'Testing and Automation',
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
  },
];

interface NumberedSectionProps {
  number: number;
  header: string;
  children: ReactNode;
}

const Paragraph = ({ children }) => (
  <Typography sx={{ pb: 2 }}>{children}</Typography>
);

const NumberedSection = (props: NumberedSectionProps) => {
  const { number, header, children } = props;
  return (
    <>
      <Typography gutterBottom fontWeight="fontWeightBold">
        {`${number}) ${header}`}
      </Typography>
      <Box px={4}>{children}</Box>
    </>
  );
};

interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const TechPage = (props: Props) => (
  <Layout title="About | nehno.com">
    <Section>
      <Container>
        <Box display="flex">
          <Box pr={2}>
            <OverlineBox id="back-to-top-anchor">
              <Typography variant="h3" component="span">
                Tech talk
              </Typography>
              <Typography mt={2} color="text.secondary">
                A place to describe all the nifty stuff used to build this site
              </Typography>
            </OverlineBox>
            <TextSection header={anchors[0].label} id={anchors[0].id}>
              <Typography>
                If you&apos;ve ever worked on a web app whether you&apos;re a
                developer, UX designer, or Product Manager, there&apos;s a lot
                of things to consider even on a seemingly simple app like this.
                I find that looking at example code is sometimes more helpful so
                if you&apos;re not too interested in reading feel free to jump
                to the
              </Typography>
              <Button
                sx={{ mt: 1 }}
                component="a"
                variant="contained"
                endIcon={<GitHubIcon />}
                href="https://github.com/ajlai24/nehno"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </Button>
            </TextSection>
            <TextSection header={anchors[1].label} id={anchors[1].id}>
              <NumberedSection
                number={1}
                header="Client Side vs Server Side Rendering"
              >
                <Paragraph>
                  For blogs and similar type sites, server side rendering is
                  great. Initial load is faster and it generally doesn&apos;t
                  need much more tweaking for SEO. For heftier business type
                  apps with a lot of complex logic, you may consider a client
                  side rendered app using Webpack and Express.js instead. There
                  are some differences to accommodate for between server side
                  and client side rendering but the gap is narrowing. Each has
                  its pros and cons
                </Paragraph>
                <Paragraph>
                  I ended up choosing{' '}
                  <Link href="https://nextjs.org/">Next.js</Link> for this
                  project as it&apos;s server side rendered and really quick and
                  easy to set up
                </Paragraph>
              </NumberedSection>
              <NumberedSection number={2} header="Building Method">
                <Typography>
                  There&apos;s a variety of ways to go about building a React
                  app:
                </Typography>
                <ul>
                  <li>
                    Building from scratch using Webpack, Parcel, Rollup, or
                    other bundlers out there.
                  </li>
                  <li>
                    Cloning the numerous example template repos out in the wild
                  </li>
                  <li>
                    <Link href="https://create-react-app.dev/">
                      Create React App
                    </Link>
                  </li>
                  <li>
                    <Link href="https://nextjs.org/">Next.js</Link>
                  </li>
                </ul>
                <Paragraph>
                  Whichever method you pick, make sure you know what you&apos;re
                  trying to accomplish with the app and how you&apos;re going to
                  integrate the backend server. Some methods are quicker to get
                  up and running but leave less room for customization as they
                  may be more opinionated.
                </Paragraph>
                <Paragraph>
                  For this site where the routing isn&apos;t too complicated, no
                  authentication, and not a ton of business logic,{' '}
                  <Link href=" https://nextjs.org/">Next.js</Link> was a
                  no-brainer.
                </Paragraph>
                <Typography>
                  For more complex apps, things like authentication,
                  permissions, backend server, API, database, nested routing,
                  etc. need to be considered. For my work at Duetto, as
                  it&apos;s a hospitality business with a lot of complex cases,
                  I built a React app from scratch using Webpack and Express.js.
                  Getting it built up took some more time but as a result, it is
                  fully customizable and can deal with almost any situation
                  thrown at it.
                </Typography>
              </NumberedSection>
            </TextSection>
            <TextSection header={anchors[2].label} id={anchors[2].id}>
              <Paragraph>
                Building the app is important and all but thinking about
                deployments is critical as well. After all, you can build the
                most beautiful app ever but if you&apos;re unable to get it
                deployed and in public view then it&apos;s quite useless. As I
                used Next.js to build this site,{' '}
                <Link href="https://vercel.com/">Vercel</Link> was the tool for
                deployments and it was truly a delight. Testable production
                instances get built and deployed on any pushes to any branch.
                Promoting any of those instances to production is available at a
                click of a button.
              </Paragraph>
              <Paragraph>
                After having to deal with old versions of Jenkins and other in
                house built deployments, Vercel was by far the best experience
                I&apos;ve had. And this is using the{' '}
                <Link href="https://vercel.com/pricing">FREE</Link> version too!
                I highly recommend trying out Vercel + Next.js especially for
                anyone trying to build out their own blogs. I don&apos;t
                currently have it in this iteration of this site yet but CMS
                integration was quite easy to do. I had used{' '}
                <Link href="https://prismic.io/">prismic.io</Link> as it has a{' '}
                <Link href="https://prismic.io/docs/technologies/query-data-graphql">
                  GraphQL API endpoint
                </Link>
              </Paragraph>

              <Typography>
                Having worked for Salesforce, I&apos;ve tried Heroku in the past
                and while it was pretty hands off and easy as well, the free
                version will sleep after 30 minutes of inactivity. That means
                the first person to access the site after that 30 minutes of
                activity will see a very extended initial load time. Obviously
                this{' '}
                <Link href="https://www.heroku.com/pricing#containers">
                  pricing model
                </Link>{' '}
                is to try and get users to upgrade to at least the hobby tier.
              </Typography>
            </TextSection>
            <TextSection header={anchors[3].label} id={anchors[3].id}>
              <Paragraph>
                This is where the bulk of my time was spent thinking and coding.
                There are so many little details that go into making a web app
                that are seemingly insignificant but they really add up.
              </Paragraph>
              <ul>
                <li>
                  Responsive design - making the experience as good in different
                  screen sizes, even when on your phone. This not only requires
                  different components for mobile vs desktop (like the menu) but
                  also responsive font sizes and padding for different
                  resolutions.
                </li>
                <li>
                  The sticky table of contents you see to your right on desktop
                  but hidden on mobile
                </li>
                <li>
                  Scroll to top button that appears after a certain distance has
                  been scrolled
                </li>
                <li>
                  Theming - Allowing for ease of changing the theme whether it
                  be spacing, color, dark mode, or any component style
                </li>
                <li>Smooth scrolling</li>
                <li>Transitions / Animations</li>
                <li>Meta Tags for search engines and social media previews</li>
                <li>
                  Local storage - To maintain shallow memory of things on the
                  client side like if the user is in dark mode or not
                </li>
              </ul>
              <Paragraph>
                Of the component libraries I&apos;ve come across, I&apos;ve come
                to really like{' '}
                <Link href="https://mui.com/">
                  Material UI, now known as just MUI
                </Link>
                . It&apos;s really a full suite of components that makes it
                really easy and quick to develop. It&apos;s got theming, darkmode,
                responsive media queries, and lots of components all of which
                are fully customizable
              </Paragraph>
              <Typography>
                bootstrap, foundation, tailwind, css modules
              </Typography>
            </TextSection>

            <TextSection header={anchors[4].label} id={anchors[4].id}>
              <Typography>
                While I didn&apos;t include any testing automation for this
                site, for business apps it&apos;s important to always have unit
                testing as well as end to end testing. These days I&apos;ve been
                using{' '}
                <Link href="https://testing-library.com/docs/react-testing-library/intro/">
                  React Testing Library
                </Link>{' '}
                for unit testing and{' '}
                <Link href="https://www.cypress.io/">Cypress</Link> for end to
                end testing
              </Typography>
            </TextSection>

            <TextSection header={anchors[5].label} id={anchors[5].id}>
              <Paragraph>
                IDE - For frontend development, I&apos;ve tried Atom, Intellij /
                Webstorm, Sublime, and Visual Studio Code. My favorite as of now
                is{' '}
                <Link href="https://code.visualstudio.com/">
                  Visual Studio Code
                </Link>
              </Paragraph>
              <Paragraph>
                Linting - I always use eslint as it&apos;s a good way to find
                and fix issues with code immediately. Generally I like to use{' '}
                <Link href="https://www.npmjs.com/package/eslint-config-airbnb">
                  Airbnb&apos;s eslint config
                </Link>
                , but for this project I just went with the recommended
                typescript eslint. You can see it here in{' '}
                <Button
                  size="small"
                  component="a"
                  variant="contained"
                  endIcon={<GitHubIcon />}
                  href="https://github.com/ajlai24/nehno/blob/main/.eslintrc.json"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  eslintrc.json
                </Button>
              </Paragraph>
              <Paragraph>
                Typescript{' '}
                <Button
                  size="small"
                  component="a"
                  variant="contained"
                  endIcon={<GitHubIcon />}
                  href="https://github.com/ajlai24/nehno/blob/main/tsconfig.json"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tsconfig.json
                </Button>
              </Paragraph>
              <Paragraph>
                Prettier{' '}
                <Button
                  size="small"
                  component="a"
                  variant="contained"
                  endIcon={<GitHubIcon />}
                  href="https://github.com/ajlai24/nehno/blob/main/.prettierrc.json"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  prettierrc.json
                </Button>
              </Paragraph>
            </TextSection>
          </Box>
          <TableOfContents anchors={anchors} />
        </Box>
      </Container>
    </Section>
    <ScrollTop {...props}>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </Layout>
);

export default TechPage;
