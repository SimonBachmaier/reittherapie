import React from 'react';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import SiteSection from '../../components/SiteSection';
import FeaturesSection from '../../components/FeaturesSection';


const Leistungen = () => {
  return (
    <Layout headerText="Leistungen">
      <SiteSection>
        <Text className="mb-5"
          headline="Reittherapie für ein gesünderes Leben"
          subheadline="Hier bekommen Sie eine Übersicht über meine Qualifikationen und unsere angebotenen Leistungen."
          centered={true}
        >
        </Text>
        <FeaturesSection />
      </SiteSection>
      
    </Layout>
  )
}

export default Leistungen;
