import { Box, Fade } from '@mui/material';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { TransitionGroup } from 'react-transition-group';
import AppNav from './AppNav';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'nehno.com' }: Props) => (
  <Box display="flex" flexDirection="column" height="100%">
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

      <meta name="title" content={title} />
      <meta name="description" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nehno.com/" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="A frontend developer's playground for learning and experimentation"
      />
      <meta property="og:image" content="" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://nehno.com/" />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content="A frontend developer's playground for learning and experimentation"
      />
      <meta property="twitter:image" content="" />

      <style>
        {`
            #__next {
              height: 100%;
            }
          `}
      </style>
    </Head>
    <AppNav />
    <Box
      sx={{
        flex: '1 1 auto',
      }}
    >
      <TransitionGroup>
        <Fade timeout={500}>
          <Box>{children}</Box>
        </Fade>
      </TransitionGroup>
    </Box>
    <Footer />
  </Box>
);

export default Layout;
