import { Box, Container, Typography } from '@mui/material';
import Layout from '../components/Layout';
import OverlineBox from '../components/OverlineBox';
import Section from '../components/Section';

const TechPage = () => (
  <Layout title="About | nehno.com">
    <Box>
      <Section>
        <Container>
          <OverlineBox>
            <Typography variant="h1" component="span"></Typography>
          </OverlineBox>
          https://github.com/ajlai24/nehno
        </Container>
      </Section>
    </Box>
  </Layout>
);

export default TechPage;
