import {
  Box,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const StyledTypography = styled(Typography)({ marginBottom: '1.25rem' });

const RichTextRenderers = {
  a: ({ children, href, openInNewTab }) => (
    <Link
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  ),
  h1: ({ children }) => (
    <StyledTypography variant="h1">{children}</StyledTypography>
  ),
  h2: ({ children }) => (
    <StyledTypography variant="h2">{children}</StyledTypography>
  ),
  h3: ({ children }) => (
    <StyledTypography variant="h3">{children}</StyledTypography>
  ),
  h4: ({ children }) => (
    <StyledTypography variant="h4">{children}</StyledTypography>
  ),
  h5: ({ children }) => (
    <StyledTypography variant="h5">{children}</StyledTypography>
  ),
  h6: ({ children }) => (
    <StyledTypography variant="h6">{children}</StyledTypography>
  ),
  p: ({ children }) => (
    <StyledTypography sx={{ marginBottom: 2 }}>{children}</StyledTypography>
  ),
  bold: ({ children }) => (
    <Typography component="span" fontWeight="fontWeightBold">
      {children}
    </Typography>
  ),
  blockquote: ({ children }) => {
    return (
      <Box
        component="blockquote"
        pl={2}
        borderLeft="4px solid"
        borderColor="primary.dark"
      >
        <Typography>{children}</Typography>
      </Box>
    );
  },
  code: ({ children }) => (
    <Typography
      component="span"
      sx={{
        backgroundColor: 'rgba(175,184,193,0.2)',
        padding: '0.2rem 0.4rem',
        margin: 0,
        borderRadius: '6px',
        fontSize: '85%',
      }}
    >
      {children}
    </Typography>
  ),
  code_block: ({ children }) => {
    return (
      <Box
        component="pre"
        sx={{
          padding: 2,
          overflow: 'auto',
          fontSize: '85%',
          // line-height: 1.45;
          backgroundColor: '#f6f8fa',
          borderRadius: '6px',
        }}
      >
        <code>{children}</code>
      </Box>
    );
  },
  table: ({ children }) => <Table>{children}</Table>,
  table_head: ({ children }) => <TableHead>{children}</TableHead>,
  table_header_cell: ({ children }) => <TableCell>{children}</TableCell>,
  table_body: ({ children }) => <TableBody>{children}</TableBody>,
  table_row: ({ children }) => <TableRow>{children}</TableRow>,
  table_cell: ({ children }) => <TableCell>{children}</TableCell>,
};

export default RichTextRenderers;
