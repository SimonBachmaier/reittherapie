import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import TextImage from '../components/TextImage';
import HorseCarousel from '../components/HorseCarousel';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';
import FeaturesSection from '../components/FeaturesSection';
import Img from "gatsby-image"
import { Container, Row } from 'react-bootstrap';


const IndexPage = ({ data }) => {
  let md = data.markdownRemark;
  let logoFixed = data.file.childImageSharp.fluid;
  return (
    <Layout headerText={md.frontmatter.siteTitle} fancyFont={true} headerImage={md.frontmatter.headerImage.childImageSharp}>

      <SiteSection> 
        <Text className=""
          headline={md.frontmatter.headline}
          subheadline={md.frontmatter.subheadline}
          html={md.html}
         />
      </SiteSection>

      <Container>
        <Row className='home-logo-container'>
            <Img className="home-logo" fluid={logoFixed}  />
        </Row>
      </Container>
      
      <SiteSection>
        <Text className="feature-title-home" centered={true} headline="Unser Therapieangebot"></Text>
        <FeaturesSection />
        <Text centered={true}>
              <p>
                Aufgrund meiner vielfältigen Ausbildungen kann ich verschiedene  Therapien und pädagogische Interventionen anbieten und anwenden.<br/>
                <br/>
                Bei einem Vorgespräch werden die passendsten Methoden individuell für Sie, Ihr Kind oder ihre Gruppe ermittelt. Wir erarbeiten daraufhin einen flexiblen Therapieplan für Sie, den wir je nach Fortschritt und Bedarf anpassen, um Sie zielgerichtet zu unterstützen.<br/>
                <br/>
                Wir arbeiten auch interdisziplinär mit anderen Therapeuten, wie Heilpädagogen, Physiotherapeuten, Ergotherapeuten, Logopäden und Psychologen zusammen.<br/>
                <br/>
                Begleitende Elterngespräche und der Austausch mit Erziehern und pädagogischen Begleitpersonen sind auch wichtige Aspekte unserer therapeutischen und heilpädagogischen Arbeit.
              </p>
          </Text>
      </SiteSection>

      <SiteSection>
        <HorseCarousel className="" />
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
    file(relativePath: { eq: "logo_transparent_xsm.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1200, maxHeight: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`
