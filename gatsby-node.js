const path = require("path")
const caseTemplate = path.resolve(
  __dirname,
  "src",
  "templates",
  "case-template.js"
)

const blogTemplate = path.resolve(
  __dirname,
  "src",
  "templates",
  "blog-template.js"
)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulCasePage {
        nodes {
          id
          slug
        }
      }
    }
  `)

  result.data.allContentfulCasePage.nodes.forEach(node => {
    createPage({
      path: "case/" + node.slug,
      component: caseTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  const resultBlog = await graphql(`
    {
      allContentfulBlogPage {
        nodes {
          slug
        }
      }
    }
  `)

  resultBlog.data.allContentfulBlogPage.nodes.forEach(node => {
    createPage({
      path: "news/" + node.slug,
      component: blogTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
