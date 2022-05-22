import { Box, Container, Fade, Grid } from '@mui/material';
import BlogPostCard from 'components/BlogPostCard';
import Layout from 'components/Layout';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import SkeletonCard from 'components/SkeletonCard';
import { Post } from 'interfaces';
import { getAllPostsForBlogPage } from 'lib/graphcms';
import { useRouter } from 'next/router';
import { TransitionGroup } from 'react-transition-group';

const SkeletonGrid = () => (
  <>
    {Array.from(new Array(6)).map((item, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <TransitionGroup key={index}>
          <Fade
            timeout={1000}
            style={{
              transformOrigin: 'top left',
              transitionDelay: `${200 * index}ms`,
            }}
          >
            <Box>
              <SkeletonCard />
            </Box>
          </Fade>
        </TransitionGroup>
      </Grid>
    ))}
  </>
);

const BlogPosts = ({ posts }: { posts: Post[] }) => (
  <>
    {posts.map((post) => (
      <Grid item key={post.slug} xs={12} sm={6} md={4}>
        <BlogPostCard {...post} />
      </Grid>
    ))}
  </>
);

const Blog = ({ posts }) => {
  const router = useRouter();

  return (
    <Layout title="Blog | nehno.com" meta="blog">
      <Section>
        <Container>
          <SectionHeader title="Blog" subtitle="Random musings" />
          <Box mt={4}>
            <Grid container spacing={4}>
              {router.isFallback ? (
                <SkeletonGrid />
              ) : (
                <BlogPosts posts={posts} />
              )}
            </Grid>
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForBlogPage(preview)) || [];
  return { props: { posts } };
}
