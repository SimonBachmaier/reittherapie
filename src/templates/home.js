import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import TextImage from '../components/TextImage';
import HorseCarousel from '../components/HorseCarousel';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';
import FeaturesSection from '../components/FeaturesSection';


const IndexPage = ({ data }) => {
  let md = data.markdownRemark;
  return (
    <Layout headerText={md.frontmatter.siteTitle} fancyFont={true} headerImage={md.frontmatter.headerImage.childImageSharp}>

      <SiteSection> 
        <Text className=""
          headline={md.frontmatter.headline}
          subheadline={md.frontmatter.subheadline}
          html={md.html}
         /> 
      </SiteSection>

      <SiteSection> 
        <HorseCarousel className="" />
      </SiteSection>
      
      <SiteSection>
        <Text centered={true}
              subheadline="Arbeit am Pferd"
          >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam illum maiores adipisci pariatur, eveniet.</p>
          </Text>

          <FeaturesSection />
      </SiteSection>
    
    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        siteTitle
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          publicURL
        }
        headline
        subheadline
      }
      html
    }
  }
`
