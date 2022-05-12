import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Container, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import TableOfContents from '../components/TableOfContents';
import Building from '../components/tech/Building';
import Deployments from '../components/tech/Deployments';
import Intro from '../components/tech/Intro';
import Misc from '../components/tech/Misc';
import UIUX from '../components/tech/UIUX';
import TextSection from '../components/TextSection';
import { AnchorInfo } from '../interfaces';

const anchors: AnchorInfo[] = [
  {
    id: 'intro',
    label: 'Introduction',
    children: <Intro />,
  },
  {
    id: 'building',
    label: 'Building the App',
    children: <Building />,
  },
  {
    id: 'deployments',
    label: 'Deployments',
    children: <Deployments />,
  },
  {
    id: 'ux',
    label: 'UI/UX',
    children: <UIUX />,
  },
  {
    id: 'testing',
    label: 'Testing and Automation',
    children: (
      <>
        <Typography>
          While I didn&apos;t include any testing automation for this site, for
          business apps it&apos;s important to always have unit testing as well
          as end to end testing. These days I&apos;ve been using{' '}
          <Link href="https://testing-library.com/docs/react-testing-library/intro/">
            React Testing Library
          </Link>{' '}
          for unit testing and{' '}
          <Link href="https://www.cypress.io/">Cypress</Link> for end to end
          testing
        </Typography>
      </>
    ),
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    children: <Misc />,
  },
];

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
            <SectionHeader
              title="Tech talk"
              subtitle="A place to describe all the nifty stuff used to build this site"
            />

            {anchors.map(({ id, label, children }) => (
              <TextSection key={id} header={label} id={id}>
                {children}
              </TextSection>
            ))}
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
