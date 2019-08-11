import React from 'react';

import Layout from '../components/Layout';
import Text from '../components/Text';


export default ({ data }) => {
//   console.log(data, this)
//   const { frontmatter } = data.markdownRemark
  
  return (
    <Layout headerText="Datenschutzerklärung" hideImage={true}>
      <Text 
        headline=""
        subheadline=""
      >
          <p>Seite befindet sich derzeit in der Erstellung. Umsatzsteuer-Identifikationsnummer folgt in Kürze.</p>
      </Text>
    </Layout>
  )
}
