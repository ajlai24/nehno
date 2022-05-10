import { Container, Grid, Typography } from '@mui/material';
import TechCardButton from './TechCardButton';
import OverlineBox from './OverlineBox';
import Section from './Section';

const cards = [
  {
    id: 'react',
    header: 'React',
    subheader: 'A JavaScript library for building user interfaces',
    url: 'https://www.reactjs.org',
    avatarSrc: 'reactLogo.svg',
  },
  {
    id: 'mui',
    header: 'MUI',
    subheader: 'A very comprehensive suite of UI Tools and component library',
    url: 'https://mui.com/',
    avatarSrc: 'muiLogo.svg',
  },
  {
    id: 'storybook',
    header: 'Storybook',
    subheader:
      'One of my favorite tools to build, preview, and test UI components',
    url: 'https://storybook.js.org/',
    avatarSrc: 'storybookLogo.png',
  },
  {
    id: 'webpack',
    header: 'Webpack',
    subheader: 'Powerful and highly configurable module bundler',
    url: 'https://webpack.js.org/',
    avatarSrc: 'webpackLogo.svg',
  },
  {
    id: 'nodejs',
    header: 'Node.js',
    subheader: 'A JavaScript runtime for scalable network applications',
    url: 'https://nodejs.org/',
    avatarSrc: 'nodejsLogo.svg',
  },
  {
    id: 'graphql',
    header: 'GraphQL',
    subheader:
      'Great query language so the client can request exactly what it needs',
    url: 'https://graphql.org/',
    avatarSrc: 'graphqlLogo.svg',
  },
  {
    id: 'reactrouter',
    header: 'React Router',
    subheader: 'Easy to use React routing library',
    url: 'https://reactrouter.com/',
    avatarSrc: 'reactrouterLogo.svg',
  },
  {
    id: 'typescript',
    header: 'Typescript',
    subheader: 'Strongly typed javascript',
    url: 'https://www.typescriptlang.org/',
    avatarSrc: 'tsLogo.svg',
  },
];

const TechInterestsSection = () => (
  <Section>
    <Container>
      <OverlineBox sx={{ px: 10 }}>
        <Typography variant="h4" color="primary.dark">
          Tech and tools I like to work with
        </Typography>
      </OverlineBox>
      <Grid container spacing={4} mt={2}>
        {cards.map((card) => (
          <Grid xs={12} sm={6} md={4} lg={3} item key={card.id}>
            <TechCardButton {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default TechInterestsSection;
