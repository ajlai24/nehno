import { styled, Typography } from '@mui/material';
import Section from './Section';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  '::before': {
    borderLeft: `3rem solid ${theme.palette.primary.main}`,
    content: "''",
    display: 'block',
    height: 3,
    marginBottom: theme.spacing(1.5),
  },
}));

const SectionHeader = ({ title, subtitle }: PageHeaderProps) => (
  <Section>
    <StyledTypography variant="h4" fontWeight="fontWeightBold">{title}</StyledTypography>
    {subtitle && <Typography variant="h6" mt={2} color="grey.500">{subtitle}</Typography>}
  </Section>
);

export default SectionHeader;
