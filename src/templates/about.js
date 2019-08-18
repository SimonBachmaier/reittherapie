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
          html={md.html}
        >
        </TextImage> 
        <Text html={md.html} />
      </SiteSection>
      
    </Layout>
  )
}

export default About;

export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: {templateKey: { eq: "about" }}) {
      frontmatter {
        siteTitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headline
        subheadline
      }
      html
    }
  }
`