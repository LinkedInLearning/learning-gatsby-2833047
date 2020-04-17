import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

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
      <section className={style.wrapper}>
        <h1 className={style.heading}>This is the new title for the page.</h1>
        <div>
          <p>This file, index.js, functions as the homepage for the site.</p>
          <p>
            It can be populated with pure HTML like this, and extended using all
            available Gatsby and React components.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
