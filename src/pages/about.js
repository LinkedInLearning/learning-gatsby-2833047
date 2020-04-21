import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About the Project"
        description="Information about the site."
        image="/logo.png"
        pathname="/about"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
        <h1 className={style.heading}>About this site</h1>
        <div>
          <figure className={style.image}>
            <Img
              fixed={data.robotImage.childImageSharp.fixed}
              alt="Eileen the Robot"
            />
          </figure>

          <p>
            This site was built with Gatsby and patience. Learning Gatsby
            requires taking the time to fully understand and embrace the
            principles of React <em>and</em> static site generators.
          </p>
          <p>
            On a macro level, Gatsby combines the best parts from CMSes
            (templates and object-orientation) with the best parts of React
            (components) and the best parts of the Old (dare I say "Classic?")
            Web (DWTs and static sites) to create performant accessible and
            robust websites for today and for the future.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "robots-androids-and-cyborgs-oh-my-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotImage: file(relativePath: { eq: "bubbles-disc.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
