import { Link as MuiLink, LinkProps } from '@mui/material';

const Link = ({ children, href }: LinkProps) => (
  <MuiLink href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </MuiLink>
);

export default Link;
