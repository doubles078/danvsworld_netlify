import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}><h3>{node.title}</h3></Link>
      <img src={node.featuredImage.responsiveResolution.src} />
      <div>{node.post.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({data}) => (
  <ul className='blog-post'>
    {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query SiteTitleQuery {
    allContentfulBlog ( 
      filter: { node_locale: {eq: "en-US"} },
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          featuredImage {
            responsiveResolution (width: 300, height:300) {
              src
            }
          }
          post {
            childMarkdownRemark {
              excerpt
            }
          } 
          slug
          title
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`