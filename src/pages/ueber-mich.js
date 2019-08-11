import React from 'react';

import Layout from '../components/Layout';
import TextImage from '../components/TextImage';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';


const About = () => {
  return (
    <Layout headerText="Über mich">
      <SiteSection>
        <Text className="Lorem ipsum"
          headline="Lorem ipsum dolor sit amet"
          subheadline="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          centered={true}
        >
        </Text>
        <TextImage className="pt-5" /> 
      </SiteSection>
      
    </Layout>
  )
}

export default About;
