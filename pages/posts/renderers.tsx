import {
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const renderers = {
  a: ({ children, href, openInNewTab }) => (
    <Link
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  ),
  h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
  h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
  h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
  h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
  h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
  h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
  p: ({ children }) => <Typography>{children}</Typography>,
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
      // <pre className="line-numbers language-none">
      //   <code>{children}</code>
      // </pre>
    );
  },
  table: ({ children }) => <Table>{children}</Table>,
  table_head: ({ children }) => <TableHead>{children}</TableHead>,
  table_header_cell: ({ children }) => <TableCell>{children}</TableCell>,
  table_body: ({ children }) => <TableBody>{children}</TableBody>,
  table_row: ({ children }) => <TableRow>{children}</TableRow>,
  table_cell: ({ children }) => <TableCell>{children}</TableCell>,
};

export default renderers;
