const path = require('path');

exports.createPages = async ({ page,  actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  if (page?.path.match(/^\/results/)) {
    page.matchPath = "/results/*"

    // Update the page.
    createPage(page)
  }
}
