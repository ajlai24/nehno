import { Box, Container, Grid, Typography } from '@mui/material';
import CardButton from './CardButton';
import Section from './Section';

const cards = [
  {
    id: 'react',
    header: 'React',
    subheader: 'Test',
    url: 'https://www.reactjs.org',
    avatarSrc: 'reactLogo.svg',
  },
  {
    id: 'mui',
    header: 'MUI',
    subheader: 'test',
    url: 'https://mui.com/',
    avatarSrc: 'muiLogo.svg',
  },
  {
    id: 'storybook',
    header: 'Storybook',
    subheader: 'test',
    url: 'https://storybook.js.org/',
    avatarSrc: 'storybookLogo.png',
  },
  {
    id: 'webpack',
    header: 'Webpack',
    subheader: 'test',
    url: 'https://webpack.js.org/',
    avatarSrc: 'webpackLogo.svg',
  },
  {
    id: 'typescript',
    header: 'Typescript',
    subheader: 'test',
    url: 'https://www.typescriptlang.org/',
    avatarSrc: 'tsLogo.svg',
  },
  {
    id: 'nodejs',
    header: 'Node.js',
    subheader: 'test',
    url: 'https://nodejs.org/',
    avatarSrc: 'nodejsLogo.svg',
  },
  {
    id: 'graphql',
    header: 'GraphQL',
    subheader: 'test',
    url: 'https://graphql.org/',
    avatarSrc: 'graphqlLogo.svg',
  },
  {
    id: 'sourcetree',
    header: 'Sourcetree',
    subheader: 'test',
    url: 'https://www.sourcetreeapp.com/',
    avatarSrc: 'sourcetreeLogo.svg',
  },
];

const TechInterestsSection = () => (
  <Section>
    <Container>
      <Box>
        <Typography variant="h4">Stuff I work with</Typography>
      </Box>
      <Grid container spacing={4} mt={2}>
        {cards.map((card) => (
          <Grid xs={12} sm={6} md={4} lg={3} item key={card.id}>
            <CardButton {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default TechInterestsSection;
