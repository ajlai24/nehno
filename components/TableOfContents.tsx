import { Box, Link as MuiLink, Typography } from '@mui/material';
import { AnchorInfo } from 'interfaces';
import Link from 'next/link';

const TableOfContents = ({ anchors }: { anchors: AnchorInfo[] }) => {
  return (
    <Box
      position="sticky"
      display={{
        xs: 'none',
        md: 'block',
      }}
      top={(theme) => ({
        sm: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(4)})`,
        md: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(8)})`,
        lg: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(12)})`,
      })}
      alignSelf="flex-start"
      minWidth="240px"
      px={2}
    >
      <nav aria-label="Table of contents">
        <Typography variant="overline">Contents</Typography>
        {anchors.map((anchorInfo) => (
          <Box key={anchorInfo.id} mt={1}>
            <MuiLink
              href={`#${anchorInfo.id}`}
              component={Link}
              variant="subtitle1"
            >
              {anchorInfo.label}
            </MuiLink>
          </Box>
        ))}
      </nav>
    </Box>
  );
};

export default TableOfContents;
