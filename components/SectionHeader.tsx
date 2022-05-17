import { Typography } from '@mui/material';
import OverlineBox from './OverlineBox';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: PageHeaderProps) => (
  <OverlineBox id="back-to-top-anchor">
    <Typography variant="h2" component="span" fontWeight="fontWeightBold">
      {title}
    </Typography>
    <Typography variant="h6" mt={2} color="text.secondary">
      {subtitle}
    </Typography>
  </OverlineBox>
);

export default SectionHeader;
