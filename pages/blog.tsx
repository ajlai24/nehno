import { Box, Container, Fade, Grid } from '@mui/material';
import BlogPostCard from 'components/BlogPostCard';
import Layout from 'components/Layout';
import PreviewSnackbar from 'components/PreviewSnackbar';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import SkeletonCard from 'components/SkeletonCard';
import { GetAllPostsForBlogPageQuery, Post } from 'lib/generated/graphql';
import { getAllPostsForBlogPage } from 'lib/graphcms';
import { NextPage } from 'next';
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

const BlogPosts = ({
  posts,
}: {
  posts: GetAllPostsForBlogPageQuery['posts'];
}) => (
  <>
    {posts.map((post) => (
      <Grid item key={post.id} xs={12} sm={6} md={4}>
        <BlogPostCard {...post} />
      </Grid>
    ))}
  </>
);

interface BlogProps {
  posts: Post[];
  preview: boolean;
}

const Blog: NextPage = ({ posts, preview }: BlogProps) => {
  const router = useRouter();

  return (
    <Layout title="Blog | nehno.com" meta="blog">
      {preview && <PreviewSnackbar />}
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
  return { props: { posts, preview } };
}
