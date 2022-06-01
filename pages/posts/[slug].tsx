import { RichText } from '@graphcms/rich-text-react-renderer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, Container, Fab, Typography } from '@mui/material';
import Layout from 'components/Layout';
import MoreStories from 'components/MoreStories';
import PostHeader from 'components/PostHeader';
import PreviewSnackbar from 'components/PreviewSnackbar';
import RichTextRenderers from 'components/RichTextRenderers';
import ScrollTop from 'components/ScrollTop';
import { Post } from 'interfaces';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DiscussionEmbed } from 'disqus-react';

interface BlogPostProps {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
}

const BlogPost = ({ post, preview, morePosts }: BlogPostProps) => {
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
      <Container sx={{ mt: 4, mb: { xs: 4, md: 8, lg: 12 } }}>
        {router.isFallback ? (
          <Typography variant="h2">Loading...</Typography>
        ) : (
          <>
            {preview && <PreviewSnackbar />}
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
              <Box mt={6}>
                <RichText
                  content={post.content.raw}
                  renderers={RichTextRenderers}
                />
              </Box>
            </article>
            {post.allowComments && (
              <Box my={6}>
                <DiscussionEmbed
                  shortname="nehno"
                  config={{
                    url: post.slug,
                    identifier: post.id,
                    title: post.title,
                  }}
                />
              </Box>
            )}
          </>
        )}
      </Container>
      {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Layout>
  );
};
export default BlogPost;

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
