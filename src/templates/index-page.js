import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import TextImage from '../components/TextImage';
import HorseCarousel from '../components/HorseCarousel';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';
import Features from '../components/features';


const IndexPage = ({ data }) => {
  console.log(data, this)
  const { frontmatter } = data.markdownRemark
  
  console.log(frontmatter);
  return (
    <Layout headerText="Reittherapie im Altmühltal" fancyFont={true}>

    <SiteSection> 
      <Text className=""
        headline="Reittherapie für ein gesünderes Leben"
        subheadline="Mensch und Tier in Harmonie"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
                        <p>Nobis quae eaque facere architecto eligendi, voluptas quasi, blanditiis aperiam possimus inventore quis nam! Cupiditate necessitatibus, voluptatem excepturi placeat exercitationem quos vitae ut vero dolorem, provident sit odio porro facere.</p>
      </Text> 
    </SiteSection>

    <SiteSection> <TextImage className="" /> </SiteSection>
    <SiteSection> <HorseCarousel className="" /> </SiteSection>
    <SiteSection>
      <Text centered={true}
            subheadline="Unsere Leistungen"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam illum maiores adipisci pariatur, eveniet.</p>
        </Text>

        <Features />
    </SiteSection>
      
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
