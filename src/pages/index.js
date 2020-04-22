import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="The home page"
        description="You can customize the SEO text here."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section>
        <h1>This is where the front page content will eventually go.</h1>
        <div><p>This file, index.js, functions as the homepage for the site.</p>
        <p>It can be populated with pure HTML like this, and extended using all available Gatsby and React components.</p></div>
      </section>
    </Layout>
  )
}


export default IndexPage
