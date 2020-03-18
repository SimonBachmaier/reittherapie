import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import TextImage from '../components/TextImage';
import HorseCarousel from '../components/HorseCarousel';
import Text from '../components/Text';
import SiteSection from '../components/SiteSection';
import FeaturesSection from '../components/FeaturesSection';


const IndexPage = ({ data }) => {
  let md = data.markdownRemark;
  return (
    <Layout headerText={md.frontmatter.siteTitle} fancyFont={true} headerImage={md.frontmatter.headerImage.childImageSharp}>

      <SiteSection> 
        <Text className=""
          headline={md.frontmatter.headline}
          subheadline={md.frontmatter.subheadline}
          html={md.html}
         /> 
      </SiteSection>

      <SiteSection> 
        <HorseCarousel className="" />
      </SiteSection>
      
      <SiteSection>
        <Text centered={true}
              subheadline="Unser Therapieangebot"
          >
              <p>
                Aufgrund meiner vielfältigen Ausbildungen kann ich verschiedene  Therapien und pädagogische Interventionen anbieten und anwenden.<br/>
                <br/>
                Bei einem Vorgespräch werden die passendsten Methoden individuell für Sie, Ihr Kind oder ihre Gruppe ermittelt. Wir erarbeiten daraufhin einen flexiblen Therapieplan für Sie, den wir je nach Fortschritt und Bedarf anpassen, um Sie zielgerichtet zu unterstützen.<br/>
                <br/>
                Wir arbeiten auch interdisziplinär mit anderen Therapeuten, wie Heilpädagogen, Physiotherapeuten, Ergotherapeuten, Logopäden und Psychologen zusammen.<br/>
                <br/>
                Begleitende Elterngespräche und der Austausch mit Erziehern und pädagogischen Begleitpersonen sind auch wichtige Aspekte unserer therapeutischen und heilpädagogischen Arbeit.</p>
          </Text>

          <FeaturesSection />
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
  }
`
