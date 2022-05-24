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
  Typography,
} from '@mui/material';
import Image from 'next/image';

const StyledTypography = styled(Typography)({ marginBottom: '1.25rem' });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  '& .MuiTypography-root': {
    margin: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
    <div style={{ width, position: 'relative' }}>
      <Image
        alt={altText}
        src={src}
        layout="responsive"
        objectFit="contain"
        width={width}
        height={height}
        title={title}
      />
    </div>
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
  class: ({ children, className }) => (
    <Box
      className={className}
      {...(className === 'center' && {
        display: 'flex',
        justifyContent: 'center',
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
