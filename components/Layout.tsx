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

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Box minHeight="100%">
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
      <style>
        {`
            #__next {
              min-height: 100%;
            }
          `}
      </style>
    </Head>
    <AppNav />
    <Box minHeight="100%">
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
