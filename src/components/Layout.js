import React from 'react'
// import { Helmet } from 'react-helmet'
// import useSiteMetadata from './SiteMetadata'

const Layout = ({ children }) => {
  // const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      {/* <Navbar /> */}
        {children}
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Layout
