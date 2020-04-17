import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./events.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Events"
        description="Come join us at an event in the future!"
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>Events</h1>
        <div>
          <p>We attend and present at many events. Come join us!</p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
