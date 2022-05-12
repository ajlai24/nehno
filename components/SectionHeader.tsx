import { Typography } from '@mui/material';
import OverlineBox from './OverlineBox';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: PageHeaderProps) => (
  <OverlineBox id="back-to-top-anchor">
    <Typography variant="h3" component="span">
      {title}
    </Typography>
    <Typography mt={2} color="text.secondary">
      {subtitle}
    </Typography>
  </OverlineBox>
);

export default SectionHeader;
