import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';


const TextPage = ({data}) => {
  let md = data.markdownRemark;
  return (
    <Layout headerText={md.frontmatter.siteTitle}>
      <SiteSection>
        <Text html={md.html} />

      </SiteSection>
      
    </Layout>
  )
}

export default TextPage;

export const pageQuery = graphql`
  query TextPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        siteTitle
      }
      html
    }
  }
`