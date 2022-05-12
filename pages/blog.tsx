import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Skeleton,
} from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

const SkeletonCard = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      }
      title={
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      }
      subheader={<Skeleton animation="wave" height={10} width="40%" />}
    />
    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
    <CardContent>
      <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </>
    </CardContent>
  </Card>
);

const BlogPage = () => (
  <Layout title="About | nehno.com">
    <Section>
      <Container>
        <SectionHeader title="Blog" subtitle="Coming soon" />

        <Box mt={4}>
          <Grid container spacing={4}>
            {Array.from(new Array(6)).map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <SkeletonCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  </Layout>
);

export default BlogPage;
