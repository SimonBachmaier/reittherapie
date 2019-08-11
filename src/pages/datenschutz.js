import React from 'react';

import Layout from '../components/Layout';
import TextSection from '../components/TextSection';


export default ({ data }) => {
//   console.log(data, this)
//   const { frontmatter } = data.markdownRemark
  
  return (
    <Layout headerText="Datenschutzerklärung" hideImage={true}>
      <TextSection 
        headline=""
        subheadline=""
      >
          <p>Seite befindet sich derzeit in der Erstellung. Umsatzsteuer-Identifikationsnummer folgt in Kürze.</p>
      </TextSection>
    </Layout>
  )
}
