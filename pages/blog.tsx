import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  CircularProgress,
  Container,
  Fade,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import BlogPostCard from 'components/BlogPostCard';
import Layout from 'components/Layout';
import PreviewSnackbar from 'components/PreviewSnackbar';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import SkeletonCard from 'components/SkeletonCard';
import { Post } from 'interfaces';
import { getAllPostsForBlogPage, searchPostsForBlogPage } from 'lib/graphcms';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
      <Grid item key={post.id} xs={12} sm={6} md={4}>
        <BlogPostCard {...post} />
      </Grid>
    ))}
  </>
);

const Blog = ({ posts, preview }) => {
  const [currentPosts, setPosts] = useState(posts);
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const router = useRouter();

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLElement>) => {
    // Enter key
    if (event.key === 'Enter') {
      setIsSearching(true);
      const searchResults =
        (await searchPostsForBlogPage(searchValue, preview)) || [];
      setPosts(searchResults);
      setIsSearching(false);
    }
  };

  return (
    <Layout title="Blog | nehno.com" meta="blog">
      {preview && <PreviewSnackbar />}
      <Section>
        <Container>
          <SectionHeader title="Blog" subtitle="Random musings" />

          <OutlinedInput
            sx={{ width: '100%', mt: 2 }}
            size="small"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Find a post..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              searchValue?.length > 0 && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchValue('')}>
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              )
            }
          />

          {isSearching && (
            <Box my={4} display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          )}

          <Box mt={4}>
            <Grid container spacing={4}>
              {router.isFallback ? (
                <SkeletonGrid />
              ) : (
                <BlogPosts posts={currentPosts} />
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
