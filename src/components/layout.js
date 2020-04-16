/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to the content
      </a>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <main id="primary">
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
