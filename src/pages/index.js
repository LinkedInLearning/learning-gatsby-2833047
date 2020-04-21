import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const NeuWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 2rem 1rem;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 1rem 1rem 3rem hsla(0, 0%, 100%, 0.2), -1rem -1rem 3rem #ffffff;
`
const PageHeader = styled.h1`
  text-align: center;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="The Project"
        description="A Gatsby site to be proud of."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img
          className={style.headerImage}
          fluid={data.headerImage.childImageSharp.fluid}
          alt="Robots"
        />
        <PageHeader className={style.heading}>
          Welcome to the Project
        </PageHeader>
        <NeuWrapper>
          <p>This is the site we built together using Gatsby.</p>
          <p>
            Though it may not look like much, it holds all the essentials you'll
            need to get started building your own sites with Gatsby.
          </p>
          <p>
            Make sure to check out the updated templates to see how the SEO
            component is used, updated gatsby-node.js file for an additional
            function to handle markdown articles without subject taxonomies, and
            feel free to use this site as a template to build your own sites
            with Gatsby!
          </p>
          <p>
            And finally, lykke til from me to you on your journey with Gatsby!
          </p>
        </NeuWrapper>
      </section>
    </Layout>
  )
}

export default IndexPage

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
