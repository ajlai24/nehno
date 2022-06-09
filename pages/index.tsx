import { NextPage } from 'next';
import CompaniesSection from '../components/CompaniesSection';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import TechInterestsSection from '../components/TechInterestsSection';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | nehno.com">
      <Hero />
      <CompaniesSection />
      <TechInterestsSection />
    </Layout>
  );
};

export default IndexPage;
