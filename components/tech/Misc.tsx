import { Avatar, Box, Grid, Typography } from '@mui/material';
import { StyledPaper } from 'components/CardButton';
import Link from 'components/Link';

const cards = [
  {
    id: 'vscode',
    header: 'IDE',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    body: (
      <Typography>
        For frontend development, I&apos;ve tried Atom, Intellij / Webstorm,
        Sublime, and Visual Studio Code. My favorite as of now is{' '}
        <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>.
        After using it on both Macs and PCs, It&apos;s performant, doesn&apos;t
        crash on me, and it&apos;s got lots of handy installable plugins
      </Typography>
    ),
  },
  {
    id: 'lint',
    header: 'Lint',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
    body: (
      <Typography>
        I always use eslint as it&apos;s a good way to find and fix issues with
        code immediately. Generally I like to use{' '}
        <Link href="https://www.npmjs.com/package/eslint-config-airbnb">
          Airbnb&apos;s eslint config
        </Link>
        , but for this project I just went with the{' '}
        <Link href="https://github.com/ajlai24/nehno/blob/main/.eslintrc.json">
          recommended typescript eslint
        </Link>
        .
      </Typography>
    ),
  },
  {
    id: 'prettier',
    header: 'Prettier',
    src: 'prettierLogo.png',
    body: (
      <Typography>
        There was a time where I was perfectly content with using eslint as it
        can do some formatting along with its semantic analysis but now I use
        both Prettier and eslint. Here&apos;s this project&apos;s{' '}
        <Link href="https://github.com/ajlai24/nehno/blob/main/.prettierrc.json">
          simple prettier config
        </Link>{' '}
        - not much different from the default
      </Typography>
    ),
  },
  {
    id: 'typescript',
    header: 'Typescript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    body: (
      <>
        <Typography>
          This project is only using a{' '}
          <Link href="https://github.com/ajlai24/nehno/blob/main/tsconfig.json">
            simple typescript configuration
          </Link>{' '}
          but tsc init makes a comprehensive tsconfig.json file with pretty good
          description comments that you can customize to your liking if you run
          the init command:
        </Typography>
        <div>
          <code>npx -p typescript tsc --init</code>
        </div>
      </>
    ),
  },
  {
    id: 'sourcetree',
    header: 'Sourcetree',
    src: 'sourcetreeLogo.svg',
    body: (
      <Typography>
        It&apos;s not perfect and obviously doesn&apos;t have the full
        capabilities of all Git commands, but it&apos;s actually a pretty decent
        UI for Git. I highly recommend it for developers who are new to Git as
        it gives somewhat of a visual representation of what&apos;s going on. I
        still like to use it to this day as it simplifies certains actions into
        a couple of button clicks like merging the latest develop into my
        branch. <Link href="https://www.sourcetreeapp.com/">Get it here</Link>
      </Typography>
    ),
  },
];

const Misc = () => (
  <Grid container spacing={2}>
    {cards.map((card) => {
      const { header, body, src } = card;
      return (
        <Grid item key={card.id}>
          <StyledPaper variant="outlined">
            <Box mr={3} display="flex" alignItems="center">
              <Avatar alt={header} src={src} srcSet={src} variant="square" />
            </Box>
            <Box>
              <Typography fontWeight="fontWeightBold">{header}</Typography>
              {body}
            </Box>
          </StyledPaper>
        </Grid>
      );
    })}
  </Grid>
);

export default Misc;
