import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotimage"
import style from "./events.module.css"

const AboutPage = ({ data }) => {
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
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
        <h1 className={style.heading}>About this site</h1>
        <RobotImage
          src={"/images/bubbles-callout.png"}
          alt={"Bubbles the Robot"}
        />
        <RobotImage src={"/images/dolly-callout.png"} alt={"Dolly the Robot"} />
        <RobotImage
          src={"/images/eileen-callout.png"}
          alt={"Eileen the Robot"}
        />
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
  }
`
