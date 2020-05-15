import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import TextImage from '../components/TextImage';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';


const About = ({data}) => {
  let md = data.markdownRemark;
  return (
    <Layout headerText={md.frontmatter.siteTitle} headerImage={md.frontmatter.headerImage.childImageSharp} siteTitle={md.frontmatter.name}>
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
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          publicURL
        }
        name
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
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