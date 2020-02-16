import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'
import Header from './Header'
import HeroImage from './HeroImage'
import QuickInfo from './QuickInfo'
import Footer from './Footer'

const Layout = (props) => {
  const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      <Helmet
        title={props.siteTitle? props.siteTitle + ' - ' + title : title}
        meta={[
          {
            name: "description",
            content:description
          }
        ]}
        htmlAttributes={{lang: "de"}}
      >
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
      </Helmet>
      <Header />

      <HeroImage title={props.headerText} hideImage={props.hideImage} fancyFont={props.fancyFont} image={props.headerImage}/>
      <QuickInfo />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
