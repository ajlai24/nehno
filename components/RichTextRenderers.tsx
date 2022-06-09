import {
  Box,
  Link,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import Image from 'next/image';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  '& .MuiTypography-root': {
    margin: 0,
  },
}));

const StyledTableRow = styled(TableRow)({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
});

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
  img: ({ src, title, width, height, altText }) => (
    <Box maxWidth={width} margin="auto">
      <Image
        alt={altText}
        src={src}
        layout="responsive"
        objectFit="contain"
        width={width}
        height={height}
        title={title}
      />
    </Box>
  ),
  h1: ({ children }) => (
    <Typography variant="h1" paragraph>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h2" paragraph>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h3" paragraph>
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography variant="h4" paragraph>
      {children}
    </Typography>
  ),
  h5: ({ children }) => (
    <Typography variant="h5" paragraph>
      {children}
    </Typography>
  ),
  h6: ({ children }) => (
    <Typography variant="h6" paragraph>
      {children}
    </Typography>
  ),
  p: ({ children }) => <Typography paragraph>{children}</Typography>,
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
  class: ({ children, className }) => (
    <Box
      className={className}
      {...(className === 'flex' && {
        display: 'flex',
      })}
    >
      {children}
    </Box>
  ),
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
        sx={(theme) => ({
          padding: 2,
          overflow: 'auto',
          fontSize: '85%',
          borderRadius: 1,
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.background.paper
              : theme.palette.grey[100],
        })}
      >
        <code>{children}</code>
      </Box>
    );
  },
  table: ({ children }) => (
    <TableContainer component={Paper}>
      <Table>{children}</Table>
    </TableContainer>
  ),
  table_head: ({ children }) => <TableHead>{children}</TableHead>,
  table_header_cell: ({ children }) => (
    <StyledTableCell>{children}</StyledTableCell>
  ),
  table_body: ({ children }) => <TableBody>{children}</TableBody>,
  table_row: ({ children }) => <StyledTableRow>{children}</StyledTableRow>,
  table_cell: ({ children }) => <StyledTableCell>{children}</StyledTableCell>,
};

export default RichTextRenderers;
