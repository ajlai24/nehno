import { Box, Container, Grid, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import Section from '../components/Section';
import DuettoLogo from '../public/duettoLogo.svg';
import SalesforceLogo from '../public/salesforceLogo.svg';
import strideLogo from '../public/stride.png';

const today = new Date();

const CompaniesSection = () => (
  <Section
    sx={{
      backgroundColor: (theme: Theme) => theme.palette.primary.dark,
    }}
  >
    <Container>
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <DuettoLogo color="white" width="100%" height="2.5rem" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box width="100%" textAlign="center">
            <SalesforceLogo />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            style={{ width: '100%', height: '2.5rem', position: 'relative' }}
          >
            <Image
              src={strideLogo}
              placeholder="blur"
              alt="Stride"
              height="100%"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Grid>
      </Grid>
      <Typography textAlign="center" color="primary.contrastText" mt={6}>
        {today.getFullYear() - 2008} years of experience at small, mid, and
        large size companies
      </Typography>
    </Container>
  </Section>
);

export default CompaniesSection;
