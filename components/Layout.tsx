import { Box, Fade } from '@mui/material';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { TransitionGroup } from 'react-transition-group';
import AppNav from './AppNav';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
  meta?: string;
};

const Layout = ({ children, title = 'nehno.com', meta }: Props) => {
  const subpageMeta = meta ? `%20%7C%20${meta}` : '';
  const metaImage = `https://og-image.vercel.app/**nehno**${subpageMeta}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`;
  const description =
    "A frontend developer's playground for learning and experimentation";

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Primary Meta Tags */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nehno.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />

        {/*  Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nehno.com/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />
      </Head>
      <AppNav />
      <Box flex="1 1 auto">
        <TransitionGroup>
          <Fade timeout={500}>
            <Box>{children}</Box>
          </Fade>
        </TransitionGroup>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
