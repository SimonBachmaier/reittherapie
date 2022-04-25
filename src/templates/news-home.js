import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import TextImage from '../components/TextImage';
import HorseCarousel from '../components/HorseCarousel';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';


const NewsHome = ({data}) => {
  let md = data.markdownRemark;

  let imageRight = true;
  const newsItems = data.allMarkdownRemark.edges.map((e) => {
    imageRight = !imageRight;
    return (<React.Fragment>
        <TextImage className="pt-5"
          fluidImage={e.node.frontmatter.image.childImageSharp.fluid}
          headline={e.node.frontmatter.headline}
          subheadline={e.node.frontmatter.subheadline}
          html={e.node.html}
          imageRight={imageRight}
        /> 
    </React.Fragment>);
    });
  return (
    <Layout headerText={md.frontmatter.siteTitle} headerImage={md.frontmatter.headerImage.childImageSharp} siteTitle={md.frontmatter.name}>

      <SiteSection>
        <Text className=""
          headline={md.frontmatter.siteTitle}
          subheadline={md.frontmatter.description}
          centered={true}
        />
        {newsItems}
      </SiteSection>

      <SiteSection>
        <HorseCarousel className="" />
      </SiteSection>
      
    </Layout>
  )
}

export default NewsHome;

export const pageQuery = graphql`
  query NewsHomeByID($id: String!) {
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
        description
      }
    }
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news"}}}) {
      edges {
        node {
          frontmatter {
              headline
              subheadline
              image {
                  childImageSharp {
                      fluid(maxWidth: 512, quality: 90) {
                      ...GatsbyImageSharpFluid_noBase64
                      }
                  }
              }
          }
          html
          fields {
              slug
          }
        }
      }
    }
  }
`