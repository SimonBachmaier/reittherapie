import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import TextImage from '../components/TextImage';
import HorseCarousel from '../components/HorseCarousel';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';


const Pferd = ({data}) => {
  let md = data.markdownRemark;
  return (
    <Layout headerText={md.frontmatter.siteTitle} headerImage={md.frontmatter.headerImage.childImageSharp} siteTitle={md.frontmatter.name}>
      <SiteSection>
        <Text className=""
          headline={md.frontmatter.name}
          subheadline={md.frontmatter.description}
          centered={true}
        >
        </Text>
        <TextImage className="pt-5"
          fluidImage={md.frontmatter.image.childImageSharp.fluid}
          headline={md.frontmatter.headline}
          subheadline={md.frontmatter.subheadline}
          html={md.html}
        /> 
      </SiteSection>
      <SiteSection>
        <HorseCarousel className="" current={md.fields.slug} />
      </SiteSection>
      
    </Layout>
  )
}

export default Pferd;

export const pageQuery = graphql`
  query HorseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
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
        description
        image {
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