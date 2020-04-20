import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

import style from "./artindex.module.css"
import Layout from "../components/layout"
import Pagination from "../components/pagination"

// Component to place a conditional wrapper around content.
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const ArticleIndex = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <section className={style.articlelist}>
        <h2>Articles</h2>
        <ul>
          {posts.map(({ post }, index) => (
            <li key={index} className={style.listitem}>
              {post.frontmatter.featimg && (
                <figure className={style.featimg}>
                  <Link to={post.fields.slug}>
                    <Img
                      fluid={post.frontmatter.featimg.childImageSharp.fixed}
                      alt={post.frontmatter.title}
                    />
                  </Link>
                </figure>
              )}
              <ConditionalWrapper
                // If featured image, wrap content in <div>.
                condition={post.frontmatter.featimg}
                wrapper={children => (
                  <div className={style.article__wrap}>{children}</div>
                )}
              >
                <Link to={post.fields.slug}>
                  <h1 className={style.article__title}>
                    {post.frontmatter.title}
                  </h1>
                </Link>

                <div className={style.article__meta}>
                  by {post.frontmatter.author}. Published{" "}
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                </div>
                <div className={style.article__tax}>
                  Filed under:{" "}
                  {post.frontmatter.subject.map((subject, index) => [
                    index > 0 && ", ",
                    <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
                      {subject}
                      {index}
                    </Link>,
                  ])}
                </div>
                <div
                  className={style.article__content}
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              </ConditionalWrapper>
            </li>
          ))}
        </ul>
      </section>
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export default ArticleIndex

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date
            subject
            author
            featimg {
              childImageSharp {
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
