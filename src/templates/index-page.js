import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'


const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  
  console.log(frontmatter);
  return (
    <Layout>
        {frontmatter.title} <br/>
        {/* {frontmatter.heading} <br/>
        {frontmatter.subheading} <br/>
        {frontmatter.mainpitch} <br/>
        {frontmatter.description} <br/>
        {frontmatter.intro} <br/> */}
        <img style={{'width': '500px'}} src={frontmatter.image.childImageSharp.fluid.src} alt="This is a sample text"></img>
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
