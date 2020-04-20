/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Events
 */

// Define the "Event" node type with a "collection" field.
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
      type Event implements Node @dontInfer {
      id: ID!
      name: String!
      location: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      collection: String!
      }
    `)
}

// Add and populate a "collection" field based on the file directory name.
exports.createResolvers = ({ createResolvers, getNode }) => {
  // Get the containing directory for the event (past or future)
  const collection = source => getNode(source.parent).relativeDirectory

  // Add a "collection" field to each node.
  createResolvers({
    Event: {
      collection: {
        resolve: source => collection(source),
      },
    },
  })
}

/**
 * Articles
 */

// Markdown items: Create slug and collection nodes based on folder
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })

    actions.createNodeField({
      node,
      name: `slug`,
      value: `/articles${slug}`,
    })
  }
}

// Generate pages for each article.

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query all the data
  const queryResult = await graphql(`
    {
      postQuery: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (queryResult.errors) {
    reporter.panic("error loading events", queryResult.errors)
    return
  }

  // Generate single post pages
  const posts = queryResult.data.postQuery.edges
  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: post.node.fields.slug,
      },
    })
  })
}
