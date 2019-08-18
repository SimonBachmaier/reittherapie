import React from 'react';

import Layout from '../../components/Layout';
import HorseCarousel from '../../components/HorseCarousel';
import Text from '../../components/Text';
import SiteSection from '../../components/SiteSection';


const Pferd = () => {
  return (
    <Layout headerText="Unsere Therapiepferde">
      <SiteSection>
        <Text className=""
          headline=""
          subheadline="Auf folgenden Seiten können Sie sich einen Überblick über unsere Therapiepferde machen. Klicken Sie einfach auf das entsprechende Bild um mehr über das Tier zu erfahren"
          centered={true}
        >
        </Text>
      </SiteSection>
      <SiteSection>
        <HorseCarousel className="" />
      </SiteSection>
      
    </Layout>
  )
}

export default Pferd;
