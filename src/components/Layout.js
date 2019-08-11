import React from 'react'
// import { Helmet } from 'react-helmet'
// import useSiteMetadata from './SiteMetadata'
import Header from './Header'
import HeroImage from './HeroImage'
import QuickInfo from './QuickInfo'
import Footer from './Footer'

const Layout = (props) => {
  // const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      <Header />
      <HeroImage title={props.headerText} hideImage={props.hideImage} fancyFont={props.fancyFont}/>
      <QuickInfo />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
