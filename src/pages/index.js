import React from 'react'
import Link from 'gatsby-link'
import BlogPostCard from '../components/global/blogPostCard'

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