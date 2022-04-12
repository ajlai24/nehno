import { Box, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { TransitionGroup } from 'react-transition-group';
import AppNav from './AppNav';
import Footer from './Footer';

type Props = {
  children?: ReactNode
  title?: string
}

const GridLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  height: '100%',
  gridTemplateRows: 'auto 1fr',
  gridTemplateAreas: `
      "header"
      "content"
      "footer"
    `,
  gridAutoRows: 'minmax(min-content, max-content)',
}));

const Main = styled(Box)(({ theme }) => ({
  height: '100%',
  gridArea: 'content',
}));

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <GridLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>
        {`
            #__next {
              height: 100%;
            }
          `}
      </style>
    </Head>
    <AppNav />
    <Main>
      <TransitionGroup>
        <Fade timeout={750}>
          <Box>
            {children}
          </Box>
        </Fade>
      </TransitionGroup>
    </Main>
    <Footer />
  </GridLayout>
)

export default Layout
