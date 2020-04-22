import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About this site"
        description="Information about the site."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section>
        <h1>About this site</h1>
        <figure>
          <img
            src="/images/bubbles-callout.png"
            width="480"
            height="440"
            alt="Bubbles the Robot"
          />
        </figure>
        <div>
          <p>This is the first page I've created using Gatsby!</p>
          <p>
            It was originally based on the Index page, but now it's totally
            unique!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
