const fs = require("fs")
const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@utils': path.resolve(__dirname, 'src/utils/')
      }
    }
  })
}

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/"

  const { createRedirect } = actions
  createRedirect({
    fromPath: '/design',
    toPath: '/',
    isPermanent: true,
    redirectInBrowser: true
  })

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/index.js")
  })

  const { createFilePath } = require(`gatsby-source-filesystem`)

  exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `ListYaml`) {
      const value = createFilePath({ node, getNode, basePath: basePath })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }

  const result = await graphql(`
    query {
      allListYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error loading events: ", reporter.errors)
    return
  }

  const listTemplate = require.resolve(`./src/templates/page.js`)
  const lists = result.data.allListYaml.edges

  lists.forEach(list => {
    const slug = list.node.id
    actions.createPage({
      path: `/resources/${slug}`,
      component: listTemplate,
      context: {
        id: slug,
        slug: slug
      }
    })
  })
}