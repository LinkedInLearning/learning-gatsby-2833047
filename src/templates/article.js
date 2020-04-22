import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./article.module.css"

export default ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={article.frontmatter.title}
        description={article.excerpt}
        image="/logo.png"
        pathname={article.fields.slug}
        // Boolean indicating whether this is an article:
        article
      />
      <article className={style.article}>
        {article.frontmatter.featimg && (
          <figure className={style.featimg}>
            <Img
              fluid={article.frontmatter.featimg.childImageSharp.fluid}
              alt={article.frontmatter.title}
            />
          </figure>
        )}

        <h1 className={style.article__title}>{article.frontmatter.title}</h1>

        <div className={style.article__meta}>
          by {article.frontmatter.author}. Published{" "}
          {new Date(article.frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </div>
        <div className={style.article__tax}>
          Filed under:{" "}
          {article.frontmatter.subject.map((subject, index) => [
            index > 0 && ", ",
            <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
              {subject}
            </Link>,
          ])}
        </div>
        <div
          className={style.article__content}
          // See https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        subject
        author
        featimg {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
