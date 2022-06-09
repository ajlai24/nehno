import { Box, Typography } from '@mui/material';
import Link from 'components/Link';
import Image from 'next/image';
import MuiPreview from 'public/mui-preview.jpg';
import Paragraph from './Paragraph';

const UIUX = () => (
  <>
    <Paragraph>
      This is where the bulk of my time was spent thinking and coding. There are
      so many little details that go into making a web app that are seemingly
      insignificant but they really add up.
    </Paragraph>
    <ul>
      <li>
        Responsive design - making the experience as good in different screen
        sizes, even when on your phone. This not only requires different
        components for mobile vs desktop (like the menu) but also responsive
        font sizes and padding for different resolutions.
      </li>
      <li>
        The sticky table of contents you see to your right on desktop but hidden
        on mobile
      </li>
      <li>
        Scroll to top button that appears after a certain distance has been
        scrolled
      </li>
      <li>
        Theming - Allowing for ease of changing the theme whether it be spacing,
        color, dark mode, or any component style
      </li>
      <li>Smooth scrolling</li>
      <li>Transitions / Animations</li>
      <li>Meta Tags for search engines and social media previews</li>
      <li>
        Local storage - To maintain shallow memory of things on the client side
        like if the user is in dark mode or not
      </li>
    </ul>

    <Typography variant="h6">MUI</Typography>
    <Typography>
      Of the component libraries I&apos;ve come across, I&apos;ve come to really
      like <Link href="https://mui.com/">MUI</Link>, formerly known as Material
      UI.
    </Typography>

    <Box p={3}>
      <Link href="https://mui.com/">
        <Image src={MuiPreview} alt="mui" />
      </Link>
    </Box>

    <Typography>
      It&apos;s really a full suite of components and tools that makes it really
      easy and quick to develop. It&apos;s got theming, darkmode, responsive
      media queries, and lots of components all of which are fully customizable.
      I&apos;ve used mostly the defaults on this app with some tweaks here and
      there but it really is a powerful and flexible UI Library.
    </Typography>
  </>
);

export default UIUX;
