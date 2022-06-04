import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { GetPostAndMorePostsQuery } from 'lib/generated/graphql';
import BlogPostCard from './BlogPostCard';

const MoreStories = ({
  posts,
}: {
  posts: GetPostAndMorePostsQuery['morePosts'];
}) => (
  <Box mt={4} mb={{ xs: 4, md: 8, lg: 12 }}>
    <Container>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h3" sx={{ mb: 3 }}>
        More Stories
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6}>
            <BlogPostCard {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default MoreStories;
