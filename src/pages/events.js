import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./events.module.css"

const IndexPage = ({ data }) => {
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
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
        <h1 className={style.heading}>Events</h1>
        <div>
          <Img
            className={style.image}
            fixed={data.bodyImage.childImageSharp.fixed}
            alt="Robots"
          />
          <p>We attend and present at many events. Come join us!</p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "getting-creative-with-3-d-printers-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bodyImage: file(relativePath: { eq: "bubbles-disc.png" }) {
      childImageSharp {
        fixed(width: 288, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
