import { Box, Container, Grid, styled, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import Image from 'next/image';
import Section from '../components/Section';
import DuettoLogo from '../public/duettoLogo.svg';
import SalesforceLogo from '../public/salesforceLogo.svg';
import strideLogo from '../public/stride.png';

const today = new Date();

const StyledBox = styled(Box)(({ theme }) => ({
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.short,
  }),
  ':hover': {
    transform: 'scale(1.1)',
  },
}));

const CompaniesSection = () => (
  <Section
    sx={(theme) => ({
      backgroundColor:
        theme.palette.mode === 'dark'
          ? theme.palette.background.paper
          : blue[900],
      padding: {
        md: theme.spacing(18, 0),
        lg: theme.spacing(20, 0),
      },
    })}
  >
    <Container>
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <StyledBox>
            <a
              href="https://www.duettocloud.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DuettoLogo color="white" width="100%" height="2.5rem" />
            </a>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledBox width="100%" textAlign="center">
            <a
              href="https://www.salesforce.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SalesforceLogo />
            </a>
          </StyledBox>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledBox
            sx={{ width: '100%', height: '2.5rem', position: 'relative' }}
          >
            <a
              href="https://stridehealth.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <Image
                  src={strideLogo}
                  placeholder="blur"
                  alt="Stride"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </StyledBox>
        </Grid>
      </Grid>
      <Typography
        textAlign="center"
        color="common.white"
        mt={6}
        sx={(theme) => ({
          marginTop: {
            sm: theme.spacing(6),
            md: theme.spacing(8),
            lg: theme.spacing(12),
          },
        })}
        fontWeight="lighter"
      >
        {today.getFullYear() - 2008} years of experience at different sized
        companies working with a diverse range of brilliant people
      </Typography>
    </Container>
  </Section>
);

export default CompaniesSection;
