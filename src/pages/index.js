import React from "react"
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
        <NeuWrapper>
          <p>This file, index.js, functions as the homepage for the site.</p>
          <p>
            It can be populated with pure HTML like this, and extended using all
            available Gatsby and React components.
          </p>
        </NeuWrapper>
      </section>
    </Layout>
  )
}

export default IndexPage
