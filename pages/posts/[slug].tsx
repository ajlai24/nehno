import { RichText } from '@graphcms/rich-text-react-renderer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Container,
  Divider,
  Fab,
  Snackbar,
  Typography,
} from '@mui/material';
import Layout from 'components/Layout';
import PostHeader from 'components/PostHeader';
import ScrollTop from 'components/ScrollTop';
import { Post } from 'interfaces';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import renderers from './renderers';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface BlogPostProps {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
}

export default function BlogPost({ post, preview }: BlogPostProps) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title="Blog | nehno.com" meta="blog">
      <Container sx={{ mt: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          size="large"
          onClick={() => router.back()}
        >
          Back
        </Button>
      </Container>
      <Container>
        {router.isFallback ? (
          <Typography variant="h2">Loading...</Typography>
        ) : (
          <>
            {preview && (
              <Snackbar
                open
                message="You are in Preview Mode"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                action={
                  <Button
                    color="secondary"
                    size="small"
                    href="/api/exit-preview"
                  >
                    Exit Preview mode
                  </Button>
                }
              />
            )}
            <article>
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                isoDate={post.date}
                authors={post.authors}
              />
              <Box mt={4}>
                <RichText content={post.content.raw} renderers={renderers} />
              </Box>
            </article>
            <Divider />
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPostsWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
