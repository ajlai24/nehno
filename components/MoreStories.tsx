import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { Post } from 'interfaces';
import BlogPostCard from './BlogPostCard';

const MoreStories = ({ posts }: { posts: Post[] }) => (
  <Box mt={4}>
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
