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
    <Layout headerText="Reittherapie im Altmühltal">
      <TextSection 
        headline="Reittherapie für ein gesünderes Leben"
        subheadline="Mensch und Tier in Harmonie"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
                        <p>Nobis quae eaque facere architecto eligendi, voluptas quasi, blanditiis aperiam possimus inventore quis nam! Cupiditate necessitatibus, voluptatem excepturi placeat exercitationem quos vitae ut vero dolorem, provident sit odio porro facere.</p>
      </TextSection>
      <HorseCarousel />
      <TextImageSection />
        {/* {frontmatter.title} <br/>
        {frontmatter.heading} <br/>
        {frontmatter.subheading} <br/>
        {frontmatter.mainpitch} <br/>
        {frontmatter.description} <br/>
        {frontmatter.intro} <br/>
        <img style={{'width': '500px'}} src={frontmatter.image.childImageSharp ? frontmatter.image.childImageSharp.fluid.src : frontmatter.image} alt="This is a sample text"></img> */}
    </Layout>
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
