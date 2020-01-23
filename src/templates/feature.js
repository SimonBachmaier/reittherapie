import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import TextImage from '../components/TextImage';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';


const About = ({data}) => {
  let md = data.markdownRemark;
  return (
    <Layout headerText={md.frontmatter.siteTitle}>
      <SiteSection>
        <TextImage className="pt-5"
          fluidImage={md.frontmatter.image.childImageSharp.fluid}
          headline={md.frontmatter.headline}
          subheadline={md.frontmatter.subheadline}
          html={md.frontmatter.textNextToImage}
        >
        </TextImage> 
        <Text html={md.html} />
      </SiteSection>

    </Layout>
  )
}

export default About;

export const pageQuery = graphql`
  query FeaturePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        siteTitle
        name
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headline
        subheadline
        textNextToImage
      }
      html
    }
  }
`