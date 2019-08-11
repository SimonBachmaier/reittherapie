import React from 'react';

import Layout from '../../components/Layout';
import TextImage from '../../components/TextImage';
import HorseCarousel from '../../components/HorseCarousel';
import Text from '../../components/Text';
import SiteSection from '../../components/SiteSection';


const Pferd = () => {
  return (
    <Layout headerText="Unsere Therapiepferde">
      <SiteSection>
        <Text className=""
          headline="Duna"
          subheadline="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          centered={true}
        >
        </Text>
        <TextImage className="pt-5" /> 
      </SiteSection>
      <SiteSection>
        <HorseCarousel className="" />
      </SiteSection>
      
    </Layout>
  )
}

export default Pferd;
