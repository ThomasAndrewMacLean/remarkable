const path = require("path")
const caseTemplate = path.resolve(
  __dirname,
  "src",
  "templates",
  "case-template.js"
)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulCasePage {
        nodes {
          id
          slug
          client
          title
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  console.log(result)
  result.data.allContentfulCasePage.nodes.forEach(node => {
    createPage({
      path: "case/" + node.slug,
      component: caseTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
