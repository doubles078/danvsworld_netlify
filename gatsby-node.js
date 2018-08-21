const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;
 
  function removeSpaceAndLowerCase(tag) {
    return tag.toLowerCase().replace(/\s/g, '');
  }

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');
    const homepageTagTemplate = path.resolve('src/templates/homepage-tag.js');

    resolve(
      graphql(`
        {
          allContentfulBlog (limit: 100) {
            edges {
              node {
                id
                slug
                tags
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })

          edge.node.tags.forEach((tag) => {
            createPage ({
              path: removeSpaceAndLowerCase(tag),
              component: homepageTagTemplate,
              context: {
                slug: removeSpaceAndLowerCase(tag)
              }
            })
          })
        })

        return
      })
    )
  })
}

