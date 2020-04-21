/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)

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

// Default subject taxonomy to "random" if no subject provided.
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        subject: {
          type: "[String!]",
          resolve(source, args, context, info) {
            const { subject } = source
            if (
              source.subject == null ||
              (Array.isArray(subject) && !subject.length)
            ) {
              return ["random"]
            }
            return subject
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

// Markdown items: Create slug nodes based on folder
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
      taxQuery: allMarkdownRemark {
        group(field: frontmatter___subject) {
          nodes {
            id
          }
          fieldValue
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

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/articles", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`./src/templates/articles.js`), // Just like `createPage()`
  })

  const taxonomies = queryResult.data.taxQuery.group
  taxonomies.map(({ nodes: nodes, fieldValue: fieldValue }) => {
    paginate({
      createPage, // The Gatsby `createPage` function
      items: nodes, // An array of objects
      itemsPerPage: 2, // How many items you want per page
      pathPrefix: `/subjects/${_.kebabCase(fieldValue)}`, // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve(`./src/templates/subjects.js`), // Just like `createPage()`
      context: { subject: fieldValue },
    })
  })
}
