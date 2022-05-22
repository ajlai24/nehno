import { RichText } from '@graphcms/rich-text-react-renderer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Button,
  Container,
  Divider,
  Snackbar,
  Typography,
  useTheme,
} from '@mui/material';
import Layout from 'components/Layout';
import Section from 'components/Section';
import { Post } from 'interfaces';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import renderers from './renderers';

interface BlogPostProps {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
}

export default function BlogPost({ post, morePosts, preview }: BlogPostProps) {
  const router = useRouter();
  const theme = useTheme();

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
      <Section>
        <Container>
          {/* <Header /> */}
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

              <Typography variant="h2">{post.title}</Typography>
              <article>
                <Head>
                  <title>{post.title}</title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                {/* <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                /> */}
                {/* <PostBody content={post.content} /> */}
                <RichText content={post.content.raw} renderers={renderers} />
              </article>
              <Divider />
              {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
            </>
          )}
        </Container>
      </Section>
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
