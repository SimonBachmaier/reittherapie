import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import TextImageSection from '../components/TextImageSection';
import HorseCarousel from '../components/HorseCarousel';
import TextSection from '../components/TextSection';


const IndexPage = ({ data }) => {
  console.log(data, this)
  const { frontmatter } = data.markdownRemark
  
  console.log(frontmatter);
  return (
    <TextSection
      headline="This site is under construction"
    >

    </TextSection>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage


export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`
