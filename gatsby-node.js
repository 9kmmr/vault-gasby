const path = require('path');

exports.createPages = async ({ page,  actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  /* if (page?.path.match(/^\/results/)) {
    page.matchPath = "/results/*"

    // Update the page.
    createPage(page)
  } */

  const templateOfYourCharacterPage = path.resolve(`src/pages/resultData.js`);
  characters.forEach(edge => {
    createPage({
      path: `/${edge.node.id}`,
      component: templateOfYourCharacterPage,
      context: {id: edge.node.uid, name: edge.node.name } // This is to pass data as props to your component.
    })
  })

}
